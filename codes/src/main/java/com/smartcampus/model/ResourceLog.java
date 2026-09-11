package com.smartcampus.model;

import java.sql.Timestamp;

public class ResourceLog {

    private int logId;
    private int resourceId;
    private int userId;
    private String action;
    private Timestamp timestamp;

    public ResourceLog() {
    }

    public ResourceLog(int logId, int resourceId, int userId,
                       String action, Timestamp timestamp) {
        this.logId = logId;
        this.resourceId = resourceId;
        this.userId = userId;
        this.action = action;
        this.timestamp = timestamp;
    }

    public int getLogId() {
        return logId;
    }

    public void setLogId(int logId) {
        this.logId = logId;
    }

    public int getResourceId() {
        return resourceId;
    }

    public void setResourceId(int resourceId) {
        this.resourceId = resourceId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
}