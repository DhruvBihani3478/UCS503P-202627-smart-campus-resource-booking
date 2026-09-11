package com.smartcampus.servlet;

import com.smartcampus.model.User;
import com.smartcampus.service.AuthService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.io.IOException;
import java.sql.SQLException;

@WebServlet("/auth")
public class AuthenticationServlet extends HttpServlet {

    private AuthService authService;

    @Override
    public void init() throws ServletException {
        authService = new AuthService();
    }

    // Handles GET requests
    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        String action = request.getParameter("action");

        // Logout
        if ("logout".equalsIgnoreCase(action)) {

            HttpSession session = request.getSession(false);

            if (session != null) {
                session.invalidate();
            }

            response.sendRedirect(
                    request.getContextPath() + "/pages/login.jsp"
            );

            return;
        }

        // Default: open login page
        response.sendRedirect(
                request.getContextPath() + "/pages/login.jsp"
        );
    }

    // Handles POST requests
    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        String email = request.getParameter("email");
        String password = request.getParameter("password");

        try {

            User user = authService.login(email, password);

            // Login failed
            if (user == null) {

                request.setAttribute(
                        "error",
                        "Invalid email or password."
                );

                request.getRequestDispatcher(
                        "/pages/login.jsp"
                ).forward(request, response);

                return;
            }

            // Login successful
            HttpSession session = request.getSession(true);

            session.setAttribute("user", user);
            session.setAttribute("userId", user.getUserId());
            session.setAttribute("userName", user.getName());
            session.setAttribute("userRole", user.getRole());

            // Redirect based on role
            if ("admin".equalsIgnoreCase(user.getRole())) {

                response.sendRedirect(
                        request.getContextPath() +
                        "/pages/admin.jsp"
                );

            } else {

                response.sendRedirect(
                        request.getContextPath() +
                        "/pages/dashboard.jsp"
                );
            }

        } catch (IllegalArgumentException e) {

            request.setAttribute(
                    "error",
                    e.getMessage()
            );

            request.getRequestDispatcher(
                    "/pages/login.jsp"
            ).forward(request, response);

        } catch (SQLException e) {

            e.printStackTrace();

            request.setAttribute(
                    "error",
                    "Database error. Please try again later."
            );

            request.getRequestDispatcher(
                    "/pages/login.jsp"
            ).forward(request, response);
        }
    }
}