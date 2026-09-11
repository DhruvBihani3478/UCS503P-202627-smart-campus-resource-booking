<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%
    String userName = (String) session.getAttribute("userName");
    String userRole = (String) session.getAttribute("userRole");
%>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Dashboard - Smart Campus</title>

    <link rel="stylesheet"
          href="${pageContext.request.contextPath}/css/style.css">

</head>

<body>

    <div class="dashboard-container">

        <header class="dashboard-header">

            <div>
                <h1>Smart Campus</h1>
                <p>Resource Booking System</p>
            </div>

            <div class="user-info">

                <span>
                    Welcome, <strong><%= userName %></strong>
                </span>

                <span class="role">
                    Role: <%= userRole %>
                </span>

                <a href="${pageContext.request.contextPath}/auth?action=logout">
                    Logout
                </a>

            </div>

        </header>


        <main class="dashboard-content">

            <h2>Dashboard</h2>

            <p>
                Manage campus resources and your bookings from here.
            </p>


            <div class="dashboard-cards">

                <div class="dashboard-card">

                    <h3>Resources</h3>

                    <p>
                        View available campus resources.
                    </p>

                    <a href="${pageContext.request.contextPath}/pages/resources.jsp">
                        View Resources
                    </a>

                </div>


                <div class="dashboard-card">

                    <h3>Slots</h3>

                    <p>
                        Check available resource slots.
                    </p>

                    <a href="${pageContext.request.contextPath}/pages/slots.jsp">
                        View Slots
                    </a>

                </div>


                <div class="dashboard-card">

                    <h3>My Bookings</h3>

                    <p>
                        View your booking history and status.
                    </p>

                    <a href="${pageContext.request.contextPath}/pages/bookings.jsp">
                        My Bookings
                    </a>

                </div>

            </div>

        </main>

    </div>

</body>

</html>