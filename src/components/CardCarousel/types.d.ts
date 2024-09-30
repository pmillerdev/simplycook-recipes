import { CSSProperties } from "react";
import { RecipeCardProps } from "../RecipeCard/types";

type RenderCardProps = {
  index: number;
  style: CSSProperties;
};

type CardCarouselProps = {
  cards: RecipeCardProps[];
};

export { RenderCardProps, CardCarouselProps };
