import React from "react";

function WishlistHeart({ isWishlist, height, width, color }) {
  return (
    <div>
      <svg
        className={`me-1.5 h-${height} w-${width} dark:text-${color} text-black`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill={`${isWishlist ? "red" : "none"}`}
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={`${isWishlist ? "0" : "1"}`}
          d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
        />
      </svg>
    </div>
  );
}

export default WishlistHeart;