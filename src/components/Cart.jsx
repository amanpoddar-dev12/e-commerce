"use client";

import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function EmptyCart() {
  return (
    <div className="flex flex-col gap-4 dark:text-white text-black text-center items-center">
      <img
        className="w-96"
        src={
          "https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        }
      />
      <p className="text-2xl">Your cart is empty</p>
      <p>Add item to it now.</p>
      <Link to={"/"} className="bg-blue-500 h-7 w-20 rounded-md">
        Buy Now
      </Link>
    </div>
  );
}
export default function Cart() {
  // useEffect(())
  const { cartProducts } = useSelector((state) => state.product);
  console.log(cartProducts);
  //   const { src, price, title, uid, description } = cartProducts;
  console.log("inside cart ");
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
              key={item.uid}
            />
          ))
        ) : (
          <EmptyCart />
        )}
        {cartProducts.length !== 0 ? <OrderSummary /> : <p></p>}
      </div>
    </div>
  );
}
