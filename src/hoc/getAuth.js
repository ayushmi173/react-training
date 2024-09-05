import React from "react";
import { useNavigate } from "react-router-dom";

export const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const isAuthenticated = () => {
      return true;
    };

    // If user is not authenticated, redirect to login page
    if (!isAuthenticated()) {
      navigate("/login");
      return null; // or a loading spinner while redirecting
    }

    // Render the wrapped component if authenticated
    return <WrappedComponent {...props} />;
  };
};
