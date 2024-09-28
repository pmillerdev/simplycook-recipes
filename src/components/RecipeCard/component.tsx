import { useState } from "react";
import { RecipeCardProps } from "./types";

const RecipeCard = ({
  id,
  name,
  shortDescription,
  image,
  cookingTime,
  averageRating,
  topReview,
  chilli,
}: RecipeCardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  return (
    <article id={id} onClick={() => setIsFlipped(!isFlipped)}>
      {isFlipped ? (
        <>
          <p>Cooking Time: {cookingTime} mins</p>
          <p>Average Rating: {averageRating}</p>
          <p>Top Review: "{topReview}"</p>
          <p>Chilli Heat Level: {chilli}</p>
        </>
      ) : (
        <>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <p>{shortDescription}</p>
        </>
      )}
    </article>
  );
};

export default RecipeCard;
