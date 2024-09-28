import RecipeCard from "./components/RecipeCard";
import useRecipes from "./hooks/useRecipes";

const App = () => {
  const { recipes, isLoading, isError } = useRecipes();

  console.log(recipes);
  return (
    <>
      <h1>Recipes</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        recipes?.length > 0 &&
        recipes.map((recipe) => <RecipeCard key={recipe.id} {...recipe} />)
      )}
    </>
  );
};

export default App;
