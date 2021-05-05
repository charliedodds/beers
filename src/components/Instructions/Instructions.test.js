import React from "react";
import { render } from "@testing-library/react";
import Instructions from "./Instructions";

describe("Instructions tests", () => {
  it("should render", () => {
    expect(render(<Instructions />)).toBeTruthy();
  });
});
