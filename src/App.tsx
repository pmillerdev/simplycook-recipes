import { useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";
import useRecipes from "./hooks/useRecipes";
import { RecipeCardProps } from "./components/RecipeCard/types";
import "./styles.css";
import CardCarousel from "./components/CardCarousel";

const App = () => {
  const [recipesToDisplay, setRecipesToDisplay] = useState<RecipeCardProps[]>(
    []
  );
  const { recipes, isLoading, isError } = useRecipes();

  useEffect(() => {
    if (!isLoading && !isError && recipes && recipes?.length > 0) {
      const filteredRecipes = recipes.reduce(
        (recipesWithAllergens: RecipeCardProps[], recipe) => {
          // Check if recipe contains any of the allergens
          if (
            recipe.allergens?.includes("Crustaceans") ||
            recipe.allergens?.includes("Fish") ||
            recipe.allergens?.includes("Eggs")
          ) {
            // If allergen is present, create a new object with desired properties
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
      setRecipesToDisplay(filteredRecipes);
    }
  }, [recipes, isLoading, isError]);

  console.log(recipesToDisplay);

  return (
    <main>
      <h1>Recipes</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading Recipes.</p>}
      {!isLoading && !isError && recipesToDisplay?.length > 0 && (
        <CardCarousel cards={recipesToDisplay} />
      )}
    </main>
  );
};

export default App;
