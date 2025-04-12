import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "~/routes/form";
import userEvent from "@testing-library/user-event";

describe("Form Component", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("Renders form page correctly", () => {
    render(<Form />);
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument();
  });

  it("Can click Back button", async () => {
    const user = userEvent.setup();

    render(<Form />);
    const button = screen.getByRole("button", { name: "Next" });
    expect(button).toBeInTheDocument();

    // check role selection
    await user.click(button);
    expect(screen.getByText("What is your role?")).toBeInTheDocument();

    const roleToSelect = screen.getByText("Software Engineer");
    await user.click(roleToSelect);

    const roleNextButton = screen.getByRole("button", { name: "Next" });
    expect(roleNextButton).not.toBeDisabled();
    await user.click(roleNextButton);

    // check company size selection
    expect(screen.getByText("What's your company size?")).toBeInTheDocument();

    const companyToSelect = screen.getByText("only me");
    await user.click(companyToSelect);
    const companyBackButton = screen.getByRole("button", { name: "Back" });

    expect(companyBackButton).not.toBeDisabled();
    await user.click(companyBackButton);

    // check company Source selection
    expect(screen.getByText("What is your role?")).toBeInTheDocument();

  });

  it("Can click Next button and full loop", async () => {
    const user = userEvent.setup();

    render(<Form />);
    const button = screen.getByRole("button", { name: "Next" });
    expect(button).toBeInTheDocument();

    // check role selection
    await user.click(button);
    expect(screen.getByText("What is your role?")).toBeInTheDocument();

    const roleToSelect = screen.getByText("Software Engineer");
    await user.click(roleToSelect);

    const roleNextButton = screen.getByRole("button", { name: "Next" });
    expect(roleNextButton).not.toBeDisabled();
    await user.click(roleNextButton);

    // check company size selection
    expect(screen.getByText("What's your company size?")).toBeInTheDocument();

    const companyToSelect = screen.getByText("only me");
    await user.click(companyToSelect);
    const companyNextButton = screen.getByRole("button", { name: "Next" });

    expect(companyNextButton).not.toBeDisabled();
    await user.click(companyNextButton);

    // check company Source selection
    expect(
      screen.getByText("How did you hear about us first?")
    ).toBeInTheDocument();
    const sourceToSelect = screen.getByText("Google Search");
    await user.click(sourceToSelect);

    const finishButton = screen.getByRole("button", { name: "Finish" });
    expect(finishButton).toBeInTheDocument();

    expect(finishButton).not.toBeDisabled();
    await user.click(finishButton);

    //check finish step
    fireEvent.click(finishButton);
    expect(screen.getByText("Thank you!")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("only me")).toBeInTheDocument();
    expect(screen.getByText("Google Search")).toBeInTheDocument();
  });
});
