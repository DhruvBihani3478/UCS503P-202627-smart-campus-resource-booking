package com.smartcampus.model;

import java.sql.Date;

public class Booking {

    private int bookingId;
    private int userId;
    private int slotId;
    private String bookingStatus;
    private Date bookingDate;

    public Booking() {
    }

    public Booking(int bookingId, int userId, int slotId,
                   String bookingStatus, Date bookingDate) {

        this.bookingId = bookingId;
        this.userId = userId;
        this.slotId = slotId;
        this.bookingStatus = bookingStatus;
        this.bookingDate = bookingDate;
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getSlotId() {
        return slotId;
    }

    public void setSlotId(int slotId) {
        this.slotId = slotId;
    }

    public String getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(String bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }
}