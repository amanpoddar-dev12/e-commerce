import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

function Home() {
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
      const data = await response.json();

      setProductData(data);
    };
    getProduct();
  }, []);
  useEffect(() => {
    console.log(productData);
  }, [productData]);
  return (
    <div className="min-h-screen dark:bg-slate-900 bg-white">
      <div className="flex flex-wrap dark:bg-slate-900 bg-white md:gap-3 gap-3 ml-[21px] md:ml-[140px]">
        {productData?.map((product) => (
          <ProductItem
            key={product.id}
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
