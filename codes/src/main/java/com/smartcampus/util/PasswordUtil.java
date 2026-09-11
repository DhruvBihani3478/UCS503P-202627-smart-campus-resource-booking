package com.smartcampus.util;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.util.Base64;

public class PasswordUtil {

    private static final int SALT_LENGTH = 16;
    private static final int ITERATIONS = 65536;
    private static final int KEY_LENGTH = 256;

    private PasswordUtil() {
        // Utility class
    }

    // Generate a secure password hash
    public static String hashPassword(String password) {

        if (password == null || password.isEmpty()) {
            throw new IllegalArgumentException(
                    "Password cannot be null or empty."
            );
        }

        try {

            // Generate random salt
            byte[] salt = new byte[SALT_LENGTH];

            SecureRandom random = new SecureRandom();
            random.nextBytes(salt);

            // Create password specification
            PBEKeySpec spec = new PBEKeySpec(
                    password.toCharArray(),
                    salt,
                    ITERATIONS,
                    KEY_LENGTH
            );

            // Generate password hash
            SecretKeyFactory factory =
                    SecretKeyFactory.getInstance(
                            "PBKDF2WithHmacSHA256"
                    );

            byte[] hash =
                    factory.generateSecret(spec).getEncoded();

            spec.clearPassword();

            // Store iterations + salt + hash
            return ITERATIONS + ":"
                    + Base64.getEncoder().encodeToString(salt)
                    + ":"
                    + Base64.getEncoder().encodeToString(hash);

        } catch (NoSuchAlgorithmException |
                 InvalidKeySpecException e) {

            throw new RuntimeException(
                    "Password hashing failed.",
                    e
            );
        }
    }

    // Verify entered password against stored hash
    public static boolean verifyPassword(
            String password,
            String storedHash) {

        if (password == null || storedHash == null) {
            return false;
        }

        try {

            // Split stored value
            String[] parts = storedHash.split(":");

            if (parts.length != 3) {
                return false;
            }

            int iterations =
                    Integer.parseInt(parts[0]);

            byte[] salt =
                    Base64.getDecoder().decode(parts[1]);

            byte[] originalHash =
                    Base64.getDecoder().decode(parts[2]);

            // Recreate hash using same salt and iterations
            PBEKeySpec spec = new PBEKeySpec(
                    password.toCharArray(),
                    salt,
                    iterations,
                    originalHash.length * 8
            );

            SecretKeyFactory factory =
                    SecretKeyFactory.getInstance(
                            "PBKDF2WithHmacSHA256"
                    );

            byte[] newHash =
                    factory.generateSecret(spec).getEncoded();

            spec.clearPassword();

            // Compare hashes safely
            return MessageDigest.isEqual(
                    originalHash,
                    newHash
            );

        } catch (NoSuchAlgorithmException |
                 InvalidKeySpecException |
                 IllegalArgumentException e) {

            return false;
        }
    }
}