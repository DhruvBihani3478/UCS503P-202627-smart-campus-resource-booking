package com.smartcampus.service;

import com.smartcampus.dao.SlotDAO;
import com.smartcampus.model.Slot;

import java.sql.SQLException;
import java.util.List;

public class SlotService {

    private final SlotDAO slotDAO;

    public SlotService() {
        this.slotDAO = new SlotDAO();
    }

    public void createSlot(Slot slot) throws SQLException {

        if (slot == null) {
            throw new IllegalArgumentException("Slot cannot be null.");
        }

        if (slot.getSlotId() <= 0) {
            throw new IllegalArgumentException(
                "Slot ID must be greater than 0."
            );
        }

        if (slot.getResourceId() <= 0) {
            throw new IllegalArgumentException(
                "Resource ID must be greater than 0."
            );
        }

        if (slot.getDate() == null) {
            throw new IllegalArgumentException(
                "Slot date is required."
            );
        }

        if (slot.getStartTime() == null ||
            slot.getStartTime().trim().isEmpty()) {
            throw new IllegalArgumentException(
                "Start time is required."
            );
        }

        if (slot.getEndTime() == null ||
            slot.getEndTime().trim().isEmpty()) {
            throw new IllegalArgumentException(
                "End time is required."
            );
        }

        if (slot.getAvailabilityStatus() == null ||
            slot.getAvailabilityStatus().trim().isEmpty()) {
            slot.setAvailabilityStatus("AVAILABLE");
        }

        slotDAO.create(slot);
    }

    public Slot getSlot(int slotId) throws SQLException {

        if (slotId <= 0) {
            throw new IllegalArgumentException(
                "Slot ID must be greater than 0."
            );
        }

        return slotDAO.getById(slotId);
    }

    public List<Slot> getAllSlots() throws SQLException {
        return slotDAO.getAll();
    }

    public List<Slot> getSlotsByResource(int resourceId)
            throws SQLException {

        if (resourceId <= 0) {
            throw new IllegalArgumentException(
                "Resource ID must be greater than 0."
            );
        }

        return slotDAO.getSlotsByResource(resourceId);
    }

    public List<Slot> getAvailableSlots(int resourceId)
            throws SQLException {

        if (resourceId <= 0) {
            throw new IllegalArgumentException(
                "Resource ID must be greater than 0."
            );
        }

        return slotDAO.getAvailableSlots(resourceId);
    }

    public boolean checkSlotAvailability(int slotId)
            throws SQLException {

        if (slotId <= 0) {
            throw new IllegalArgumentException(
                "Slot ID must be greater than 0."
            );
        }

        return slotDAO.isAvailable(slotId);
    }

    public void updateSlot(Slot slot) throws SQLException {

        if (slot == null) {
            throw new IllegalArgumentException(
                "Slot cannot be null."
            );
        }

        if (slot.getSlotId() <= 0) {
            throw new IllegalArgumentException(
                "Slot ID must be greater than 0."
            );
        }

        slotDAO.update(slot);
    }

    public void deleteSlot(int slotId) throws SQLException {

        if (slotId <= 0) {
            throw new IllegalArgumentException(
                "Slot ID must be greater than 0."
            );
        }

        slotDAO.delete(slotId);
    }
}