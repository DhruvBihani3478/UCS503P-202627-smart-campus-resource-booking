package com.smartcampus.util;

public class PasswordUtilTest {

    public static void main(String[] args) {

        try {

            String password = "TestPassword123";

            // Generate hash
            String hash = PasswordUtil.hashPassword(password);

            System.out.println("=================================");
            System.out.println("PASSWORD HASHING TEST");
            System.out.println("=================================");

            System.out.println("Original password: " + password);
            System.out.println("Generated hash: " + hash);

            // Test correct password
            boolean correctPassword =
                    PasswordUtil.verifyPassword(password, hash);

            // Test incorrect password
            boolean wrongPassword =
                    PasswordUtil.verifyPassword(
                            "WrongPassword",
                            hash
                    );

            System.out.println("---------------------------------");
            System.out.println(
                    "Correct password verification: "
                    + correctPassword
            );

            System.out.println(
                    "Wrong password verification: "
                    + wrongPassword
            );

            System.out.println("---------------------------------");

            if (correctPassword && !wrongPassword) {
                System.out.println("PASSWORD UTILITY TEST PASSED");
            } else {
                System.out.println("PASSWORD UTILITY TEST FAILED");
            }

            System.out.println("=================================");

        } catch (Exception e) {

            System.out.println("=================================");
            System.out.println("PASSWORD UTILITY TEST FAILED");
            System.out.println("=================================");

            e.printStackTrace();
        }
    }
}