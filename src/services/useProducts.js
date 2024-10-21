import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("https://dummyjson.com/products");
      console.log(data.products);
      return data.products;
    },
  });
}
