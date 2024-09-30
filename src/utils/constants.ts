import { RecipeCardProps } from "../components/RecipeCard/types";

const cardHeight = 282;
const cardWidth = 274;

const testImageSrc =
  "https://media.simplycook.com/uploads/media/390x262/414/414-vietnamese-claypot-cod.jpg";

const testRecipeCards: RecipeCardProps[] = [
  {
    id: "1",
    name: "Recipe 1",
    shortDescription: "Recipe description...",
    image: testImageSrc,
    cookingTime: "20",
    averageRating: "4.4",
    topReview: "It was amazing!",
    chilli: 0,
  },
  {
    id: "2",
    name: "Recipe 2",
    shortDescription: "Recipe description...",
    image: testImageSrc,
    cookingTime: "15",
    averageRating: "3.5",
    chilli: 1,
  },
  {
    id: "3",
    name: "Recipe 3",
    shortDescription: "Recipe description...",
    image: testImageSrc,
    cookingTime: "15",
    averageRating: "3.0",
    topReview: "Not bad",
    chilli: 2,
  },
  {
    id: "4",
    name: "Recipe 4",
    shortDescription: "Recipe description...",
    image: testImageSrc,
    cookingTime: "45",
    averageRating: "4.9",
    topReview: "The best dish",
    chilli: 1,
  },
];

const testRecipeCard: RecipeCardProps = testRecipeCards[0];

export { cardHeight, cardWidth, testRecipeCards, testRecipeCard };
