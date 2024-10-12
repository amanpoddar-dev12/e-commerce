import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
// import { fetchproductData } from "../Features/productSlice";
import { fetchProductData } from "../Features/productSlice"; // Use the correct capitalization
import ProductLoader from "../components/ProductLoader";

function Home() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProductData());
    console.log(products);
  }, [dispatch]);
  if (loading) {
    return (
      <div className="flex flex-wrap dark:bg-slate-900 bg-white md:gap-3 gap-3 ml-[21px] md:ml-[140px]">
        <ProductLoader />
        <ProductLoader />
        <ProductLoader />
        <ProductLoader />
        <ProductLoader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="min-h-screen dark:bg-slate-900 bg-white">
      <div className="flex flex-wrap dark:bg-slate-900 bg-white md:gap-3 gap-3 ml-[21px] md:ml-[140px]">
        {products?.map((product) => (
          <ProductItem
            key={product.id}
            uid={product.id}
            title={product.title}
            price={product.price}
            src={product.images[0]}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
