import { FixedSizeList as VirtualizedList } from "react-window";
import RecipeCard from "../RecipeCard";
import useWindowSize from "../../hooks/useWindowSize";
import { CardCarouselProps, RenderCardProps } from "./types";
import { useMemo } from "react";
import { cardHeight, cardWidth } from "../../utils/constants";

const CardCarousel = ({ cards }: CardCarouselProps) => {
  const { width } = useWindowSize();

  // assume less than 480px width is a mobile
  const mobileView = useMemo(() => width < 480, [width]);

  const renderCard = ({ index, style }: RenderCardProps) => (
    <div style={style}>
      <RecipeCard {...cards[index]} />
    </div>
  );

  return (
    <VirtualizedList
      layout="horizontal"
      itemCount={cards.length}
      itemSize={cardHeight}
      height={cardHeight + 50} // need additional height to account for scrolling
      width={mobileView ? cardWidth + 30 : cardWidth * 3} // display one item on mobile otherwise display three items
      overscanCount={1} // render only the next card in the list before its visible
    >
      {renderCard}
    </VirtualizedList>
  );
};

export default CardCarousel;
