import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  isRegistered: boolean;
  children: ReactNode;
};

const PublicRoute = ({ isRegistered, children }: Props) => {
  if (isRegistered) {
    return <Navigate to="/wallet-section" replace />;
  }

  return children;
};

export default PublicRoute;
