import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { totalCartPrice } from "../Features/productSlice";
import UseCurrency from "../hooks/UseCurrency";

function OrderSummary() {
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  // Get the total from Redux state

  const { total } = useSelector((state) => state.product);

  // Dispatch the action to calculate total price when component mounts
  useEffect(() => {
    dispatch(totalCartPrice());
    console.log("OrderSummary - totalCartPrice dispatched");
  }, [dispatch]);

  // Update total price whenever the total in Redux changes
  useEffect(() => {
    setTotalPrice(UseCurrency(total));
  }, [total]);

  console.log(totalPrice);

  // Calculations based on the total price
  const saving = (totalPrice * 30) / 100;
  const storePickup = (totalPrice * 10) / 100;
  const tax = (totalPrice * 18) / 100;
  const grandTotal = totalPrice + storePickup + tax;

  return (
    <div className="md:mx-auto max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
          Order summary
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Original price
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                {totalPrice}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Savings
              </dt>
              <dd className="text-base font-medium text-green-600">
                {`${saving}`}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Store Pickup
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                {`${storePickup}`}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Tax
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                {`${tax}`}
              </dd>
            </dl>
          </div>

          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
            <dt className="text-base font-bold text-gray-900 dark:text-white">
              Total
            </dt>
            <dd className="text-base font-bold text-gray-900 dark:text-white">
              {`₨.${Math.round(grandTotal)}`}
            </dd>
          </dl>
        </div>

        <Link
          href="#"
          className="flex w-full items-center bg-blue-500 justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Order
        </Link>

        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-normal text-gray-500  dark:text-gray-400">
            {" "}
            or{" "}
          </span>
          <Link
            to={"/"}
            title=""
            className="inline-flex items-center dark:text-white gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
          >
            Continue Shopping
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
