import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import CardCarousel from "./component";
import { testRecipeCards } from "../../utils/constants";

describe("CardCarousel", () => {
  it("renders correctly on desktop when an arrry of recipe cards is provided", () => {
    const { getByTestId, container } = render(
      <CardCarousel cards={testRecipeCards} />
    );

    expect(container).toBeVisible();
    expect(getByTestId(testRecipeCards[0].id)).toBeVisible();
    expect(getByTestId(testRecipeCards[1].id)).toBeVisible();
    expect(getByTestId(testRecipeCards[2].id)).toBeVisible();
  });

  it("renders correctly on mobile when an arrry of recipe cards is provided", () => {
    const { getByTestId, container } = render(
      <CardCarousel cards={testRecipeCards} />
    );

    expect(container).toBeVisible();
    expect(getByTestId(testRecipeCards[0].id)).toBeVisible();
  });

  it("does not render any recipes when the cards property is an empty array", () => {
    const { container } = render(<CardCarousel cards={[]} />);

    expect(container.querySelectorAll("article").length).toBe(0);
  });
});
