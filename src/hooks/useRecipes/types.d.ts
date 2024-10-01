type RecipeObject = {
  // eslint-disable-next-line
  [key: string]: any; // usually wouldnt use any but have no knowledge of the recipe data structure
};

type RawRecipes = RecipeObject[];

type RecipesError = {
  error: Error;
  message: string;
  status: number;
};

type UseRecipes = {
  recipes: RawRecipes;
  isLoading: boolean;
  error?: RecipesError;
};

export { RecipeObject, RawRecipes, UseRecipes };
