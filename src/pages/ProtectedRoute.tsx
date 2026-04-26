// components/ProtectedRoute.js
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAdmin = localStorage.getItem("admin");

  return isAdmin ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;