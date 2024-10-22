import { useContext, useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData, useGetProductsQuery } from "../Features/productSlice";
import ProductLoader from "../components/ProductLoader";
import { FireBaseContext } from "../context/authentication/UserContext";

function Home() {
  const { data, isLoading, error } = useGetProductsQuery();

  const products = data?.products;
  const dispatch = useDispatch();

  useEffect(() => {
    if (products) {
      dispatch(getProductsData(products));
    }
  }, [dispatch, products]);
  const productsSlices = useSelector((state) => state.product.products);

  console.log(productsSlices);
  const { filteredProducts } = useSelector((state) => state.product);
  const { cleanURL } = useContext(FireBaseContext);
  if (isLoading) {
    return (
      <div className="flex flex-wrap mt-10  dark:bg-slate-900 bg-white md:gap-3 gap-3 ml-[21px] md:ml-[140px]">
        <ProductLoader />
        <ProductLoader />
        <ProductLoader />
        <ProductLoader />
        <ProductLoader />
        <ProductLoader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="min-h-screen dark:bg-slate-900 bg-white">
      <div className="flex flex-wrap dark:bg-slate-900 bg-white md:gap-3 gap-3 ml-[21px] md:ml-[140px]">
        {filteredProducts?.length > 0
          ? filteredProducts.map((product) => (
              <ProductItem
                key={product.id}
                uid={product.id}
                title={product.title}
                price={product.price}
                src={cleanURL(product.images[0])}
              />
            ))
          : productsSlices?.map((product) => (
              <ProductItem
                key={product.id}
                uid={product.id}
                title={product.title}
                price={product.price}
                src={cleanURL(product.images[0])}
                rating={products.rating}
                wishlist={product.wishlist}
              />
            ))}
      </div>
    </div>
  );
}

export default Home;
