import { Link } from "react-router-dom";
import WishlistHeart from "./WishlistHeart";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import { BiSolidCartAdd } from "react-icons/bi";
import {
  addCart,
  updateProductsWishlist,
  UpdateWishListProduct,
} from "../Features/productSlice";
import UseCurrency from "../hooks/UseCurrency";

function ProductItem({ src, price, title, uid, defaultWishlist }) {
  const [onCart, setOnCart] = useState(false);
  const dispatch = useDispatch();
  const [isWishlist, setIsWishlist] = useState(() =>
    defaultWishlist ? defaultWishlist : false
  );
  function handleWishList() {
    dispatch(UpdateWishListProduct({ price, title, src, uid }));

    console.log(uid);
    setIsWishlist(!isWishlist);
  }
  useEffect(() => {
    dispatch(updateProductsWishlist({ uid, wishlist: isWishlist }));
  }, [uid, dispatch, isWishlist]);
  function handleAddToCart() {
    dispatch(
      addCart({ src, price, title, uid, quantity: 1, wishlist: isWishlist })
    );
    // setTimeout(() => {
    setOnCart(true);
    console.log("hii inside settimeout");
    // }, 500);
    // setOnCart(false);
    setTimeout(() => {
      setOnCart(false);
    }, 300);
  }

  return (
    <div className="md:w-[300px] w-[160px] mt-7  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <button onClick={handleWishList} className="mt-3 md:ml-64 ml-24">
        <WishlistHeart
          height={7}
          width={7}
          isWishlist={isWishlist}
          color={"white"}
        />
      </button>
      <a href="#">
        <img
          className="p-5 md:p-8 rounded-t-lg "
          src={src}
          alt="product image"
        />
      </a>

      <div className="md:px-5 px-2 pb-5">
        <a href="#">
          <h5 className="text-start font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>

        <div className="flex items-center mt-2.5 md:mb-5 mb-2">
          <div className="flex items-center space-x-1 w-20 md:w-40 rtl:space-x-reverse">
            {/* Star rating */}
            {/* You can leave your star SVGs here */}
            {/* <div className="flex items-center space-x-1 rtl:space-x-reverse"> */}
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            {/* </div> */}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            5.0
          </span>
        </div>

        {/* Adjust this part for responsive layout */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <span className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white">
            {`Rs.${UseCurrency(price)}`}
            <button
              className="md:ml-10 ml-5 md:text-2xl mt-1"
              onClick={handleAddToCart}
            >
              {onCart ? <BiSolidCartAdd /> : <MdAddShoppingCart />}
            </button>
          </span>

          <Link
            to={`/products/${uid}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 md:mt-0 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
