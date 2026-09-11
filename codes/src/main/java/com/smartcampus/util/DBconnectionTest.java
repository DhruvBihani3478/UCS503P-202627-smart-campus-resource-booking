package com.smartcampus.util;

import java.sql.Connection;

public class DBconnectionTest {

    public static void main(String[] args) {

        try (Connection connection = DBconnection.getConnection()) {

            System.out.println("=================================");
            System.out.println("DATABASE CONNECTION SUCCESSFUL");
            System.out.println("=================================");
            System.out.println("Connected to FreeSQL Oracle Database.");

        } catch (Exception e) {

            System.out.println("=================================");
            System.out.println("DATABASE CONNECTION FAILED");
            System.out.println("=================================");

            e.printStackTrace();
        }
    }
}