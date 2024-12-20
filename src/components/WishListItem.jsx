import { useEffect, useState } from "react";
import UseCurrency from "../hooks/UseCurrency";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  addCart,
  RemoveWishListProducts,
  UpdateWishListProductQuantity,
} from "../Features/productSlice";
import { Link } from "react-router-dom";

function WishlistItem({ price, title, src, uid, wishlistItemQuantity }) {
  const [quantity, setQuantity] = useState(() =>
    wishlistItemQuantity ? wishlistItemQuantity : 1
  );
  const [isEnableCart, setIsEnableCart] = useState(false);
  useEffect(() => {
    setIsEnableCart(false);
  }, [quantity]);
  const dispatch = useDispatch();

  function handleDelteItem(e) {
    e.preventDefault();
    dispatch(RemoveWishListProducts(uid));
    toast.success("Item deleted successfully");
  }

  function handleAddQuntity() {
    if (quantity >= 0) setQuantity(quantity + 1);
  }

  function handleSubQuntity() {
    if (quantity > 1) setQuantity(quantity - 1);
  }
  function handleAddCart() {
    dispatch(addCart({ price, title, src, uid, quantity, wishlist: true }));
    dispatch(UpdateWishListProductQuantity({ uid, quantity }));
    setIsEnableCart(true);
    toast.success("Added to cart");
  }
  function CartPath() {
    return (
      <Link
        type="button"
        className="inline-flex items-center text-sm font-medium  dark:text-black   hover:underline bg-slate-100 dark:bg-white  px-5 py-1 rounded-md"
        to={"/cart"}
      >
        {`Go to Cart`}
      </Link>
    );
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
            {!isEnableCart ? (
              <button
                type="button"
                className="inline-flex items-center text-sm font-medium dark:text-white text-black hover:underline bg-blue-400 px-5 py-1 rounded-md"
                onClick={handleAddCart}
              >
                {`Add to Cart`}
              </button>
            ) : (
              <CartPath />
            )}
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

export default WishlistItem;
