<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Login - Smart Campus Resource Booking</title>

    <link rel="stylesheet"
          href="${pageContext.request.contextPath}/css/style.css">

</head>

<body>

    <div class="login-container">

        <div class="login-card">

            <h1>Smart Campus</h1>

            <h2>Resource Booking System</h2>

            <p class="login-subtitle">
                Login to continue
            </p>

            <%-- Display login error --%>
            <% 
                String error = (String) request.getAttribute("error");

                if (error != null) {
            %>

                <div class="error-message">
                    <%= error %>
                </div>

            <% 
                }
            %>

            <form action="${pageContext.request.contextPath}/auth"
                  method="post">

                <div class="form-group">

                    <label for="email">
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    >

                </div>

                <div class="form-group">

                    <label for="password">
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                    >

                </div>

                <button type="submit"
                        class="login-button">

                    Login

                </button>

            </form>

        </div>

    </div>

</body>

</html>