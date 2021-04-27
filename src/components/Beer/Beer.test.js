import React from "react";
import { render } from "@testing-library/react";
import Beer from "./Beer";

describe("Beer tests", () => {
  it("should render", () => {
    expect(render(<Beer />)).toBeTruthy();
  });
});
