import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShuttleVan } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import StarRating from "custom-star-rating/dist/CustomStarRating";
function ProductDetails({ src, price, title, uid, description }) {
  return (
    <div className="flex  flex-col items-center bg-white border  border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover max-w-xl w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={src}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <div className="flex flex-row gap-5 mb-7 mt-3 p-0 ml-1 dark:text-white text-black">
          <p className="bg-blue-500 rounded-md text-blue-300 font-bold p-1">
            Up to 35% off
          </p>
          <div className="flex flex-row md:gap-2 md:ml-20 gap-5 ml-28">
            <span>
              <button>
                <FaRegEye className="h-7 w-7 " />
              </button>
            </span>
            <span>
              <button>
                <CiHeart className="h-7 w-7  " />
              </button>
            </span>
          </div>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <StarRating
            maxRating={5}
            defaultRating={Math.round(Math.random(1, 6) * 5)}
            size={20}
            color="gold"
            onSetMovieRating={(rating) => console.log(`New rating: ${rating}`)}
          />
        </p>
        <div className="flex flex-row gap-5 mb-3 p-0  dark:text-white text-black">
          <div className="flex flex-row md:gap-2 md:ml-1 gap-5 ">
            <span className="flex flex-row  gap-2 ml-2 text-gray-400 md:ml-0">
              <FaShuttleVan className="h-5 w-5 " />
              <h2>Fast Delivery</h2>
            </span>
            <span className="flex flex-row  gap-2 ml-2 text-gray-400">
              <GiMoneyStack className="h-5 w-5 " />
              <h2>Best Price</h2>
            </span>
          </div>
        </div>
        <div>
          <p className="text-white">{description}</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mt-5">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {`Rs.${Math.round(price * 84)}`}
          </span>
          <Link
            to={`/products/${uid}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 md:mt-0 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
