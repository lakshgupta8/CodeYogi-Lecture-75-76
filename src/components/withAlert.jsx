import { useContext } from "react";
import { AlertContext } from "../context/AlertContext";

const withAlert = (IncomingComponent) => {
  const OutgoingComponent = (props) => {
    const { showAlert, alert } = useContext(AlertContext);
    return <IncomingComponent {...props} showAlert={showAlert} alert={alert} />;
  };

  return OutgoingComponent;
};

export default withAlert;
