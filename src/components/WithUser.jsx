import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function WithUser(IncomingComponent) {
  const OutgoingComponent = (props) => {
    const { user, logout, loading, login } = useContext(UserContext);
    const navigate = useNavigate();
    return (
      <IncomingComponent
        {...props}
        user={user}
        logout={logout}
        loading={loading}
        login={login}
        navigate={navigate}
      />
    );
  };
  return OutgoingComponent;
}

export default WithUser;
