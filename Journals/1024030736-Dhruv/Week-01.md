# Weekly Work Journal

## Weekly Work Journal

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
- Prepared the **ER Diagram**.
- Prepared the **Class Diagram**.
- Prepared the **Use Case Diagram**.
- Prepared the **Activity Diagram** for the booking process.
- Prepared the **Sequence Diagram** for the booking workflow.
- Planned the application structure using **Model, DAO, Service, Servlet, Filter, and Utility** layers.

### Outcome

- Completed the initial system design.
- Established the overall architecture and workflow of the application.
- Prepared the major UML diagrams required for implementation.

---

## Week 4: Java Setup, Database Connection and DAO Implementation

### Work Done

- Set up the Java web application using **Maven**.
- Configured the required **Servlet, JSP, JSTL, and Oracle JDBC** dependencies.
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
- Added the `PASSWORD_HASH` column to the `USERS` table to support secure password storage.

### Outcome

- Successfully established Java–Oracle database connectivity.
- Completed the initial **Model and DAO layers**.
- Successfully tested database retrieval using the live project database.
- Established the foundation for implementing the service and web layers.

---

## Week 5: Service Layer and Business Logic

### Work Done

- Implemented the main service-layer classes:
  - `AuthService`
  - `ResourceService`
  - `SlotService`
  - `BookingService`
  - `AdminService`
- Added input validation to the service layer.
- Implemented resource management operations.
- Implemented slot creation, retrieval, availability checking, updating, and deletion.
- Implemented booking creation and validation.
- Added booking status operations such as:
  - `PENDING`
  - `APPROVED`
  - `REJECTED`
  - `CANCELLED`
- Implemented user, resource, slot, booking, and resource-log operations required by the administrator.
- Connected the service layer with the existing DAO layer.

### Outcome

- Completed the main **Service Layer**.
- Added business validation between the web layer and database layer.
- Established the application flow:

```text
Servlet
   ↓
Service
   ↓
DAO
   ↓
Oracle Database
```

---

## Week 6: Authentication, JSP Pages and Web Layer Implementation

### Work Done

- Implemented the authentication functionality using `AuthService` and `AuthenticationServlet`.
- Added password hashing using `PBKDF2WithHmacSHA256` through the `PasswordUtil` utility class.
- Configured HTTP session management to maintain logged-in user information.
- Stored relevant session attributes, including user ID, username, and user role.
- Implemented the `AuthenticationFilter` to support authentication checks for protected resources.
- Developed JSP pages for the main application features:
  - `login.jsp`
  - `dashboard.jsp`
  - `resources.jsp`
  - `slots.jsp`
  - `bookings.jsp`
  - `admin.jsp`
  - `index.jsp`
- Configured the application using `web.xml` and Servlet 4.0-compatible settings.
- Deployed the application using Apache Tomcat 9 during development and tested the login functionality.
- Reviewed the integration between the web layer, service layer, and database layer.

### Outcome

- Implemented the initial authentication and session-management functionality.
- Established the JSP-based web interface for students, faculty, and administrators.
- Created the foundation for protecting application resources through authentication checks.
- Connected the web layer with the existing Java business logic.

---

## Week 7: REST API Development and Booking Functionality

### Work Done

- Started implementing API endpoints to allow the frontend to communicate with the Java backend.
- Implemented and tested the resource API through `ResourceServlet`.
- Successfully retrieved resource data from the Oracle database in JSON format.
- Reviewed the existing booking-related classes, including `Booking`, `BookingDAO`, `BookingService`, `SlotDAO`, and `SlotService`.
- Implemented the initial `BookingServlet` using the `/api/bookings` endpoint.
- Added support for GET requests to check the booking API and identify the logged-in user's session.
- Added initial POST request handling for booking creation.
- Implemented validation for slot IDs, booking dates, and session-based user authentication.
- Added logic to check slot availability before attempting to create a booking.
- Used the Oracle sequence `SEQ_BOOKING` to generate booking IDs.
- Added JSON responses and basic error handling for API requests.
- Configured cross-origin request handling for the React development server.
- Resolved a Java compilation error related to exception handling in the booking servlet.

### Outcome

- Successfully tested resource retrieval through the backend API.
- Implemented the initial structure for booking API integration.
- Added preliminary validation for booking requests and slot availability.
- Improved communication between the web layer and backend services.
- Prepared the backend for further integration with the React frontend.

---

## Week 8: Build Configuration, Compilation and Frontend Integration Preparation

### Work Done

- Reviewed the Maven project configuration and Java web application structure.
- Ran the Maven clean and package commands to rebuild the application.
- Resolved compilation issues encountered during the development of the booking servlet.
- Successfully completed the Maven build process and generated the web application archive (WAR).
- Reviewed the deployment procedure for Apache Tomcat 9.
- Prepared the application for redeployment and further API testing.
- Reviewed the existing React frontend and identified the need to connect its resource and booking pages to the Java backend.
- Identified areas where frontend mock data and browser `localStorage` need to be replaced or integrated with backend API calls.
- Planned the next integration steps for resource retrieval, slot availability, booking creation, and booking history.

### Outcome

- Successfully compiled and packaged the Java web application using Maven.
- Generated the WAR file required for deployment to Apache Tomcat.
- Prepared the backend for the next deployment and integration-testing stage.
- Identified the remaining work required to avoid duplicated frontend and backend data handling.

---

## Overall Progress

The project has progressed from requirement analysis and system design to the implementation of the Java backend, database access, business logic, authentication, JSP pages, and initial API endpoints.

The next phase will focus on deploying and testing the latest backend build, integrating the existing React frontend with the Java APIs, and validating the complete resource-booking workflow against the Oracle database.

