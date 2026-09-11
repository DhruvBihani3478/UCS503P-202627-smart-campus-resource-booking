package com.smartcampus.model;

public class Resource {

    private int resourceId;
    private int departmentId;
    private String resourceName;
    private String resourceType;
    private String availabilityStatus;

    public Resource() {
    }

    public Resource(int resourceId, int departmentId, String resourceName,
                    String resourceType, String availabilityStatus) {
        this.resourceId = resourceId;
        this.departmentId = departmentId;
        this.resourceName = resourceName;
        this.resourceType = resourceType;
        this.availabilityStatus = availabilityStatus;
    }

    public int getResourceId() {
        return resourceId;
    }

    public void setResourceId(int resourceId) {
        this.resourceId = resourceId;
    }

    public int getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(int departmentId) {
        this.departmentId = departmentId;
    }

    public String getResourceName() {
        return resourceName;
    }

    public void setResourceName(String resourceName) {
        this.resourceName = resourceName;
    }

    public String getResourceType() {
        return resourceType;
    }

    public void setResourceType(String resourceType) {
        this.resourceType = resourceType;
    }

    public String getAvailabilityStatus() {
        return availabilityStatus;
    }

    public void setAvailabilityStatus(String availabilityStatus) {
        this.availabilityStatus = availabilityStatus;
    }
}