type ChilliHeatLevel = 0 | 1 | 2 | 3;

type RecipeCardProps = {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  cookingTime: string;
  averageRating: string;
  topReview: string;
  chilli: ChilliHeatLevel;
};

export { RecipeCardProps };
