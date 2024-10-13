import React, { useContext, useEffect, useState } from "react";
// import ProductItem from "./ProductItem";
import { useParams } from "react-router-dom";
import ProductLoader from "./ProductLoader";
import ProductDetails from "./ProductDetails";
import { FireBaseContext } from "../context/UserContext";

function ViewProduct() {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const { cleanURL } = useContext(FireBaseContext);
  useEffect(() => {
    const GetData = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      console.log("id from params", id);
      const data = await response.json();
      setItem(data);
    };
    GetData();
  }, [id]);
  useEffect(() => {
    console.log(item);
  });
  return item ? (
    <div className=" flex flex-row min-h-screen justify-center items-center ">
      <ProductDetails
        key={item.id}
        uid={item.id}
        title={item.title}
        price={item.price}
        src={cleanURL(item.images[0])}
        description={item.description}
      />
    </div>
  ) : (
    <div className=" flex flex-row min-h-screen justify-center items-center w-10 ">
      <ProductLoader />
    </div>
  );
}

export default ViewProduct;
