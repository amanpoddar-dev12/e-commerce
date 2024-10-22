import React, { useEffect, useState } from "react";
import UseCurrency from "../hooks/UseCurrency";
import { useDispatch } from "react-redux";
import {
  addCartQuantity,
  removeCartProduct,
  updateTotal,
  UpdateWishListProduct,
} from "../Features/productSlice";
import WishlistHeart from "./WishlistHeart";

function CartItem({ price, title, src, uid, defaultQuantity }) {
  console.log(defaultQuantity);
  const [quantity, setQuantity] = useState(() =>
    defaultQuantity ? defaultQuantity : 1
  );
  const [isWishlist, setIsWishlist] = useState(false);
  console.log("inside cartItem");
  console.log(uid, src, price);
  useEffect(() => {}, [quantity]);
  const dispatch = useDispatch();
  function handleDelteItem(e) {
    e.preventDefault();
    dispatch(removeCartProduct(uid));
  }
  function handleAddToWishList() {
    setIsWishlist(!isWishlist);
    dispatch(UpdateWishListProduct({ price, title, src, uid }));
  }
  // useEffect(() => {
  //   useDispatch(addCartQuantity({ uid, quantity }));
  // }, [quantity, uid]);

  function handleAddQuntity() {
    if (quantity >= 0) setQuantity(quantity + 1);
  }
  function handleSubQuntity() {
    if (quantity > 1) setQuantity(quantity - 1);
  }
  return (
    <div className="rounded-lg border  border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6  md:space-y-0">
        <a href="#" className="w-20 shrink-0 md:order-1">
          <img className="block h-20 w-20 " src={src} alt="imac image" />
        </a>

        <label htmlFor="counter-input" className="sr-only">
          Choose quantity:
        </label>
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <button
              type="button"
              id="decrement-button-5"
              onClick={handleSubQuntity}
              data-input-counter-decrement="counter-input-5"
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="counter-input-5"
              data-input-counter
              className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
              placeholder=""
              value={quantity}
              required
            />
            <button
              type="button"
              id="increment-button-5"
              onClick={handleAddQuntity}
              data-input-counter-increment="counter-input-5"
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="h-2.5 w-2.5 text-gray-900 dark:text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900 dark:text-white">
              {`Rs.${UseCurrency(price * quantity)}`}
            </p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:underline dark:text-white"
          >
            {title}
          </a>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center text-sm font-medium text-gray-500  hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
              onClick={handleAddToWishList}
            >
              <WishlistHeart
                isWishlist={isWishlist}
                width={8}
                height={7}
                color={"white"}
              />
              Add to Favorites
            </button>

            <button
              type="button"
              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
              onClick={handleDelteItem}
            >
              <svg
                className="me-1.5 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
