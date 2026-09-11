package com.smartcampus.service;

import com.smartcampus.dao.BookingDAO;
import com.smartcampus.dao.SlotDAO;
import com.smartcampus.model.Booking;

import java.sql.SQLException;
import java.util.List;

public class BookingService {

    private final BookingDAO bookingDAO;
    private final SlotDAO slotDAO;

    public BookingService() {
        this.bookingDAO = new BookingDAO();
        this.slotDAO = new SlotDAO();
    }

    public void createBooking(Booking booking) throws SQLException {

        if (booking == null) {
            throw new IllegalArgumentException("Booking cannot be null.");
        }

        if (booking.getBookingId() <= 0) {
            throw new IllegalArgumentException(
                "Booking ID must be greater than 0."
            );
        }

        if (booking.getUserId() <= 0) {
            throw new IllegalArgumentException(
                "User ID must be greater than 0."
            );
        }

        if (booking.getSlotId() <= 0) {
            throw new IllegalArgumentException(
                "Slot ID must be greater than 0."
            );
        }

        if (!slotDAO.isAvailable(booking.getSlotId())) {
            throw new IllegalArgumentException(
                "Selected slot is not available."
            );
        }

        booking.setBookingStatus("PENDING");

        bookingDAO.create(booking);
    }

    public Booking getBooking(int bookingId) throws SQLException {

        if (bookingId <= 0) {
            throw new IllegalArgumentException(
                "Booking ID must be greater than 0."
            );
        }

        return bookingDAO.getById(bookingId);
    }

    public List<Booking> getAllBookings() throws SQLException {
        return bookingDAO.getAll();
    }

    public List<Booking> getUserBookings(int userId)
            throws SQLException {

        if (userId <= 0) {
            throw new IllegalArgumentException(
                "User ID must be greater than 0."
            );
        }

        return bookingDAO.getBookingsByUser(userId);
    }

    public List<Booking> getBookingsByStatus(String status)
            throws SQLException {

        if (status == null || status.trim().isEmpty()) {
            throw new IllegalArgumentException(
                "Booking status is required."
            );
        }

        return bookingDAO.getBookingsByStatus(status);
    }

    public void approveBooking(int bookingId) throws SQLException {

        if (bookingId <= 0) {
            throw new IllegalArgumentException(
                "Booking ID must be greater than 0."
            );
        }

        bookingDAO.updateBookingStatus(bookingId, "APPROVED");
    }

    public void rejectBooking(int bookingId) throws SQLException {

        if (bookingId <= 0) {
            throw new IllegalArgumentException(
                "Booking ID must be greater than 0."
            );
        }

        bookingDAO.updateBookingStatus(bookingId, "REJECTED");
    }

    public void cancelBooking(int bookingId) throws SQLException {

        if (bookingId <= 0) {
            throw new IllegalArgumentException(
                "Booking ID must be greater than 0."
            );
        }

        bookingDAO.cancelBooking(bookingId);
    }

    public void deleteBooking(int bookingId) throws SQLException {

        if (bookingId <= 0) {
            throw new IllegalArgumentException(
                "Booking ID must be greater than 0."
            );
        }

        bookingDAO.delete(bookingId);
    }
}