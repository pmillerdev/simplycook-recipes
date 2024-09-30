import useSWR from "swr";
import { apiPath, fetcher } from "../../api";
import { RawRecipes, UseRecipes } from "./types";

function useRecipes(): UseRecipes {
  const {
    data: recipes,
    error,
    isLoading,
  } = useSWR(`${apiPath}/recipes`, fetcher);

  return {
    recipes: recipes as RawRecipes,
    isLoading,
    error,
  };
}

export default useRecipes;
