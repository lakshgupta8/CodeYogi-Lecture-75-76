import { useState, useCallback } from "react";
import { AlertContext } from "./AlertContext";
import Alert from "../components/Alert";

function AlertProvider({ children }) {
  const [alert, setAlert] = useState(undefined);

  const removeAlert = useCallback(() => {
    setAlert(undefined);
  }, []);

  const showAlert = useCallback((message, type = "info") => {
    setAlert({ message, type });
  }, []);

  return (
    <AlertContext.Provider value={{ alert, showAlert, removeAlert }}>
      {children}
      <Alert
        message={alert?.message}
        type={alert?.type}
        onDismiss={removeAlert}
      />
    </AlertContext.Provider>
  );
}

export default AlertProvider;
