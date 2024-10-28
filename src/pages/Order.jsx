import { useSelector } from "react-redux";
import OrderItem from "../components/OrderItem";
import { EmptyCart } from "../components/EmptyCart";

import OrderCompltedSummary from "../components/OrderCompltedSummary";

function Order() {
  const cartItems = useSelector((state) => state.product.orderItems);
  console.log(cartItems);
  if (cartItems.length === 0)
    return (
      <div className="mt-10">
        <EmptyCart status={"Order"} />
      </div>
    );
  return (
    <div className="flex flex-col gap-4  p-10 ">
      <div className="rounded-lg border   border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
        {cartItems?.map((item) => (
          <OrderItem
            key={item.uid}
            src={item.src}
            price={item.price}
            quantity={item.quantity}
            title={item.title}
          />
        ))}
      </div>
      <OrderCompltedSummary />
    </div>
  );
}

export default Order;
