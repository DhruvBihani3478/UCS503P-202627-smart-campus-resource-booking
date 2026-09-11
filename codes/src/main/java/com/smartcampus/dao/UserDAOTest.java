package com.smartcampus.dao;

import com.smartcampus.model.User;

import java.util.List;

public class UserDAOTest {

    public static void main(String[] args) {

        try {

            UserDAO userDAO = new UserDAO();

            // Fetch all users from the database
            List<User> users = userDAO.getAll();

            System.out.println("=================================");
            System.out.println("USERS FROM FREE SQL ORACLE");
            System.out.println("=================================");

            for (User user : users) {

                System.out.println(
                    "ID: " + user.getUserId() +
                    " | Name: " + user.getName() +
                    " | Email: " + user.getEmail() +
                    " | Role: " + user.getRole() +
                    " | Department ID: " + user.getDepartmentId()
                );
            }

            System.out.println("=================================");
            System.out.println("Total users: " + users.size());
            System.out.println("=================================");

        } catch (Exception e) {

            System.out.println("=================================");
            System.out.println("FAILED TO FETCH USERS");
            System.out.println("=================================");

            e.printStackTrace();
        }
    }
}