import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProductById = (id) => {
  return useQuery({
    queryKey: ["productsById", id],
    queryFn: async () => {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      return data;
    },
  });
};

export default useProductById;
