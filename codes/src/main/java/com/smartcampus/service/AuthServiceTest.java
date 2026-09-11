package com.smartcampus.service;

import com.smartcampus.model.User;

public class AuthServiceTest {

    public static void main(String[] args) {

        try {

            AuthService authService = new AuthService();

            // Create a test user
            User user = new User();

            user.setUserId(999);
            user.setDepartmentId(1);
            user.setName("Auth Test User");
            user.setEmail("authtest@smartcampus.com");
            user.setPassword("TestPassword123");
            user.setRole("student");

            System.out.println("=================================");
            System.out.println("AUTHENTICATION TEST");
            System.out.println("=================================");

            // Register user
            authService.registerUser(user);

            System.out.println("User registration: SUCCESS");

            // Test correct password
            User loggedInUser =
                    authService.login(
                            "authtest@smartcampus.com",
                            "TestPassword123"
                    );

            if (loggedInUser != null) {
                System.out.println(
                        "Correct password login: SUCCESS"
                );
            } else {
                System.out.println(
                        "Correct password login: FAILED"
                );
            }

            // Test incorrect password
            User failedLogin =
                    authService.login(
                            "authtest@smartcampus.com",
                            "WrongPassword"
                    );

            if (failedLogin == null) {
                System.out.println(
                        "Wrong password rejection: SUCCESS"
                );
            } else {
                System.out.println(
                        "Wrong password rejection: FAILED"
                );
            }

            System.out.println("---------------------------------");

            if (loggedInUser != null && failedLogin == null) {
                System.out.println(
                        "AUTHENTICATION TEST PASSED"
                );
            } else {
                System.out.println(
                        "AUTHENTICATION TEST FAILED"
                );
            }

            System.out.println("=================================");

        } catch (Exception e) {

            System.out.println("=================================");
            System.out.println("AUTHENTICATION TEST FAILED");
            System.out.println("=================================");

            e.printStackTrace();
        }
    }
}