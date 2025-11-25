import { Navigate } from "react-router-dom";
import Loading from "./Loading";
import WithUser from "./WithUser";

const UserRoute = ({ children, user, loading }) => {
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

const UserRouteWithUser = WithUser(UserRoute);
export default UserRouteWithUser;
