package com.smartcampus.dao;

import com.smartcampus.model.Department;
import com.smartcampus.util.DBconnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class DepartmentDAO {

    // CREATE
    public void create(Department department) throws SQLException {

        String sql = "INSERT INTO DEPARTMENT (DEPT_ID, DEPT_NAME) VALUES (?, ?)";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, department.getDepartmentId());
            statement.setString(2, department.getDepartmentName());

            statement.executeUpdate();
        }
    }

    // READ - Get department by ID
    public Department getById(int departmentId) throws SQLException {

        String sql = "SELECT DEPT_ID, DEPT_NAME " +
                     "FROM DEPARTMENT " +
                     "WHERE DEPT_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, departmentId);

            try (ResultSet resultSet = statement.executeQuery()) {

                if (resultSet.next()) {

                    Department department = new Department();

                    department.setDepartmentId(
                            resultSet.getInt("DEPT_ID")
                    );

                    department.setDepartmentName(
                            resultSet.getString("DEPT_NAME")
                    );

                    return department;
                }
            }
        }

        return null;
    }

    // READ - Get all departments
    public List<Department> getAll() throws SQLException {

        List<Department> departments = new ArrayList<>();

        String sql = "SELECT DEPT_ID, DEPT_NAME " +
                     "FROM DEPARTMENT " +
                     "ORDER BY DEPT_ID";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet resultSet = statement.executeQuery()) {

            while (resultSet.next()) {

                Department department = new Department();

                department.setDepartmentId(
                        resultSet.getInt("DEPT_ID")
                );

                department.setDepartmentName(
                        resultSet.getString("DEPT_NAME")
                );

                departments.add(department);
            }
        }

        return departments;
    }

    // UPDATE
    public void update(Department department) throws SQLException {

        String sql = "UPDATE DEPARTMENT " +
                     "SET DEPT_NAME = ? " +
                     "WHERE DEPT_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setString(1, department.getDepartmentName());
            statement.setInt(2, department.getDepartmentId());

            statement.executeUpdate();
        }
    }

    // DELETE
    public void delete(int departmentId) throws SQLException {

        String sql = "DELETE FROM DEPARTMENT WHERE DEPT_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, departmentId);

            statement.executeUpdate();
        }
    }
}