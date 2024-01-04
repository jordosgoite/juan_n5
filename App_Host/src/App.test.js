import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

const componentRender = () => {
  render(<App />);
};

describe("<App />", () => {
  describe("When component is initialized, it should render the app title", () => {
    it("welcome msg should be rendered", () => {
      componentRender();
      expect(screen.getByText("welcome")).toBeInTheDocument();
    });
  });
});
