# Weekly Work Journal

**Name:** Dhruv Bihani  
**Roll Number:** 1024030736  
**Course:** UCS503 – Software Engineering  
**Project:** Smart Campus Resource Booking System  

---

## Week 1: Project Selection and Initial Analysis

### Work Done

- Finalized the project idea **Smart Campus Resource Booking System**.
- Decided to extend the existing DBMS Resource Booking System developed previously.
- Reviewed the existing Oracle database and its main entities.
- Identified the major users: **Students, Faculty, and Administrators**.
- Defined the initial scope and major features of the proposed system.
- Planned to convert the existing database project into a complete web-based application.

### Outcome

- Finalized the project idea, scope, and initial system direction.
- Identified the existing database as the foundation for further development.

---

## Week 2: Requirement Analysis and Documentation

### Work Done

- Analyzed the requirements of the proposed resource booking system.
- Prepared the **problem statement and project objectives**.
- Defined functional and non-functional requirements.
- Identified the main actors and their responsibilities.
- Defined major use cases such as resource viewing, slot checking, booking, cancellation, and administrative approval.
- Documented the differences between the existing DBMS project and the proposed software system.
- Organized the initial project documentation in the GitHub repository.

### Outcome

- Completed the initial requirement analysis.
- Defined the major functionality and system requirements.
- Established the documentation structure for the project.

---

## Week 3: System Design and UML Diagrams

### Work Done

- Designed the initial system architecture.
- Analyzed the entities and relationships in the existing database.
- Prepared the **ER diagram**.
- Prepared the **Class Diagram**.
- Prepared the **Use Case Diagram**.
- Prepared the **Activity Diagram** for the booking process.
- Prepared the **Sequence Diagram** for the booking workflow.
- Planned the application structure using Model, DAO, Service, Servlet, Filter, and Utility layers.

### Outcome

- Completed the initial system design.
- Established the overall architecture and workflow of the application.
- Prepared the major UML diagrams required for implementation.

---

## Week 4: Java Setup, Database Connection and DAO Implementation

### Work Done

- Set up the Java web application using **Maven**.
- Configured the required Servlet, JSP, JSTL, and Oracle JDBC dependencies.
- Connected the Java application to the existing **Oracle FreeSQL database** using JDBC.
- Successfully tested the database connection.
- Verified the actual database tables and column names.
- Implemented the main model classes:
  - `User`
  - `Department`
  - `Resource`
  - `ResourceLog`
  - `Slot`
  - `Booking`
- Implemented the DAO classes for database operations.
- Tested the DAOs with the live Oracle database.
- Successfully retrieved users, resources, slots, and bookings from the database.

### Outcome

- Successfully established Java–Oracle database connectivity.
- Completed the initial **Model and DAO layers**.
- Successfully tested database retrieval using the live project database.
- Established the foundation for implementing the service and web layers.

---

## Overall Progress

During the first four weeks, the project progressed from **idea selection and requirement analysis to the initial technical implementation**.

The current development flow is:

```text
Requirements
     ↓
System Design
     ↓
Java/Maven Setup
     ↓
Oracle Database Connection
     ↓
Model Layer
     ↓
DAO Layer
