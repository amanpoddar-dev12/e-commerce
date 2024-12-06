"use client";

import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import { useState } from "react";
import { EmptyCart } from "../components/EmptyCart";
import Address from "../components/Address";

export default function Cart() {
  const [isAddressEnable, setIsAddressEnable] = useState(false);
  // useEffect(())
  const { cartProducts } = useSelector((state) => state.product);
  // console.log(cartProducts);
  //   const { src, price, title, uid, description } = cartProducts;
  // console.log("inside cart ");
  //   console.log(src, price, title, uid, description);

  return (
    <div className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 gap-3 flex flex-col ">
        {cartProducts.length !== 0 ? (
          cartProducts?.map((item) => (
            <CartItem
              price={item.price}
              title={item.title}
              src={item.src}
              item={item.uid}
              uid={item.uid}
              key={item.uid}
              defaultQuantity={item.quantity}
              wishlist={item.wishlist}
            />
          ))
        ) : (
          <EmptyCart status={"cart"} />
        )}
        {/* <Address /> */}
        {isAddressEnable ? (
          <button
            className="w-20 ml-2 rounded-sm text-white p-1  bg-red-400 "
            onClick={() => setIsAddressEnable(false)}
          >
            Close
          </button>
        ) : (
          <button
            className="text-start ml-1 rounded-sm  underline text-white p-1 "
            onClick={() => setIsAddressEnable(true)}
          >
            {"Add address ->"}
          </button>
        )}
        {isAddressEnable ? <Address /> : ""}
        {cartProducts.length !== 0 ? <OrderSummary /> : ""}
      </div>
    </div>
  );
}
