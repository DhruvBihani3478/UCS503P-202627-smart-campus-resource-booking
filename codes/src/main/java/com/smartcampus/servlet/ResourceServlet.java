package com.smartcampus.servlet;

import com.smartcampus.model.Resource;
import com.smartcampus.service.ResourceService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@WebServlet("/api/resources")
public class ResourceServlet extends HttpServlet {

    private ResourceService resourceService;

    @Override
    public void init() {
        resourceService = new ResourceService();
    }

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        try {
            String id = request.getParameter("id");

            if (id != null && !id.isBlank()) {
                int resourceId = Integer.parseInt(id);
                Resource resource =
                        resourceService.getResource(resourceId);

                if (resource == null) {
                    response.setStatus(
                            HttpServletResponse.SC_NOT_FOUND);
                    response.getWriter().write(
                            "{\"error\":\"Resource not found\"}");
                    return;
                }

                response.getWriter().write(
                        "{\"resourceId\":" + resource.getResourceId()
                        + ",\"resourceName\":\""
                        + escape(resource.getResourceName())
                        + "\",\"resourceType\":\""
                        + escape(resource.getResourceType())
                        + "\",\"departmentId\":"
                        + resource.getDepartmentId() + "}");
                return;
            }

            List<Resource> resources =
                    resourceService.getAllResources();

            StringBuilder json =
                    new StringBuilder("{\"resources\":[");

            for (int i = 0; i < resources.size(); i++) {
                Resource r = resources.get(i);

                if (i > 0) {
                    json.append(",");
                }

                json.append("{")
                    .append("\"resourceId\":")
                    .append(r.getResourceId()).append(",")
                    .append("\"resourceName\":\"")
                    .append(escape(r.getResourceName()))
                    .append("\",")
                    .append("\"resourceType\":\"")
                    .append(escape(r.getResourceType()))
                    .append("\",")
                    .append("\"departmentId\":")
                    .append(r.getDepartmentId())
                    .append("}");
            }

            json.append("]}");
            response.getWriter().write(json.toString());

        } catch (NumberFormatException e) {
            response.setStatus(
                    HttpServletResponse.SC_BAD_REQUEST);
            response.getWriter().write(
                    "{\"error\":\"Invalid resource ID\"}");

        } catch (SQLException e) {
            getServletContext().log(
                    "Unable to retrieve resources", e);
            response.setStatus(
                    HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write(
                    "{\"error\":\"Unable to retrieve resources\"}");
        }
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