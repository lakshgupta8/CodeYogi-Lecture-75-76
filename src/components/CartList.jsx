import { memo, useMemo } from "react";
import WithCart from "./WithCart";
import CartRow from "./CartRow";

function CartList(props) {
  const { cartItemsData } = props;

  const rows = useMemo(
    function () {
      return cartItemsData.map(function (item) {
        return <CartRow key={item.id} item={item} />;
      });
    },
    [cartItemsData]
  );

  return (
    <div className="bg-white overflow-hidden">
      <div className="divide-y divide-gray-300">{rows}</div>
    </div>
  );
}

const CartListWithCart = WithCart(memo(CartList));
export default CartListWithCart;
