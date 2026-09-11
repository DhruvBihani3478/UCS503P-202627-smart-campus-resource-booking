# Weekly Work Journal

**Name:** Aditya Kumar Srivastava  
**Roll Number:** 1024030745  
**Course:** UCS503 – Software Engineering  
**Project:** Smart Campus Resource Booking System  

---

# Week 1: Frontend Project Setup and Initial Architecture

## Work Done

During the first week, I started the frontend development of the Smart Campus Resource Booking System. The objective was to establish the frontend development environment and create a suitable application structure that could later be integrated with the backend developed by the team.

I decided to use **React with Vite** for developing the web interface. The frontend was structured as a separate application so that frontend and backend development could be carried out independently.

The following work was completed:

- Set up the React frontend using **Vite**.
- Configured the frontend development environment.
- Configured **Tailwind CSS** for styling and responsive interface development.
- Installed **React Router** for navigation between different application pages.
- Installed **Axios** for future communication with the backend APIs.
- Installed **Lucide React** for interface icons.
- Installed **Recharts** for future dashboard and reporting requirements.
- Created the main application layout.
- Created a sidebar navigation system.
- Created the top navigation bar.
- Planned the major student-side modules of the application.
- Created the initial page structure for the system.

## Initial Frontend Structure

The initial frontend modules included:

- Dashboard
- Resources
- My Bookings
- Calendar
- Notifications
- Settings
- Profile
- Resource Details
- Book Resource

## Outcome

The React development environment was successfully established.

The basic application structure and navigation were implemented, providing a foundation for developing the individual modules of the Smart Campus Resource Booking System.

---

# Week 2: Dashboard, Resource Management and Resource Details

## Work Done

During the second week, I focused on developing the main interface for viewing and exploring campus resources.

The **Dashboard** was developed as the main landing page for students. It provides an overview of the resource booking system through summary cards and available resource information.

The dashboard includes:

- Total resources
- Available resources
- User bookings
- Pending bookings
- Available resource cards

I then developed the **Resources** page to allow users to browse and find campus resources.

The Resources page includes:

- Resource cards
- Resource names
- Resource types
- Locations
- Capacity information
- Equipment information
- Availability status
- Search functionality
- Resource type filtering
- Availability filtering
- View Details option
- Book Now option

I also developed the **Resource Details** page to provide detailed information about individual resources.

The page includes:

- Resource description
- Capacity
- Available equipment
- Location
- Facilities
- Availability time slots
- Booking option

The resource details interface was designed to provide users with sufficient information before proceeding with a booking.

## Outcome

The main resource discovery interface was successfully implemented.

Users can now browse available campus resources, search for specific resources, filter resources according to their requirements, view detailed information, and proceed towards the booking process.

---

# Week 3: Booking Workflow, My Bookings and Calendar

## Work Done

During the third week, I focused on implementing the main student booking workflow.

A **Book Resource** page was developed to allow users to submit a resource booking request.

The booking form includes:

- Booking date
- Time-slot selection
- Number of participants
- Purpose of booking
- Booking summary
- Input validation

The booking summary dynamically displays the selected booking information before submission.

After submitting the booking request, the user is redirected to the **My Bookings** section.

I then developed the **My Bookings** page for managing and viewing booking requests.

The page provides separate booking status categories:

- All
- Pending
- Approved
- Completed
- Cancelled

Each booking displays relevant information such as:

- Resource name
- Date
- Time
- Number of participants
- Purpose
- Booking status

A booking cancellation option was also implemented.

The **Calendar** page was developed to provide a calendar-based representation of bookings.

The calendar includes:

- Monthly calendar layout
- Booking dates
- User booking indicators
- Existing booked-resource indicators
- Upcoming bookings
- Booking status visualization

This provides an alternative way for users to understand their scheduled bookings.

## Booking Workflow

The frontend booking workflow was organized as:

```text
Browse Resources
       ↓
View Resource Details
       ↓
Select Date and Time
       ↓
Enter Booking Information
       ↓
Submit Booking Request
       ↓
View Booking in My Bookings
       ↓
View Booking on Calendar