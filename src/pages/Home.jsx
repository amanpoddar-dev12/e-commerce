import { useContext, useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../Features/productSlice";
import ProductLoader from "../components/ProductLoader";
import { FireBaseContext } from "../context/UserContext";
function Home() {
  const dispatch = useDispatch();
  const { products, loading, error, filteredProducts } = useSelector(
    (state) => state.product
  );
  const { cleanURL } = useContext(FireBaseContext);
  useEffect(() => {
    dispatch(fetchProductData());
    console.log(products);
  }, [dispatch]);
  // useEffect(() => {
  //   const filterClothes = products?.filter(
  //     (product) => product.category.name === "Clothes"
  //   );
  //   console.log(filterClothes);
  // });
  useEffect(() => {
    console.log(filteredProducts);
  }, [filteredProducts]);
  if (loading) {
    return (
      <div className="flex flex-wrap dark:bg-slate-900 bg-white md:gap-3 gap-3 ml-[21px] md:ml-[140px]">
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
    return <div>Error: {error}</div>;
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
          : products?.map((product) => (
              <ProductItem
                key={product.id}
                uid={product.id}
                title={product.title}
                price={product.price}
                src={cleanURL(product.images[0])}
              />
            ))}
      </div>
    </div>
  );
}

export default Home;
