import { Navigate } from "react-router-dom";
import Loading from "./Loading";
import WithUser from "./WithUser";

const AuthRoute = ({ children, user, loading }) => {
  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

const AuthRouteWithUser = WithUser(AuthRoute);
export default AuthRouteWithUser;
