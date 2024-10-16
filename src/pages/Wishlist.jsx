import { useSelector } from "react-redux";
import WishlistItem from "../components/WishListItem";

function Wishlist() {
  const wishlistProducts = useSelector((state) => state.wishlistProducts);
  // const { total } = useSelector((state) => state.product);
  console.log(wishlistProducts);
  return (
    <div className="h-96 dark:bg-slate-900 bg-white">
      <h1 className="dark:text-white">Wish list</h1>
      {/* <WishlistItem /> */}
    </div>
  );
}

export default Wishlist;
