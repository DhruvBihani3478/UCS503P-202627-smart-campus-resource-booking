package com.smartcampus.dao;

import com.smartcampus.model.Booking;

import java.util.List;

public class BookingDAOTest {

    public static void main(String[] args) {

        try {

            BookingDAO bookingDAO = new BookingDAO();

            List<Booking> bookings = bookingDAO.getAll();

            System.out.println("=================================");
            System.out.println("BOOKINGS FROM FREE SQL ORACLE");
            System.out.println("=================================");

            for (Booking booking : bookings) {

                System.out.println(
                    "ID: " + booking.getBookingId() +
                    " | User ID: " + booking.getUserId() +
                    " | Slot ID: " + booking.getSlotId() +
                    " | Booking Date: " + booking.getBookingDate() +
                    " | Status: " + booking.getBookingStatus()
                );
            }

            System.out.println("=================================");
            System.out.println("Total bookings: " + bookings.size());
            System.out.println("=================================");

        } catch (Exception e) {

            System.out.println("=================================");
            System.out.println("FAILED TO FETCH BOOKINGS");
            System.out.println("=================================");

            e.printStackTrace();
        }
    }
}