type RecipeObject = {
  // eslint-disable-next-line
  [key: string]: any;
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
