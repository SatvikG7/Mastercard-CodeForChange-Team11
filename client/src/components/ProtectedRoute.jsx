import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useAuthContext(); // Use the user directly from context
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading state, which could be useful if you have async auth verification
    if (user !== undefined) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
