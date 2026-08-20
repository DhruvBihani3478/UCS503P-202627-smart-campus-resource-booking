# Week 01 – Project Selection and Initial Analysis

**Name:** Dhruv Bihani  
**Roll Number:** 1024030736  
**Course:** UCS503 – Software Engineering  
**Project:** Smart Campus Resource Booking System  

## Work Completed

During the first week, I finalized the project idea for the UCS503 Software Engineering semester project. The project, titled **Smart Campus Resource Booking System**, is an extension of a Resource Booking System that I had previously developed as part of a DBMS project using Oracle Database.

Instead of starting with a completely new project, I decided to build upon the existing database system and extend it into a complete web-based software application. The objective is to retain the useful database design and booking logic from the previous project while adding application-level features such as a web interface, user authentication, role-based access control, dashboards, and a complete booking workflow.

I began by reviewing the existing Oracle database implementation. The current database contains the main entities required for the system, including departments, users, resources, slots, bookings, and resource logs. I also reviewed the relationships between these entities and the existing database-level functionality.

The existing project already implements several important operations, including slot availability checking, booking creation, booking cancellation, booking status management, activity logging, and resource usage reporting. Procedures, functions, triggers, views, constraints, and relationships were used to implement these features.

Based on the initial analysis, I identified that the existing database provides a suitable foundation for the Software Engineering project. However, additional functionality will be required to transform the database project into a complete software system.

## Initial Project Direction

The proposed system will provide a centralized platform for managing campus resources such as classrooms, laboratories, seminar halls, and other shared facilities.

The main users of the system will include:

- Students
- Faculty members
- Administrators

Users will be able to view available resources and slots, submit booking requests, track booking status, and manage their bookings.

Administrators will be responsible for managing resources, managing available slots, reviewing booking requests, and approving or rejecting requests.

## Initial Observations

The analysis of the previous DBMS project highlighted the difference between the existing database system and the proposed Software Engineering project.

The existing project mainly focuses on:

- Database design
- SQL operations
- Tables and relationships
- Procedures and functions
- Triggers
- Views
- Database-level booking logic

The proposed project will extend this work by adding:

- A web-based user interface
- User authentication
- Secure password handling
- Role-based access control
- Application-level business logic
- User and administrator dashboards
- Complete booking workflow
- Validation and error handling
- System testing and documentation

## Scope Considerations

Since the project has to be completed within one semester, I decided to keep the initial scope focused on the core functionality of the system.

The first version of the application will focus on resource management, slot management, booking requests, booking validation, booking status management, and administrative approval or rejection.

The existing slot-based booking model will initially be retained because it can reuse the existing database structure and reduce unnecessary complexity during the first prototype.

Additional features such as QR-based verification, mobile application support, and AI-based resource utilization prediction will be considered as future enhancements rather than part of the initial implementation.

## Learning and Reflection

This week's work helped me understand the importance of analyzing an existing system before extending it. Rather than rewriting the entire database, the existing implementation can be reused as a foundation while the missing software layers are designed and developed separately.

I also understood the importance of maintaining a realistic project scope. A complete software system involves more than database design; it requires requirement analysis, system design, application development, testing, documentation, and iterative improvement.

The initial analysis will help in planning the project in a structured manner and will guide the development of the requirements and system design in the following weeks.

## Plan for Next Week

In the next week, I plan to complete the initial requirement analysis and project documentation.

The planned work includes:

- Documenting the existing database structure.
- Preparing a comparison between the existing DBMS project and the proposed software system.
- Finalizing the problem statement.
- Defining project objectives.
- Identifying system actors.
- Preparing functional requirements.
- Preparing non-functional requirements.
- Defining the initial use cases of the system.

These activities will provide the foundation for the elevator pitch and initial system design planned for the upcoming weeks.