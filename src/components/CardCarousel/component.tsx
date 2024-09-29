import { FixedSizeList } from "react-window";
import { CardCarouselProps } from "./types";
import RecipeCard from "../RecipeCard";

const CardCarousel = ({ cards }: CardCarouselProps) => {
  const renderCard = ({ index, style }) => (
    <div style={style}>
      <RecipeCard {...cards[index]} />
    </div>
  );

  return (
    <FixedSizeList
      layout="horizontal"
      itemCount={cards.length}
      itemSize={282}
      height={300}
      width={846}
    >
      {renderCard}
    </FixedSizeList>
  );
};

export default CardCarousel;
