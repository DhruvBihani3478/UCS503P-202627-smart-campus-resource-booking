package com.smartcampus.dao;

import com.smartcampus.model.ResourceLog;
import com.smartcampus.util.DBconnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

public class ResourceLogDAO {

    // CREATE
    public void create(ResourceLog log) throws SQLException {

        String sql = "INSERT INTO RESOURCE_LOG " +
                     "(LOG_ID, RESOURCE_ID, ACTION, ACTION_TIME) " +
                     "VALUES (?, ?, ?, ?)";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, log.getLogId());

            if (log.getResourceId() > 0) {
                statement.setInt(2, log.getResourceId());
            } else {
                statement.setNull(2, java.sql.Types.NUMERIC);
            }

            statement.setString(3, log.getAction());

            if (log.getTimestamp() != null) {
                statement.setTimestamp(4, log.getTimestamp());
            } else {
                statement.setTimestamp(
                    4,
                    new Timestamp(System.currentTimeMillis())
                );
            }

            statement.executeUpdate();
        }
    }

    // READ - Get log by ID
    public ResourceLog getById(int logId) throws SQLException {

        String sql = "SELECT LOG_ID, RESOURCE_ID, ACTION, ACTION_TIME " +
                     "FROM RESOURCE_LOG " +
                     "WHERE LOG_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, logId);

            try (ResultSet resultSet = statement.executeQuery()) {

                if (resultSet.next()) {
                    return mapLog(resultSet);
                }
            }
        }

        return null;
    }

    // READ - Get logs for a resource
    public List<ResourceLog> getLogsByResource(int resourceId)
            throws SQLException {

        List<ResourceLog> logs = new ArrayList<>();

        String sql = "SELECT LOG_ID, RESOURCE_ID, ACTION, ACTION_TIME " +
                     "FROM RESOURCE_LOG " +
                     "WHERE RESOURCE_ID = ? " +
                     "ORDER BY ACTION_TIME DESC";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, resourceId);

            try (ResultSet resultSet = statement.executeQuery()) {

                while (resultSet.next()) {
                    logs.add(mapLog(resultSet));
                }
            }
        }

        return logs;
    }

    // READ - Get all logs
    public List<ResourceLog> getAll() throws SQLException {

        List<ResourceLog> logs = new ArrayList<>();

        String sql = "SELECT LOG_ID, RESOURCE_ID, ACTION, ACTION_TIME " +
                     "FROM RESOURCE_LOG " +
                     "ORDER BY ACTION_TIME DESC";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet resultSet = statement.executeQuery()) {

            while (resultSet.next()) {
                logs.add(mapLog(resultSet));
            }
        }

        return logs;
    }

    // Convert database row into ResourceLog object
    private ResourceLog mapLog(ResultSet resultSet)
            throws SQLException {

        ResourceLog log = new ResourceLog();

        log.setLogId(resultSet.getInt("LOG_ID"));

        int resourceId = resultSet.getInt("RESOURCE_ID");

        if (resultSet.wasNull()) {
            log.setResourceId(0);
        } else {
            log.setResourceId(resourceId);
        }

        log.setAction(resultSet.getString("ACTION"));

        log.setTimestamp(
            resultSet.getTimestamp("ACTION_TIME")
        );

        return log;
    }
}