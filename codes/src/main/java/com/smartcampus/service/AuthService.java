package com.smartcampus.service;

import com.smartcampus.dao.UserDAO;
import com.smartcampus.model.User;
import com.smartcampus.util.PasswordUtil;

import java.sql.SQLException;

public class AuthService {

    private final UserDAO userDAO;

    public AuthService() {
        this.userDAO = new UserDAO();
    }

    // Login user
    public User login(String email, String password) throws SQLException {

        // Validate email
        if (email == null || email.trim().isEmpty()) {
            throw new IllegalArgumentException(
                    "Email is required."
            );
        }

        // Validate password
        if (password == null || password.isEmpty()) {
            throw new IllegalArgumentException(
                    "Password is required."
            );
        }

        // Find user by email
        User user = userDAO.getByEmail(email.trim());

        // User does not exist
        if (user == null) {
            return null;
        }

        // Get stored password hash
        String storedHash = user.getPassword();

        // Password has not been initialized
        if (storedHash == null || storedHash.isEmpty()) {
            return null;
        }

        // Verify password
        boolean validPassword =
                PasswordUtil.verifyPassword(
                        password,
                        storedHash
                );

        if (!validPassword) {
            return null;
        }

        // Login successful
        return user;
    }

    // Register a new user
    public void registerUser(User user) throws SQLException {

        if (user == null) {
            throw new IllegalArgumentException(
                    "User cannot be null."
            );
        }

        if (user.getUserId() <= 0) {
            throw new IllegalArgumentException(
                    "User ID must be greater than 0."
            );
        }

        if (user.getName() == null ||
            user.getName().trim().isEmpty()) {

            throw new IllegalArgumentException(
                    "Name is required."
            );
        }

        if (user.getEmail() == null ||
            user.getEmail().trim().isEmpty()) {

            throw new IllegalArgumentException(
                    "Email is required."
            );
        }

        if (user.getPassword() == null ||
            user.getPassword().isEmpty()) {

            throw new IllegalArgumentException(
                    "Password is required."
            );
        }

        if (user.getRole() == null ||
            user.getRole().trim().isEmpty()) {

            throw new IllegalArgumentException(
                    "Role is required."
            );
        }

        // Check whether email already exists
        User existingUser =
                userDAO.getByEmail(user.getEmail().trim());

        if (existingUser != null) {
            throw new IllegalArgumentException(
                    "Email is already registered."
            );
        }

        // Hash password before storing it
        String passwordHash =
                PasswordUtil.hashPassword(
                        user.getPassword()
                );

        user.setPassword(passwordHash);

        // Store user
        userDAO.create(user);
    }

    // Validate whether a user exists
    public boolean validateUser(
            String email,
            String password) throws SQLException {

        return login(email, password) != null;
    }

    // Logout
    public void logout() {
        // Session invalidation will be handled
        // by AuthenticationServlet.
    }
}