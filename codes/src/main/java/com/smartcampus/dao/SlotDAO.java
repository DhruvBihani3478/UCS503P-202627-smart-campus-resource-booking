package com.smartcampus.dao;

import com.smartcampus.model.Slot;
import com.smartcampus.util.DBconnection;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class SlotDAO {

    // CREATE
    public void create(Slot slot) throws SQLException {

        String sql = "INSERT INTO SLOT " +
                     "(SLOT_ID, RESOURCE_ID, SLOT_DATE, START_TIMES, END_TIMES, S_STATUS) " +
                     "VALUES (?, ?, ?, ?, ?, ?)";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, slot.getSlotId());
            statement.setInt(2, slot.getResourceId());
            statement.setDate(3, slot.getDate());
            statement.setString(4, slot.getStartTime());
            statement.setString(5, slot.getEndTime());
            statement.setString(6, slot.getAvailabilityStatus());

            statement.executeUpdate();
        }
    }

    // READ - Get slot by ID
    public Slot getById(int slotId) throws SQLException {

        String sql = "SELECT SLOT_ID, RESOURCE_ID, SLOT_DATE, " +
                     "START_TIMES, END_TIMES, S_STATUS " +
                     "FROM SLOT " +
                     "WHERE SLOT_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, slotId);

            try (ResultSet resultSet = statement.executeQuery()) {

                if (resultSet.next()) {
                    return mapSlot(resultSet);
                }
            }
        }

        return null;
    }

    // READ - Get all slots
    public List<Slot> getAll() throws SQLException {

        List<Slot> slots = new ArrayList<>();

        String sql = "SELECT SLOT_ID, RESOURCE_ID, SLOT_DATE, " +
                     "START_TIMES, END_TIMES, S_STATUS " +
                     "FROM SLOT " +
                     "ORDER BY SLOT_DATE, START_TIMES";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet resultSet = statement.executeQuery()) {

            while (resultSet.next()) {
                slots.add(mapSlot(resultSet));
            }
        }

        return slots;
    }

    // READ - Get slots for a resource
    public List<Slot> getSlotsByResource(int resourceId)
            throws SQLException {

        List<Slot> slots = new ArrayList<>();

        String sql = "SELECT SLOT_ID, RESOURCE_ID, SLOT_DATE, " +
                     "START_TIMES, END_TIMES, S_STATUS " +
                     "FROM SLOT " +
                     "WHERE RESOURCE_ID = ? " +
                     "ORDER BY SLOT_DATE, START_TIMES";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, resourceId);

            try (ResultSet resultSet = statement.executeQuery()) {

                while (resultSet.next()) {
                    slots.add(mapSlot(resultSet));
                }
            }
        }

        return slots;
    }

    // READ - Get available slots for a resource
    public List<Slot> getAvailableSlots(int resourceId)
            throws SQLException {

        List<Slot> slots = new ArrayList<>();

        String sql = "SELECT SLOT_ID, RESOURCE_ID, SLOT_DATE, " +
                     "START_TIMES, END_TIMES, S_STATUS " +
                     "FROM SLOT " +
                     "WHERE RESOURCE_ID = ? " +
                     "AND UPPER(S_STATUS) = 'AVAILABLE' " +
                     "ORDER BY SLOT_DATE, START_TIMES";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, resourceId);

            try (ResultSet resultSet = statement.executeQuery()) {

                while (resultSet.next()) {
                    slots.add(mapSlot(resultSet));
                }
            }
        }

        return slots;
    }

    // READ - Check whether a slot is available
    public boolean isAvailable(int slotId) throws SQLException {

        String sql = "SELECT S_STATUS " +
                     "FROM SLOT " +
                     "WHERE SLOT_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, slotId);

            try (ResultSet resultSet = statement.executeQuery()) {

                if (resultSet.next()) {

                    String status = resultSet.getString("S_STATUS");

                    return status != null &&
                           status.equalsIgnoreCase("AVAILABLE");
                }
            }
        }

        return false;
    }

    // UPDATE
    public void update(Slot slot) throws SQLException {

        String sql = "UPDATE SLOT " +
                     "SET RESOURCE_ID = ?, " +
                     "SLOT_DATE = ?, " +
                     "START_TIMES = ?, " +
                     "END_TIMES = ?, " +
                     "S_STATUS = ? " +
                     "WHERE SLOT_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, slot.getResourceId());
            statement.setDate(2, slot.getDate());
            statement.setString(3, slot.getStartTime());
            statement.setString(4, slot.getEndTime());
            statement.setString(5, slot.getAvailabilityStatus());
            statement.setInt(6, slot.getSlotId());

            statement.executeUpdate();
        }
    }

    // DELETE
    public void delete(int slotId) throws SQLException {

        String sql = "DELETE FROM SLOT WHERE SLOT_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, slotId);

            statement.executeUpdate();
        }
    }

    // Convert database row into Slot object
    private Slot mapSlot(ResultSet resultSet) throws SQLException {

        Slot slot = new Slot();

        slot.setSlotId(
                resultSet.getInt("SLOT_ID")
        );

        slot.setResourceId(
                resultSet.getInt("RESOURCE_ID")
        );

        slot.setDate(
                resultSet.getDate("SLOT_DATE")
        );

        slot.setStartTime(
                resultSet.getString("START_TIMES")
        );

        slot.setEndTime(
                resultSet.getString("END_TIMES")
        );

        slot.setAvailabilityStatus(
                resultSet.getString("S_STATUS")
        );

        return slot;
    }
}