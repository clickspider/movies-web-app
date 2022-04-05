import { Navigate, useLocation } from "react-router-dom";
export default function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = {
    user: {
      id: "1",
    },
  };
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
