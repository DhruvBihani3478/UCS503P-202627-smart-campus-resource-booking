package com.smartcampus.dao;

import com.smartcampus.model.Slot;

import java.util.List;

public class SlotDAOTest {

    public static void main(String[] args) {

        try {

            SlotDAO slotDAO = new SlotDAO();

            List<Slot> slots = slotDAO.getAll();

            System.out.println("=================================");
            System.out.println("SLOTS FROM FREE SQL ORACLE");
            System.out.println("=================================");

            for (Slot slot : slots) {

                System.out.println(
                    "ID: " + slot.getSlotId() +
                    " | Resource ID: " + slot.getResourceId() +
                    " | Date: " + slot.getDate() +
                    " | Start: " + slot.getStartTime() +
                    " | End: " + slot.getEndTime() +
                    " | Status: " + slot.getAvailabilityStatus()
                );
            }

            System.out.println("=================================");
            System.out.println("Total slots: " + slots.size());
            System.out.println("=================================");

        } catch (Exception e) {

            System.out.println("=================================");
            System.out.println("FAILED TO FETCH SLOTS");
            System.out.println("=================================");

            e.printStackTrace();
        }
    }
}