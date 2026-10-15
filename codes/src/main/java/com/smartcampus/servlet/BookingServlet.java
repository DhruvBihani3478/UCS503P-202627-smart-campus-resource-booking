package com.smartcampus.servlet;

import com.smartcampus.model.Booking;
import com.smartcampus.service.BookingService;
import com.smartcampus.util.DBconnection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.io.IOException;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

@WebServlet("/api/bookings")
public class BookingServlet extends HttpServlet {

    private BookingService bookingService;

    @Override
    public void init() {
        bookingService = new BookingService();
    }

    @Override
    protected void doOptions(
            HttpServletRequest request,
            HttpServletResponse response)
            throws IOException {

        setCorsHeaders(request, response);
        response.setStatus(HttpServletResponse.SC_NO_CONTENT);
    }

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        setCorsHeaders(request, response);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        HttpSession session = request.getSession(false);

        if (session == null ||
                session.getAttribute("userId") == null) {
            writeError(response,
                    HttpServletResponse.SC_UNAUTHORIZED,
                    "Please log in first");
            return;
        }

        int userId;

        try {
            userId = Integer.parseInt(
                    session.getAttribute("userId").toString());

            List<Booking> bookings =
                    bookingService.getUserBookings(userId);

            StringBuilder json =
                    new StringBuilder("{\"bookings\":[");

            for (int i = 0; i < bookings.size(); i++) {
                if (i > 0) {
                    json.append(",");
                }

                json.append(toJson(bookings.get(i)));
            }

            json.append("]}");
            response.getWriter().write(json.toString());

        } catch (SQLException e) {
            getServletContext().log(
                    "Unable to retrieve bookings", e);

            writeError(response,
                    HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                    "Unable to retrieve bookings");
        }
    }

    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        setCorsHeaders(request, response);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        HttpSession session = request.getSession(false);

        if (session == null ||
                session.getAttribute("userId") == null) {
            writeError(response,
                    HttpServletResponse.SC_UNAUTHORIZED,
                    "Please log in first");
            return;
        }

        try {
            int userId = Integer.parseInt(
                    session.getAttribute("userId").toString());

            String slotParam = request.getParameter("slotId");
            String dateParam = request.getParameter("bookingDate");

            if (slotParam == null || slotParam.isBlank()) {
                throw new IllegalArgumentException(
                        "slotId is required");
            }

            int slotId = Integer.parseInt(slotParam);

            Date bookingDate = (dateParam == null ||
                    dateParam.isBlank())
                    ? Date.valueOf(LocalDate.now())
                    : Date.valueOf(LocalDate.parse(dateParam));

            int bookingId = getNextBookingId();

            Booking booking = new Booking();
            booking.setBookingId(bookingId);
            booking.setUserId(userId);
            booking.setSlotId(slotId);
            booking.setBookingDate(bookingDate);
            booking.setBookingStatus("PENDING");

            bookingService.createBooking(booking);

            response.setStatus(
                    HttpServletResponse.SC_CREATED);
            response.getWriter().write(toJson(booking));

        } catch (IllegalArgumentException e) {
            writeError(response,
                    HttpServletResponse.SC_BAD_REQUEST,
                    e.getMessage());

        } catch (SQLException e) {
            getServletContext().log(
                    "Unable to create booking", e);

            writeError(response,
                    HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                    "Unable to create booking");
        }
    }

    private int getNextBookingId() throws SQLException {
        String sql =
                "SELECT SEQ_BOOKING.NEXTVAL FROM DUAL";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement =
                     connection.prepareStatement(sql);
             ResultSet resultSet = statement.executeQuery()) {

            if (resultSet.next()) {
                return resultSet.getInt(1);
            }
        }

        throw new SQLException(
                "Could not generate booking ID");
    }

    private String toJson(Booking booking) {
        return "{"
                + "\"bookingId\":" + booking.getBookingId() + ","
                + "\"userId\":" + booking.getUserId() + ","
                + "\"slotId\":" + booking.getSlotId() + ","
                + "\"bookingDate\":\""
                + booking.getBookingDate() + "\","
                + "\"bookingStatus\":\""
                + escape(booking.getBookingStatus()) + "\""
                + "}";
    }

    private void writeError(
            HttpServletResponse response,
            int status,
            String message) throws IOException {

        response.setStatus(status);
        response.getWriter().write(
                "{\"error\":\"" + escape(message) + "\"}");
    }

    private void setCorsHeaders(
            HttpServletRequest request,
            HttpServletResponse response) {

        String origin = request.getHeader("Origin");

        if ("http://localhost:5173".equals(origin)) {
            response.setHeader(
                    "Access-Control-Allow-Origin", origin);
            response.setHeader(
                    "Access-Control-Allow-Credentials", "true");
            response.setHeader(
                    "Vary", "Origin");
            response.setHeader(
                    "Access-Control-Allow-Methods",
                    "GET, POST, OPTIONS");
            response.setHeader(
                    "Access-Control-Allow-Headers",
                    "Content-Type, Accept");
        }
    }

    private String escape(String value) {
        if (value == null) {
            return "";
        }

        return value.replace("\\\\", "\\\\\\\\")
                .replace("\"", "\\\\\"")
                .replace("\\n", "\\\\n")
                .replace("\\r", "\\\\r");
    }
}