import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  if (
    localStorage.getItem("AuthToken") === null &&
    localStorage.getItem("role") === null
  ) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
