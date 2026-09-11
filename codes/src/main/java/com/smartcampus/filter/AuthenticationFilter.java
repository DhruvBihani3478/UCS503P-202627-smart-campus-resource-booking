package com.smartcampus.filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.io.IOException;

@WebFilter(urlPatterns = {
        "/pages/dashboard.jsp",
        "/pages/bookings.jsp",
        "/pages/resources.jsp",
        "/pages/slots.jsp",
        "/pages/admin.jsp"
})
public class AuthenticationFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig)
            throws ServletException {

        // Filter initialization
    }

    @Override
    public void doFilter(
            ServletRequest request,
            ServletResponse response,
            FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest httpRequest =
                (HttpServletRequest) request;

        HttpServletResponse httpResponse =
                (HttpServletResponse) response;

        HttpSession session =
                httpRequest.getSession(false);

        boolean loggedIn =
                session != null &&
                session.getAttribute("user") != null;

        if (loggedIn) {

            // User is authenticated
            chain.doFilter(request, response);

        } else {

            // User is not authenticated
            httpResponse.sendRedirect(
                    httpRequest.getContextPath() +
                    "/pages/login.jsp"
            );
        }
    }

    @Override
    public void destroy() {

        // Filter cleanup
    }
}