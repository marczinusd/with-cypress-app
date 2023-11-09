import { render, screen } from "@testing-library/react";
import AboutComponent from "../components/about-component";
import "@testing-library/jest-dom";

describe("AboutComponent", () => {
  it("should render", () => {
    render(<AboutComponent></AboutComponent>);
  });

  it('should display a title containing "About"', () => {
    render(<AboutComponent></AboutComponent>);

    expect(screen.getByText("About Page")).toBeInTheDocument();
  });
});
