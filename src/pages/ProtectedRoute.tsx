import { Navigate } from "react-router-dom";
import type { ReactNode } from "react"; // Add this import
 // Add this import

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAdmin = localStorage.getItem("admin");

  return isAdmin ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;