import React, { useEffect, useState } from "react";
import UseCurrency from "../hooks/UseCurrency";
import { useDispatch } from "react-redux";
import {
  removeCartProduct,
  UpdateWishListProduct,
} from "../Features/productSlice";
import { Link } from "react-router-dom";

function WishlistItem({ price, title, src, uid }) {
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {}, [quantity]);
  const dispatch = useDispatch();

  function handleDelteItem(e) {
    e.preventDefault();
    dispatch(removeCartProduct(uid));
  }

  function handleAddtoFav() {
    dispatch(UpdateWishListProduct({ price, title, src, uid }));
  }

  function handleAddQuntity() {
    if (quantity >= 0) setQuantity(quantity + 1);
  }

  function handleSubQuntity() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  return (
    <div className="rounded-lg border ml-7 mr-7  border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
      <div className="space-y-5  flex flex-col md:flex-row md:space-x-6 md:space-y-0 md:items-center">
        <div className="w-full md:w-1/5">
          <img
            className="h-20 w-20 mx-auto md:ml-0"
            src={
              src
              // "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/8/h/j/m-sum24-csmssrt6873-campus-sutra-original-imah225hbdczskdt.jpeg?q=70&crop=false"
            }
            alt="product image"
          />
        </div>

        <div className="text-center md:text-left md:w-2/5">
          <p className="text-xl font-medium text-gray-900 dark:text-white">
            {title}
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:w-2/5">
          <div className="text-center md:text-right md:w-32">
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {`Rs.${UseCurrency(price * quantity)}`}
            </p>
          </div>
          <div className="mt-2 md:mt-0 flex  justify-center md:justify-start">
            <Link
              to="#"
              className="bg-blue-500 px-3 md:p-1  rounded-md text-white md:px-4 hover:bg-blue-600"
            >
              Add to cart
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 md:w-1/5">
          <button
            type="button"
            onClick={handleSubQuntity}
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
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
            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 dark:text-white focus:outline-none"
            value={quantity}
            readOnly
          />
          <button
            type="button"
            onClick={handleAddQuntity}
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
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

        <div className="flex justify-center md:justify-end md:w-1/5">
          <button
            type="button"
            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
            onClick={handleDelteItem}
          >
            <svg
              className="mr-1.5 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default WishlistItem;
