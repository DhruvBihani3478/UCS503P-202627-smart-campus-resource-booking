package com.smartcampus.dao;

import com.smartcampus.model.User;
import com.smartcampus.util.DBconnection;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserDAO {

    // CREATE USER
    public void create(User user) throws SQLException {

        String sql = "INSERT INTO USERS " +
                     "(USER_ID, U_NAME, EMAIL, PASSWORD_HASH, U_ROLE, DEPT_ID) " +
                     "VALUES (?, ?, ?, ?, ?, ?)";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, user.getUserId());
            statement.setString(2, user.getName());
            statement.setString(3, user.getEmail());
            statement.setString(4, user.getPassword());
            statement.setString(5, user.getRole());

            if (user.getDepartmentId() > 0) {
                statement.setInt(6, user.getDepartmentId());
            } else {
                statement.setNull(6, Types.NUMERIC);
            }

            statement.executeUpdate();
        }
    }

    // GET USER BY ID
    public User getById(int userId) throws SQLException {

        String sql = "SELECT USER_ID, U_NAME, EMAIL, PASSWORD_HASH, " +
                     "U_ROLE, DEPT_ID FROM USERS WHERE USER_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, userId);

            try (ResultSet resultSet = statement.executeQuery()) {

                if (resultSet.next()) {
                    return mapUser(resultSet);
                }
            }
        }

        return null;
    }

    // GET USER BY EMAIL
    public User getByEmail(String email) throws SQLException {

        String sql = "SELECT USER_ID, U_NAME, EMAIL, PASSWORD_HASH, " +
                     "U_ROLE, DEPT_ID FROM USERS WHERE EMAIL = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setString(1, email);

            try (ResultSet resultSet = statement.executeQuery()) {

                if (resultSet.next()) {
                    return mapUser(resultSet);
                }
            }
        }

        return null;
    }

    // GET ALL USERS
    public List<User> getAll() throws SQLException {

        List<User> users = new ArrayList<>();

        String sql = "SELECT USER_ID, U_NAME, EMAIL, PASSWORD_HASH, " +
                     "U_ROLE, DEPT_ID FROM USERS ORDER BY USER_ID";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet resultSet = statement.executeQuery()) {

            while (resultSet.next()) {
                users.add(mapUser(resultSet));
            }
        }

        return users;
    }

    // UPDATE USER
    public void update(User user) throws SQLException {

        String sql = "UPDATE USERS SET U_NAME = ?, EMAIL = ?, " +
                     "PASSWORD_HASH = ?, U_ROLE = ?, DEPT_ID = ? " +
                     "WHERE USER_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setString(1, user.getName());
            statement.setString(2, user.getEmail());
            statement.setString(3, user.getPassword());
            statement.setString(4, user.getRole());

            if (user.getDepartmentId() > 0) {
                statement.setInt(5, user.getDepartmentId());
            } else {
                statement.setNull(5, Types.NUMERIC);
            }

            statement.setInt(6, user.getUserId());

            statement.executeUpdate();
        }
    }

    // DELETE USER
    public void delete(int userId) throws SQLException {

        String sql = "DELETE FROM USERS WHERE USER_ID = ?";

        try (Connection connection = DBconnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, userId);
            statement.executeUpdate();
        }
    }

    // MAP RESULTSET TO USER OBJECT
    private User mapUser(ResultSet resultSet) throws SQLException {

        User user = new User();

        user.setUserId(resultSet.getInt("USER_ID"));
        user.setName(resultSet.getString("U_NAME"));
        user.setEmail(resultSet.getString("EMAIL"));
        user.setPassword(resultSet.getString("PASSWORD_HASH"));
        user.setRole(resultSet.getString("U_ROLE"));

        int departmentId = resultSet.getInt("DEPT_ID");

        if (!resultSet.wasNull()) {
            user.setDepartmentId(departmentId);
        }

        return user;
    }
}