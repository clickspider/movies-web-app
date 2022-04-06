import { useSelector } from "react-redux";
import { userSelector } from "../store/user/userSlice";
import { Navigate, useLocation } from "react-router-dom";
export default function RequireAuth({ children }: { children: JSX.Element }) {
  const { user, auth } = useSelector(userSelector);

  let location = useLocation();

  if (!user.profile) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
