import React from "react";
import { render } from "@testing-library/react";
import BeerFridge from "./BeerFridge";

describe("BeerFridge tests", () => {
  it("should render", () => {
    expect(render(<BeerFridge />)).toBeTruthy();
  });
});
