// import fetch from "node-fetch";

import React from "react";
import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import DevTestComp from "../components/devtest/DevTestComp";

describe("Counter Total Test", () => {
  it("renders initial count", () => {
    renderDevTestComp();
    // const countElement = screen.getByText("COUNT TEST");
    // expect(countElement).toHaveTextContent("COUNT TEST");
  });
});

function renderDevTestComp() {
  return render(<DevTestComp />);
}
