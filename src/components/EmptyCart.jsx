import { Link } from "react-router-dom";

export function EmptyCart({ status }) {
  return (
    <div className="flex flex-col gap-4 dark:text-white text-black text-center items-center">
      <img
        className="w-96"
        src={
          "https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        }
      />
      <p className="text-2xl">Your {status} is empty</p>
      <p>Add item to it now.</p>
      <Link to={"/"} className="bg-blue-500 h-7 w-20 rounded-md">
        Buy Now
      </Link>
    </div>
  );
}
