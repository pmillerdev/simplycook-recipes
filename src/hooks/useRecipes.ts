import useSWR from "swr";
import { apiPath, fetcher } from "./utils";

type UseRecipes = {
  recipes: any;
  isLoading: boolean;
  isError: boolean;
};

function useRecipes(): UseRecipes {
  const {
    data: recipes,
    error: isError,
    isLoading,
  } = useSWR(`${apiPath}/recipes`, fetcher);

  return {
    recipes,
    isLoading,
    isError,
  };
}

export default useRecipes;
