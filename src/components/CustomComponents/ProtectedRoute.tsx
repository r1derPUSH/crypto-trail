import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  isRegistered: boolean;
  children: ReactNode;
};

const ProtectedRoute = ({ isRegistered, children }: Props) => {
  if (!isRegistered) {
    return <Navigate to="/login-page-section" replace />;
  }

  return children;
};

export default ProtectedRoute;
