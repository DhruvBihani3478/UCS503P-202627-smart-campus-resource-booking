package com.smartcampus.dao;

import com.smartcampus.model.Booking;
import com.smartcampus.util.DBconnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BookingDAO {

    // CREATE
    public void create(Booking booking) throws SQLException {

        String sql = "INSERT INTO BOOKING " +
                     "(BOOKING_ID, USER_ID, SLOT_ID, BOOKING_DATE, B_STATUS) " +
                     "VALUES (?, ?, ?, ?, ?)";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, booking.getBookingId());
            statement.setInt(2, booking.getUserId());

            if (booking.getSlotId() > 0) {
                statement.setInt(3, booking.getSlotId());
            } else {
                statement.setNull(3, java.sql.Types.NUMERIC);
            }

            if (booking.getBookingDate() != null) {
                statement.setDate(4, booking.getBookingDate());
            } else {
                statement.setDate(
                    4,
                    new java.sql.Date(System.currentTimeMillis())
                );
            }

            statement.setString(5, booking.getBookingStatus());

            statement.executeUpdate();
        }
    }

    // READ - Get booking by ID
    public Booking getById(int bookingId) throws SQLException {

        String sql = "SELECT BOOKING_ID, USER_ID, SLOT_ID, " +
                     "BOOKING_DATE, B_STATUS " +
                     "FROM BOOKING " +
                     "WHERE BOOKING_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, bookingId);

            try (ResultSet resultSet = statement.executeQuery()) {

                if (resultSet.next()) {
                    return mapBooking(resultSet);
                }
            }
        }

        return null;
    }

    // READ - Get all bookings
    public List<Booking> getAll() throws SQLException {

        List<Booking> bookings = new ArrayList<>();

        String sql = "SELECT BOOKING_ID, USER_ID, SLOT_ID, " +
                     "BOOKING_DATE, B_STATUS " +
                     "FROM BOOKING " +
                     "ORDER BY BOOKING_DATE DESC";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet resultSet = statement.executeQuery()) {

            while (resultSet.next()) {
                bookings.add(mapBooking(resultSet));
            }
        }

        return bookings;
    }

    // READ - Get bookings by user
    public List<Booking> getBookingsByUser(int userId)
            throws SQLException {

        List<Booking> bookings = new ArrayList<>();

        String sql = "SELECT BOOKING_ID, USER_ID, SLOT_ID, " +
                     "BOOKING_DATE, B_STATUS " +
                     "FROM BOOKING " +
                     "WHERE USER_ID = ? " +
                     "ORDER BY BOOKING_DATE DESC";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, userId);

            try (ResultSet resultSet = statement.executeQuery()) {

                while (resultSet.next()) {
                    bookings.add(mapBooking(resultSet));
                }
            }
        }

        return bookings;
    }

    // READ - Get bookings by status
    public List<Booking> getBookingsByStatus(String status)
            throws SQLException {

        List<Booking> bookings = new ArrayList<>();

        String sql = "SELECT BOOKING_ID, USER_ID, SLOT_ID, " +
                     "BOOKING_DATE, B_STATUS " +
                     "FROM BOOKING " +
                     "WHERE UPPER(B_STATUS) = UPPER(?) " +
                     "ORDER BY BOOKING_DATE DESC";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setString(1, status);

            try (ResultSet resultSet = statement.executeQuery()) {

                while (resultSet.next()) {
                    bookings.add(mapBooking(resultSet));
                }
            }
        }

        return bookings;
    }

    // UPDATE - Update complete booking
    public void update(Booking booking) throws SQLException {

        String sql = "UPDATE BOOKING " +
                     "SET USER_ID = ?, " +
                     "SLOT_ID = ?, " +
                     "BOOKING_DATE = ?, " +
                     "B_STATUS = ? " +
                     "WHERE BOOKING_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, booking.getUserId());

            if (booking.getSlotId() > 0) {
                statement.setInt(2, booking.getSlotId());
            } else {
                statement.setNull(2, java.sql.Types.NUMERIC);
            }

            statement.setDate(3, booking.getBookingDate());
            statement.setString(4, booking.getBookingStatus());
            statement.setInt(5, booking.getBookingId());

            statement.executeUpdate();
        }
    }

    // UPDATE - Update only booking status
    public void updateBookingStatus(int bookingId, String status)
            throws SQLException {

        String sql = "UPDATE BOOKING " +
                     "SET B_STATUS = ? " +
                     "WHERE BOOKING_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setString(1, status);
            statement.setInt(2, bookingId);

            statement.executeUpdate();
        }
    }

    // DELETE / Cancel booking
    public void cancelBooking(int bookingId) throws SQLException {

        updateBookingStatus(bookingId, "CANCELLED");
    }

    // DELETE
    public void delete(int bookingId) throws SQLException {

        String sql = "DELETE FROM BOOKING WHERE BOOKING_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, bookingId);

            statement.executeUpdate();
        }
    }

    // Convert database row into Booking object
    private Booking mapBooking(ResultSet resultSet)
            throws SQLException {

        Booking booking = new Booking();

        booking.setBookingId(
                resultSet.getInt("BOOKING_ID")
        );

        booking.setUserId(
                resultSet.getInt("USER_ID")
        );

        int slotId = resultSet.getInt("SLOT_ID");

        if (resultSet.wasNull()) {
            booking.setSlotId(0);
        } else {
            booking.setSlotId(slotId);
        }

        booking.setBookingDate(
                resultSet.getDate("BOOKING_DATE")
        );

        booking.setBookingStatus(
                resultSet.getString("B_STATUS")
        );

        return booking;
    }
}