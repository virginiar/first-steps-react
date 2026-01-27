import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { FirstStepApp } from "./FirstStepsApp";

// Mock simple
/* vi.mock("./shopping-cart/ItemCounter.tsx", () => ({
  ItemCounter: () => <div data-testid="ItemCounter" />,
})); */

// Mock con props
/* vi.mock("./shopping-cart/ItemCounter.tsx", () => ({
  ItemCounter: (props: unknown) => (
    <div
      data-testid="ItemCounter"
      name={props.name}
      quantity={props.quantity}
    />
  ),
})); */

// Crea un espía en una función
const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock("./shopping-cart/ItemCounter.tsx", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe("FirstStepsApp", () => {
  // Se ejecuta antes de cada prueba para limpiar los mocks
  afterEach(() => {
    vi.clearAllMocks();
  });

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

  test("should render ItemCounter with correct props", () => {
    render(<FirstStepApp />);

    screen.debug();
    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Nintendo Switch 2",
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Pro Controller",
      quantity: 2,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Super Smash",
      quantity: 5,
    });
  });
});
