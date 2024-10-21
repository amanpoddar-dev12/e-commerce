import { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductLoader from "../components/ProductLoader";
import ProductDetails from "./ProductDetails";
import { FireBaseContext } from "../context/authentication/UserContext";
// import useProductById from "../services/useProductById";
import { useGetProductsByIdQuery } from "../Features/productSlice";

function ViewProduct() {
  const { id } = useParams();
  const { cleanURL } = useContext(FireBaseContext);

  const { data: item, isLoading, error } = useGetProductsByIdQuery(id);
  console.log(item);
  if (isLoading)
    return (
      <div className="flex flex-row min-h-screen justify-center items-center">
        <ProductLoader />
      </div>
    );
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <ProductDetails
        key={item.id}
        uid={item.id}
        title={item.title}
        price={item.price}
        src={cleanURL(item.images[0])}
        description={item.description}
      />
    </div>
    // <h1>test</h1>
  );
}

export default ViewProduct;
