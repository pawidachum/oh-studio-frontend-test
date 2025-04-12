import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "~/routes/contact";

jest.mock("wowjs", () => ({
  WOW: jest.fn().mockImplementation(() => ({
    init: jest.fn()
  }))
}));

describe("Contact Component", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders contact page correctly", () => {
    render(<Contact />);
    expect(screen.getByText("Let's work together.")).toBeInTheDocument();
    
  });
});
