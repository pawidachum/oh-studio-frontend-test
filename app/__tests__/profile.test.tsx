import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "~/routes/profile";

jest.mock("wowjs", () => ({
  WOW: jest.fn().mockImplementation(() => ({
    init: jest.fn()
  }))
}));

describe("Profile Component", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders profile page correctly", () => {
    render(<Profile />);
    expect(screen.getByText("Let's work together.")).toBeInTheDocument();
    
  });
});
