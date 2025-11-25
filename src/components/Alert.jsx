import { memo } from "react";
import {
  HiCheckCircle,
  HiXCircle,
  HiInformationCircle,
  HiExclamation,
} from "react-icons/hi";

const themeClasses = {
  success: "bg-green-500 text-white",
  error: "bg-primary-dark text-white",
  info: "bg-blue-500 text-white",
  warning: "bg-yellow-500 text-white",
};

const icons = {
  success: <HiCheckCircle className="w-5 h-5" />,
  error: <HiXCircle className="w-5 h-5" />,
  info: <HiInformationCircle className="w-5 h-5" />,
  warning: <HiExclamation className="w-5 h-5" />,
};

function Alert({ type = "info", message }) {
  if (!message) return null;

  const typeClass = themeClasses[type] || themeClasses.info;
  const icon = icons[type] || icons.info;

  return (
    <div
      className={`flex items-center gap-2 px-4 py-3 rounded shadow-md ${typeClass}`}
      role="alert"
    >
      <span className="opacity-90">{icon}</span>
      <span className="font-medium text-sm">{message}</span>
    </div>
  );
}

export default memo(Alert);
