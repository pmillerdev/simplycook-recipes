import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import RecipeCard from "./component";
import { RecipeCardProps } from "./types";
import { testRecipeCard } from "../../utils/constants";

describe("RecipeCard", () => {
  it("renders correctly when the required properties are provided", () => {
    const { getByAltText, getByText, getByTestId } = render(
      <RecipeCard {...testRecipeCard} />
    );
    const cardElement = getByTestId(testRecipeCard.id);

    expect(cardElement).toBeInTheDocument();
    expect(getByAltText(testRecipeCard.name)).toBeVisible();
    expect(getByText(testRecipeCard.name)).toBeVisible();
    expect(getByText(testRecipeCard.shortDescription)).toBeVisible();
  });

  it("flips over and displays the back of the card when clicked once", () => {
    const { getByTestId, getByText } = render(
      <RecipeCard {...testRecipeCard} />
    );
    const cardElement = getByTestId(testRecipeCard.id);

    fireEvent.click(cardElement);

    expect(
      getByText(`Cooking time: ${testRecipeCard.cookingTime} mins`)
    ).toBeVisible();
    expect(
      getByText(`Chilli heat level: ${testRecipeCard.chilli}`)
    ).toBeVisible();
    // wait until the card is fully flipped before checking the transform
    setTimeout(() => {
      expect(cardElement).toHaveStyle({ transform: "rotateY(180deg)" });
    }, 500);
  });

  it("displays the average review rating and the top review text on the back of the card when provided", () => {
    const recipeWithReviews: RecipeCardProps = {
      ...testRecipeCard,
      averageRating: "4.9",
      topReview: "This was amazing!",
    };
    const { getByTestId, getByText } = render(
      <RecipeCard {...recipeWithReviews} />
    );
    const cardElement = getByTestId(recipeWithReviews.id);

    fireEvent.click(cardElement);

    expect(
      getByText(`Cooking time: ${recipeWithReviews.cookingTime} mins`)
    ).toBeVisible();
    expect(
      getByText(`Average rating: ${recipeWithReviews.averageRating}`)
    ).toBeVisible();
    expect(getByText(`"${recipeWithReviews.topReview}"`)).toBeVisible();
    expect(
      getByText(`Chilli heat level: ${recipeWithReviews.chilli}`)
    ).toBeVisible();
  });

  it("flips over again and displays the front of the card when clicked twice", () => {
    const { getByAltText, getByTestId, getByText } = render(
      <RecipeCard {...testRecipeCard} />
    );
    const cardElement = getByTestId(testRecipeCard.id);

    fireEvent.click(cardElement);
    fireEvent.click(cardElement);

    expect(getByAltText(testRecipeCard.name)).toBeVisible();
    expect(getByText(testRecipeCard.name)).toBeVisible();
    expect(getByText(testRecipeCard.shortDescription)).toBeVisible();
    // wait until the card is fully flipped before checking the transform
    setTimeout(() => {
      expect(cardElement).toHaveStyle({ transform: "rotateY(0deg)" });
    }, 500);
  });
});
