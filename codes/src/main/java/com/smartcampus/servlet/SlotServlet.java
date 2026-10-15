package com.smartcampus.servlet;

import com.smartcampus.model.Slot;
import com.smartcampus.service.SlotService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@WebServlet("/api/slots")
public class SlotServlet extends HttpServlet {

    private SlotService slotService;

    @Override
    public void init() {
        slotService = new SlotService();
    }

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        try {
            String resourceIdParam =
                    request.getParameter("resourceId");
            String availableParam =
                    request.getParameter("available");
            String slotIdParam =
                    request.getParameter("id");

            if (slotIdParam != null && !slotIdParam.isBlank()) {
                int slotId = Integer.parseInt(slotIdParam);
                Slot slot = slotService.getSlot(slotId);

                if (slot == null) {
                    response.setStatus(
                            HttpServletResponse.SC_NOT_FOUND);
                    response.getWriter().write(
                            "{\"error\":\"Slot not found\"}");
                    return;
                }

                response.getWriter().write(toJson(slot));
                return;
            }

            List<Slot> slots;

            if (resourceIdParam != null &&
                    !resourceIdParam.isBlank()) {

                int resourceId =
                        Integer.parseInt(resourceIdParam);

                if ("true".equalsIgnoreCase(availableParam)) {
                    slots = slotService.getAvailableSlots(resourceId);
                } else {
                    slots = slotService.getSlotsByResource(resourceId);
                }

            } else {
                slots = slotService.getAllSlots();
            }

            StringBuilder json =
                    new StringBuilder("{\"slots\":[");

            for (int i = 0; i < slots.size(); i++) {
                if (i > 0) {
                    json.append(",");
                }

                json.append(toJson(slots.get(i)));
            }

            json.append("]}");
            response.getWriter().write(json.toString());

        } catch (IllegalArgumentException e) {

            response.setStatus(
                    HttpServletResponse.SC_BAD_REQUEST);
            response.getWriter().write(
                    "{\"error\":\"Invalid slot or resource ID\"}");

        } catch (SQLException e) {
            getServletContext().log(
                    "Unable to retrieve slots", e);

            response.setStatus(
                    HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write(
                    "{\"error\":\"Unable to retrieve slots\"}");
        }
    }

    private String toJson(Slot slot) {
        return "{"
                + "\"slotId\":" + slot.getSlotId() + ","
                + "\"resourceId\":" + slot.getResourceId() + ","
                + "\"date\":\"" + slot.getDate() + "\","
                + "\"startTime\":\"" + escape(slot.getStartTime()) + "\","
                + "\"endTime\":\"" + escape(slot.getEndTime()) + "\","
                + "\"availabilityStatus\":\""
                + escape(slot.getAvailabilityStatus()) + "\""
                + "}";
    }

    private String escape(String value) {
        if (value == null) {
            return "";
        }

        return value.replace("\\\\", "\\\\\\\\")
                .replace("\"", "\\\\\"")
                .replace("\\n", "\\\\n")
                .replace("\\r", "\\\\r");
    }
}