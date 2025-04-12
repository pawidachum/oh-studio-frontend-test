import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "~/routes/home";
import { createMemoryRouter, RouterProvider } from "react-router";
import "whatwg-fetch";
import { waitFor } from "@testing-library/react";

jest.mock("wowjs", () => ({
  WOW: jest.fn().mockImplementation(() => ({
    init: jest.fn(),
  })),
}));

describe("Home Component", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders home page correctly with loader data", async () => {
    // Mock loader data
    const mockCats = [
      { id: "1", url: "/cat1" },
      { id: "2", url: "/cat2" },
    ];

    // Create a memory router with loader data
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <Home />,
          loader: () => mockCats,
        },
      ],
      {
        initialEntries: ["/"],
        initialIndex: 0,
      }
    );

    render(<RouterProvider router={router} />);
    screen.debug();

    await waitFor(() => {
      expect(
        screen.getByText(
          /A brand and product designer working with clients globally/i
        )
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Cat 1")).toBeInTheDocument();
      expect(screen.getByText("Cat 2")).toBeInTheDocument();
    });
  });
});
