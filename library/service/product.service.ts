import { useGetCartByUserQuery } from "../query/cart.query";
import {
  useGetAllCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetSingleProductQuery,
} from "../query/product.query";
import { useGetSingleUserQuery } from "../query/user.query";

export const useGetSingleProductService = (productId: number) => {
  const query = useGetSingleProductQuery({ productId });

  return {
    query,
    data: query.data,
    isLoading: query.isLoading,
  };
};

export const useGetAllCategoriesService = () => {
  const query = useGetAllCategoriesQuery();

  return {
    query,
    data: query.data,
    isLoading: query.isLoading,
  };
};

export const useGetProductsByCategoryService = (category: string) => {
  const query = useGetProductsByCategoryQuery(category);

  return {
    query,
    data: query.data,
    isLoading: query.isLoading,
  };
};