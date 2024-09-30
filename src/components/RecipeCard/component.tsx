import { useState } from "react";
import { RecipeCardProps } from "./types";
import styles from "./styles.module.css";
import { useSpring, animated } from "@react-spring/web";
import { cardHeight, cardWidth } from "../../constants";

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

  const handleCardClick = () => setIsFlipped(!isFlipped);

  const cardStyles = useSpring({
    cursor: "pointer",
    width: `${cardWidth}px`,
    height: `${cardHeight}px`,
    borderRadius: "5px",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  });

  return (
    <animated.article id={id} style={cardStyles} onClick={handleCardClick}>
      {isFlipped ? (
        <div className={styles.backOfCard}>
          <p>Cooking time: {cookingTime} mins</p>
          {averageRating && <p>Average rating: {averageRating}</p>}
          {topReview && <p>"{topReview}"</p>}
          <p>Chilli heat level: {chilli}</p>
        </div>
      ) : (
        <>
          <picture>
            <source srcSet={image} type="image/jpeg" />
            <img
              className={styles.cardImage}
              src={image}
              alt={name}
              loading="lazy"
            />
          </picture>
          <h2>{name}</h2>
          <p>{shortDescription}</p>
        </>
      )}
    </animated.article>
  );
};

export default RecipeCard;
