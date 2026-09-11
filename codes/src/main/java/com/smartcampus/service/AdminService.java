package com.smartcampus.service;

import com.smartcampus.dao.BookingDAO;
import com.smartcampus.dao.ResourceDAO;
import com.smartcampus.dao.ResourceLogDAO;
import com.smartcampus.dao.SlotDAO;
import com.smartcampus.dao.UserDAO;
import com.smartcampus.model.Booking;
import com.smartcampus.model.Resource;
import com.smartcampus.model.ResourceLog;
import com.smartcampus.model.Slot;
import com.smartcampus.model.User;

import java.sql.SQLException;
import java.util.List;

public class AdminService {

    private final UserDAO userDAO;
    private final ResourceDAO resourceDAO;
    private final SlotDAO slotDAO;
    private final BookingDAO bookingDAO;
    private final ResourceLogDAO resourceLogDAO;

    public AdminService() {
        this.userDAO = new UserDAO();
        this.resourceDAO = new ResourceDAO();
        this.slotDAO = new SlotDAO();
        this.bookingDAO = new BookingDAO();
        this.resourceLogDAO = new ResourceLogDAO();
    }

    public List<User> getAllUsers() throws SQLException {
        return userDAO.getAll();
    }

    public void deleteUser(int userId) throws SQLException {

        if (userId <= 0) {
            throw new IllegalArgumentException(
                "User ID must be greater than 0."
            );
        }

        userDAO.delete(userId);
    }

    public List<Resource> getAllResources() throws SQLException {
        return resourceDAO.getAll();
    }

    public void deleteResource(int resourceId) throws SQLException {

        if (resourceId <= 0) {
            throw new IllegalArgumentException(
                "Resource ID must be greater than 0."
            );
        }

        resourceDAO.delete(resourceId);
    }

    public List<Slot> getAllSlots() throws SQLException {
        return slotDAO.getAll();
    }

    public void deleteSlot(int slotId) throws SQLException {

        if (slotId <= 0) {
            throw new IllegalArgumentException(
                "Slot ID must be greater than 0."
            );
        }

        slotDAO.delete(slotId);
    }

    public List<Booking> getAllBookings() throws SQLException {
        return bookingDAO.getAll();
    }

    public List<Booking> getPendingBookings() throws SQLException {
        return bookingDAO.getBookingsByStatus("PENDING");
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

    public List<ResourceLog> getResourceLogs() throws SQLException {
        return resourceLogDAO.getAll();
    }
}