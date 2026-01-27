import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("should render firstName ad lastName", () => {
    const { container } = render(<MyAwesomeApp />);
    // console.log(container.innerHTML);
    // screen.debug();

    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");
    // console.log(h1?.innerHTML);

    expect(h1?.innerHTML).toContain("Virginia");
    expect(h3?.innerHTML).toContain("R");
  });

  test("should render firstName ad lastName - screen ", () => {
    render(<MyAwesomeApp />);
    screen.debug();

    // Assert da error si hay varios elementos que coinciden
    /* const h1 = screen.getByRole("heading", {
      level: 1,
    });
    // console.log(h1.innerHTML); */

    const h1 = screen.getByTestId("first-name-title");
    expect(h1?.innerHTML).toContain("Virginia");
  });

  // Compara con un snapshot o crea uno si no existe
  test("shold match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });

  // Compara con un snapshot o crea uno si no existe
  test("shold match snapshot - screen", () => {
    render(<MyAwesomeApp />);
    expect(screen.getByTestId('div-app')).toMatchSnapshot();
  });

});
