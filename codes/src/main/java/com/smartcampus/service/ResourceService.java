package com.smartcampus.service;

import com.smartcampus.dao.ResourceDAO;
import com.smartcampus.model.Resource;

import java.sql.SQLException;
import java.util.List;

public class ResourceService {

    private final ResourceDAO resourceDAO;

    public ResourceService() {
        this.resourceDAO = new ResourceDAO();
    }

    public void addResource(Resource resource) throws SQLException {
        if (resource == null) {
            throw new IllegalArgumentException("Resource cannot be null.");
        }

        if (resource.getResourceId() <= 0) {
            throw new IllegalArgumentException("Resource ID must be greater than 0.");
        }

        if (resource.getResourceName() == null ||
            resource.getResourceName().trim().isEmpty()) {
            throw new IllegalArgumentException("Resource name is required.");
        }

        if (resource.getResourceType() == null ||
            resource.getResourceType().trim().isEmpty()) {
            throw new IllegalArgumentException("Resource type is required.");
        }

        resourceDAO.create(resource);
    }

    public Resource getResource(int resourceId) throws SQLException {
        if (resourceId <= 0) {
            throw new IllegalArgumentException("Resource ID must be greater than 0.");
        }

        return resourceDAO.getById(resourceId);
    }

    public List<Resource> getAllResources() throws SQLException {
        return resourceDAO.getAll();
    }

    public List<Resource> getResourcesByDepartment(int departmentId)
            throws SQLException {

        if (departmentId <= 0) {
            throw new IllegalArgumentException(
                "Department ID must be greater than 0."
            );
        }

        return resourceDAO.getByDepartment(departmentId);
    }

    public void updateResource(Resource resource) throws SQLException {
        if (resource == null) {
            throw new IllegalArgumentException("Resource cannot be null.");
        }

        if (resource.getResourceId() <= 0) {
            throw new IllegalArgumentException("Resource ID must be greater than 0.");
        }

        resourceDAO.update(resource);
    }

    public void deleteResource(int resourceId) throws SQLException {
        if (resourceId <= 0) {
            throw new IllegalArgumentException("Resource ID must be greater than 0.");
        }

        resourceDAO.delete(resourceId);
    }
}