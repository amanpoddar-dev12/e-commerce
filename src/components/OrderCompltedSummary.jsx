import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { totalOrderPrice } from "../Features/productSlice";
import UseCurrency from "../hooks/UseCurrency";

export default function OrderCompltedSummary() {
  const dispatch = useDispatch();

  // const [orderTotal, setorderTotal] = useState(0);

  // Get the total from Redux state
  const item = useSelector((state) => state.product);
  const orderTotal = UseCurrency(item.orderTotal);
  // Dispatch the action to calculate total price when component mounts
  useEffect(() => {
    dispatch(totalOrderPrice());
    console.log("OrderSummary - totalCartPrice dispatched");
  }, [dispatch]);

  const saving = (orderTotal * 30) / 100;
  const storePickup = (orderTotal * 10) / 100;
  const tax = (orderTotal * 18) / 100;
  const grandTotal = orderTotal + storePickup + tax;

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
                {orderTotal}
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
      </div>
    </div>
  );
}
