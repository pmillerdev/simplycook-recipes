import { FixedSizeList as VirtualizedList } from "react-window";
import RecipeCard from "../RecipeCard";
import useWindowSize from "../../hooks/useWindowSize";
import { CardCarouselProps, RenderCardProps } from "./types";
import { useMemo } from "react";
import { cardHeight, cardWidth } from "../../constants";

const CardCarousel = ({ cards }: CardCarouselProps) => {
  const { width, height } = useWindowSize();

  // assumed any device less than 480px in width is a mobile
  const mobileView = useMemo(() => width < 480, [width]);

  const renderCard = ({ index, style }: RenderCardProps) => (
    <div style={style}>
      <RecipeCard {...cards[index]} />
    </div>
  );

  return (
    <VirtualizedList
      layout={mobileView ? "vertical" : "horizontal"}
      itemCount={cards.length}
      itemSize={cardHeight}
      height={mobileView ? height : cardHeight + 20} // need additional height to account for scrollbar
      width={mobileView ? "100%" : cardWidth * 3} // horizontally show one item on mobile otherwise show three items
    >
      {renderCard}
    </VirtualizedList>
  );
};

export default CardCarousel;
