package com.smartcampus.dao;

import com.smartcampus.model.Resource;

import java.util.List;

public class ResourceDAOTest {

    public static void main(String[] args) {

        try {

            ResourceDAO resourceDAO = new ResourceDAO();

            List<Resource> resources = resourceDAO.getAll();

            System.out.println("=================================");
            System.out.println("RESOURCES FROM FREE SQL ORACLE");
            System.out.println("=================================");

            for (Resource resource : resources) {

                System.out.println(
                    "ID: " + resource.getResourceId() +
                    " | Name: " + resource.getResourceName() +
                    " | Type: " + resource.getResourceType() +
                    " | Department ID: " + resource.getDepartmentId()
                );
            }

            System.out.println("=================================");
            System.out.println("Total resources: " + resources.size());
            System.out.println("=================================");

        } catch (Exception e) {

            System.out.println("=================================");
            System.out.println("FAILED TO FETCH RESOURCES");
            System.out.println("=================================");

            e.printStackTrace();
        }
    }
}