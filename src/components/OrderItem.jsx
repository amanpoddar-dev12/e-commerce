import UseCurrency from "../hooks/UseCurrency";

function OrderItem({ src, quantity, title, price }) {
  return (
    <div className="space-y-4 md:flex md:items-center  md:justify-between md:gap-6  md:space-y-0">
      <div className="">
        <a href="#" className="w-20 shrink-0 md:order-1">
          <img
            className="block h-20 w-20 "
            src={
              src
              // "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/z/k/y/-original-imahyxu9gnkxgvzh.jpeg?q=70&crop=false"
            }
            alt="imac image"
          />
        </a>
      </div>

      <div className="w-full min-w-0 flex-1 space-y-4  md:max-w-md">
        <a
          href="#"
          className="text-base font-medium text-gray-900 hover:underline dark:text-white"
        >
          {title}
        </a>
      </div>
      <div className="text-white font-medium">
        <p>Quantity: {quantity}</p>
      </div>
      <div className="text-white font-medium">
        <p>Price: {UseCurrency(price)}</p>
      </div>

      <div className="text-end md:w-32">
        <p className="text-base font-bold text-gray-900 dark:text-white">
          Total: {UseCurrency(quantity * price)}
        </p>
      </div>
      {/* <OrderSummary /> */}
    </div>
  );
}
export default OrderItem;
