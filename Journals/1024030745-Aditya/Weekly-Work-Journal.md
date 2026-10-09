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

- Set up the React frontend using Vite.
- Configured the frontend development environment.
- Configured Tailwind CSS for styling and responsive interface development.
- Installed React Router for navigation between different application pages.
- Installed Axios for future communication with backend APIs.
- Installed Lucide React for interface icons.
- Installed Recharts for future dashboard and reporting requirements.
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

The Dashboard was developed as the main landing page for students. It provides an overview of the resource booking system through summary cards and available resource information.

The dashboard includes:

- Total resources
- Available resources
- User bookings
- Pending bookings
- Available resource cards

I then developed the Resources page to allow users to browse and find campus resources.

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

I also developed the Resource Details page to provide detailed information about individual resources.

The page includes:

- Resource description
- Capacity
- Available equipment
- Location
- Facilities
- Availability information
- Booking option

The resource details interface was designed to provide users with sufficient information before proceeding with a booking.

## Outcome

The main resource discovery interface was successfully implemented.

Users can browse campus resources, search for specific resources, filter resources according to their requirements, view detailed information, and proceed towards the booking process.

---

# Week 3: Booking Workflow, My Bookings and Calendar

## Work Done

During the third week, I focused on developing the main student booking workflow.

A Book Resource page was developed to allow users to enter the information required for a resource booking request.

The booking form includes:

- Booking date
- Time-slot selection
- Number of participants
- Purpose of booking
- Booking summary
- Input validation

The booking summary displays the selected booking information before submission.

I then developed the My Bookings page to provide an interface for viewing and managing booking requests.

The page includes the following booking status categories:

- All
- Pending
- Approved
- Completed
- Cancelled

The interface also includes search and status-filtering functionality to help users locate particular bookings.

A booking cancellation option with a confirmation dialog was added to improve the user experience.

The Calendar page was developed to provide a calendar-based representation of bookings. It includes a monthly calendar layout, date selection, month navigation, a Today option, and an upcoming bookings section.

## Booking Workflow

The frontend booking workflow was organized as follows:

    Browse Resources
           |
           v
    View Resource Details
           |
           v
    Select Date and Time
           |
           v
    Enter Booking Information
           |
           v
    Validate Booking Details
           |
           v
    Display Booking Confirmation Preview
           |
           v
    View My Bookings
           |
           v
    View Calendar

## Outcome

The main booking interface and supporting booking-management pages were developed.

The frontend provides the structure for entering booking details, viewing booking statuses, and navigating through a calendar interface. Persistent booking storage and synchronization with the backend remain part of the integration work.

---

# Week 4: Frontend Refinement and Preparation for Backend Integration

## Work Done

During the fourth week, I focused on improving the existing frontend, refining navigation between pages, enhancing the booking interface, and preparing the application for future backend integration.

The work concentrated on making the user interface more interactive and ensuring that resource-related information could be displayed dynamically across different pages.

### 1. Dynamic Resource Navigation

I refined the navigation system using React Router to support dynamic resource-specific pages.

The following improvements were made:

- Configured dynamic routes for individual resource details.
- Configured resource-specific booking routes.
- Used resource IDs to identify the selected resource.
- Improved navigation between the Resources, Resource Details, and Book Resource pages.
- Added navigation options to return to the resource listing.

These changes allow the same page structure to display information for different campus resources.

### 2. Booking Form Enhancement

The Book Resource page was refined to display information about the selected resource.

The improvements included:

- Displaying the selected resource name, location, type, and capacity.
- Providing a date-selection field.
- Adding selectable time slots.
- Validating required booking information.
- Checking that the number of participants does not exceed the resource capacity.
- Displaying a booking summary before submission.
- Providing a confirmation preview after valid form submission.
- Handling resources that are marked as unavailable for booking.

These validations improve the usability of the booking form. Actual availability verification and booking confirmation will require backend integration.

### 3. My Bookings Interface Enhancement

I improved the layout of the My Bookings page to make booking information easier to understand and manage.

The interface includes:

- Summary cards for booking statistics.
- Booking status categories.
- Search functionality.
- Filtering by booking status.
- A structured layout for displaying booking information.
- An empty state when no bookings are available.
- A cancellation confirmation dialog.

The interface is structured to support booking information retrieved from the backend in the future.

### 4. Calendar Interface Enhancement

The Calendar page was refined to provide better navigation and date selection.

The following features were included:

- Dynamic monthly calendar layout.
- Previous-month and next-month navigation.
- A Today button to return to the current date.
- Date selection.
- A selected-date information section.
- An upcoming bookings section.
- Summary cards for calendar-related information.

The calendar provides a foundation for displaying resource bookings by date once booking data is connected to the backend.

### 5. Frontend Interface and Navigation Improvements

I continued refining the overall application interface to maintain consistency across the different pages.

The improvements focused on:

- Consistent styling and layout.
- Clear navigation between application modules.
- Improved spacing and organization of interface components.
- Clear presentation of resource and booking information.
- Appropriate empty states and confirmation messages.
- Reusable page structures for displaying different resources.

### 6. Preparation for Backend Integration

The frontend was developed separately from the backend so that both components could be integrated later.

The main operations requiring backend support were identified as:

- Retrieving campus resource information.
- Checking resource availability.
- Submitting booking requests.
- Retrieving the user's bookings.
- Updating or cancelling bookings.
- Synchronizing booking statuses.
- Displaying booking information on the calendar.

Axios was included in the frontend technology stack for API communication. The current interfaces use demonstration data in relevant sections, so connecting these operations to actual backend endpoints remains necessary.

## Outcome

During the fourth week, the frontend was further refined through dynamic resource navigation, improved booking-form validation, booking status filters, cancellation confirmation, and calendar navigation.

The application now has a more structured frontend for the Smart Campus Resource Booking System. The next stage is to integrate the frontend with the backend APIs so that resource availability, booking submissions, booking records, and status updates can use actual application data.

---

# Current Project Status

| Module | Current Status |
|---|---|
| Dashboard | Frontend interface developed |
| Resources | Resource cards, search, and filters implemented |
| Resource Details | Dynamic resource-specific display implemented |
| Book Resource | Booking form, validation, and confirmation preview implemented |
| My Bookings | Search, status filters, and cancellation interface implemented |
| Calendar | Monthly navigation and date selection implemented |
| Backend Integration | Pending |
| Persistent Booking Storage | Requires backend integration |
| Live Resource Availability | Requires backend integration |

**Note:** The status table describes the frontend implementation. Update any item if it does not accurately reflect the work completed in your code.