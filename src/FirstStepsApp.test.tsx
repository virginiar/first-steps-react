import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { FirstStepApp } from "./FirstStepsApp";

vi.mock("./shopping-cart/ItemCounter.tsx", () => ({
  ItemCounter: () => <div data-testid="ItemCounter" />,
}));

describe("FirstStepsApp", () => {
  test("should match snapshot", () => {
    const { container } = render(<FirstStepApp />);
    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter components", () => {
    render(<FirstStepApp />);
    screen.debug();

    const itemCounters = screen.getAllByTestId("ItemCounter");
    expect(itemCounters.length).toBe(3);
  });
});
