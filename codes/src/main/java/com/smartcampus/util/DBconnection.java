package com.smartcampus.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBconnection {

    private static final String URL =
            "jdbc:oracle:thin:@(description=" +
            "(address=(protocol=tcps)(port=2484)(host=db.freesql.com))" +
            "(connect_data=(service_name=23ai_34ui2)))";

    private static final String USERNAME =
            "DBIHANI_BE24_SCHEMA_SNJZX";

    private static final String PASSWORD =
            System.getenv("SMART_CAMPUS_DB_PASSWORD");

    public static Connection getConnection() throws SQLException {

        if (PASSWORD == null || PASSWORD.isEmpty()) {
            throw new SQLException(
                "Database password not found. " +
                "Set SMART_CAMPUS_DB_PASSWORD first."
            );
        }

        try {
            Class.forName("oracle.jdbc.OracleDriver");
        } catch (ClassNotFoundException e) {
            throw new SQLException(
                "Oracle JDBC driver not found.",
                e
            );
        }

        return DriverManager.getConnection(
                URL,
                USERNAME,
                PASSWORD
        );
    }
}