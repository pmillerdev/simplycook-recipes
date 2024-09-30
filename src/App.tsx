import { useEffect, useState } from "react";
import "./styles.css";

import CardCarousel from "./components/CardCarousel";
import { RecipeCardProps } from "./components/RecipeCard/types";

import useRecipes from "./hooks/useRecipes/useRecipes";
import { RawRecipes, RecipeObject } from "./hooks/useRecipes/types";

const App = () => {
  const [recipeCards, setRecipeCards] = useState<RecipeCardProps[]>([]);
  const { recipes, isLoading, error } = useRecipes();

  useEffect(() => {
    if (!isLoading && !error && recipes && recipes?.length > 0) {
      const filteredRecipes = filterAndFormatRecipes(recipes);
      setRecipeCards(filteredRecipes);
    }
  }, [isLoading, error, recipes]);

  const filterAndFormatRecipes = (rawRecipes: RawRecipes) =>
    rawRecipes.reduce(
      (recipesWithAllergens: RecipeCardProps[], recipe: RecipeObject) => {
        if (
          // filter recipes based on allergen
          recipe.allergens?.includes("Crustaceans") ||
          recipe.allergens?.includes("Fish") ||
          recipe.allergens?.includes("Eggs")
        ) {
          // extract only the required properties from each recipe and push to array
          recipesWithAllergens.push({
            id: recipe.id,
            name: recipe.name,
            shortDescription: recipe.shortDescription,
            image: recipe.image,
            cookingTime: recipe.cookingTime,
            averageRating: recipe.averageRating,
            topReview: recipe.topReview,
            chilli: recipe.chilli,
          });
        }
        return recipesWithAllergens;
      },
      []
    );

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading recipes: {error.message}</p>}
      {!isLoading && !error && recipeCards?.length > 0 && (
        <CardCarousel cards={recipeCards} />
      )}
    </main>
  );
};

export default App;
