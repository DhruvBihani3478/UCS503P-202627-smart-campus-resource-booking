package com.smartcampus.dao;

import com.smartcampus.model.Resource;
import com.smartcampus.util.DBconnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ResourceDAO {

    // CREATE
    public void create(Resource resource) throws SQLException {

        String sql = "INSERT INTO RESOURCES " +
                     "(RESOURCE_ID, RESOURCE_NAME, RESOURCE_TYPE, DEPT_ID) " +
                     "VALUES (?, ?, ?, ?)";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, resource.getResourceId());
            statement.setString(2, resource.getResourceName());
            statement.setString(3, resource.getResourceType());

            if (resource.getDepartmentId() > 0) {
                statement.setInt(4, resource.getDepartmentId());
            } else {
                statement.setNull(4, java.sql.Types.NUMERIC);
            }

            statement.executeUpdate();
        }
    }

    // READ - Get resource by ID
    public Resource getById(int resourceId) throws SQLException {

        String sql = "SELECT RESOURCE_ID, RESOURCE_NAME, " +
                     "RESOURCE_TYPE, DEPT_ID " +
                     "FROM RESOURCES " +
                     "WHERE RESOURCE_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, resourceId);

            try (ResultSet resultSet = statement.executeQuery()) {

                if (resultSet.next()) {
                    return mapResource(resultSet);
                }
            }
        }

        return null;
    }

    // READ - Get all resources
    public List<Resource> getAll() throws SQLException {

        List<Resource> resources = new ArrayList<>();

        String sql = "SELECT RESOURCE_ID, RESOURCE_NAME, " +
                     "RESOURCE_TYPE, DEPT_ID " +
                     "FROM RESOURCES " +
                     "ORDER BY RESOURCE_ID";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet resultSet = statement.executeQuery()) {

            while (resultSet.next()) {
                resources.add(mapResource(resultSet));
            }
        }

        return resources;
    }

    // READ - Get resources by department
    public List<Resource> getByDepartment(int departmentId)
            throws SQLException {

        List<Resource> resources = new ArrayList<>();

        String sql = "SELECT RESOURCE_ID, RESOURCE_NAME, " +
                     "RESOURCE_TYPE, DEPT_ID " +
                     "FROM RESOURCES " +
                     "WHERE DEPT_ID = ? " +
                     "ORDER BY RESOURCE_ID";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, departmentId);

            try (ResultSet resultSet = statement.executeQuery()) {

                while (resultSet.next()) {
                    resources.add(mapResource(resultSet));
                }
            }
        }

        return resources;
    }

    // UPDATE
    public void update(Resource resource) throws SQLException {

        String sql = "UPDATE RESOURCES " +
                     "SET RESOURCE_NAME = ?, " +
                     "RESOURCE_TYPE = ?, " +
                     "DEPT_ID = ? " +
                     "WHERE RESOURCE_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setString(1, resource.getResourceName());
            statement.setString(2, resource.getResourceType());

            if (resource.getDepartmentId() > 0) {
                statement.setInt(3, resource.getDepartmentId());
            } else {
                statement.setNull(3, java.sql.Types.NUMERIC);
            }

            statement.setInt(4, resource.getResourceId());

            statement.executeUpdate();
        }
    }

    // DELETE
    public void delete(int resourceId) throws SQLException {

        String sql = "DELETE FROM RESOURCES WHERE RESOURCE_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, resourceId);

            statement.executeUpdate();
        }
    }

    // Convert database row into Resource object
    private Resource mapResource(ResultSet resultSet)
            throws SQLException {

        Resource resource = new Resource();

        resource.setResourceId(
                resultSet.getInt("RESOURCE_ID")
        );

        resource.setResourceName(
                resultSet.getString("RESOURCE_NAME")
        );

        resource.setResourceType(
                resultSet.getString("RESOURCE_TYPE")
        );

        int departmentId = resultSet.getInt("DEPT_ID");

        if (resultSet.wasNull()) {
            resource.setDepartmentId(0);
        } else {
            resource.setDepartmentId(departmentId);
        }

        return resource;
    }
}