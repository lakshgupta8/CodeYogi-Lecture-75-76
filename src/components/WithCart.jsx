import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function WithCart(IncomingComponent) {
  const OutgoingComponent = (props) => {
    const context = useContext(CartContext);
    if (context === undefined) {
      throw new Error("WithCart must be used within a CartProvider");
    }
    return <IncomingComponent {...props} {...context} />;
  };
  return OutgoingComponent;
}

export default WithCart;
