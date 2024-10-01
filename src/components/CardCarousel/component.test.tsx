import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import CardCarousel from "./component";
import { testRecipeCards } from "../../utils/constants";

describe("CardCarousel", () => {
  it("renders correctly when an arrry of recipe cards is provided", () => {
    const { getByTestId, container } = render(
      <CardCarousel cards={testRecipeCards} />
    );

    expect(container).toBeVisible();
    expect(getByTestId(testRecipeCards[0].id)).toBeVisible();
    expect(getByTestId(testRecipeCards[1].id)).toBeVisible();
    expect(getByTestId(testRecipeCards[2].id)).toBeVisible();
  });

  it("does not render any recipes when cards is passed as an empty array", () => {
    const { container } = render(<CardCarousel cards={[]} />);

    expect(container.querySelectorAll("article").length).toBe(0);
  });
});
