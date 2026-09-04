import Page from "@/app/page";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Page", () => {
  it("renders a heading", () => {
    const { container } = render(<Page />);

    const divElement = container.querySelector("section");

    expect(divElement).toBeInTheDocument();
  });
});
