import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "~/routes/home";
import { createMemoryRouter, RouterProvider } from "react-router";

jest.mock("wowjs", () => ({
  WOW: jest.fn().mockImplementation(() => ({
    init: jest.fn(),
  })),
}));

describe("Home Component", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders home page correctly with loader data", () => {
    // Mock loader data
    // const mockCats = [
    //   { id: "1", url: "/cat1" },
    //   { id: "2", url: "/cat2" },
    // ];

    // // Create a memory router with loader data
    // const router = createMemoryRouter(
    //   [
    //     {
    //       path: "/",
    //       element: <Home />,
    //       loader: () => mockCats,
    //     },
    //   ],
    //   {
    //     initialEntries: ["/"],
    //     initialIndex: 0,
    //   }
    // );

    // render(<RouterProvider router={router} />);

    // Use an element you expect to see
    // expect(screen.getByText("Categories")).toBeInTheDocument();
    // expect(screen.getByText("/cat1")).toBeInTheDocument();
    // expect(screen.getByText("/cat2")).toBeInTheDocument();
  });
});
