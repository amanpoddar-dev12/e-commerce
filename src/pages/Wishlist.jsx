import { useSelector } from "react-redux";
import WishlistItem from "../components/WishListItem";
import { EmptyCart } from "../components/EmptyCart";

function Wishlist() {
  const wishlistProducts = useSelector(
    (state) => state.product.wishlistProducts
  );

  console.log(wishlistProducts);
  return (
    <div className=" m-10 dark:m-10  flex flex-col gap-4   dark:bg-slate-900 bg-white">
      {wishlistProducts && wishlistProducts.length > 0 ? (
        wishlistProducts.map((product) => (
          <WishlistItem
            key={product.uid}
            src={product.src}
            title={product.title}
            uid={product.uid}
            price={product.price}
            wishlistItemQuantity={product.quantity}
          />
        ))
      ) : (
        <EmptyCart status={"wishlist"} />
      )}
    </div>
  );
}

export default Wishlist;
