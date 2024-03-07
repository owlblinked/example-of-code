import { render, fireEvent } from "@testing-library/react";
import { SearchBar } from "./Searchbar";

describe("SearchBar component", () => {
  const searchHandlerMock = jest.fn();
  const placeholder = "Search";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with given props", () => {
    const { getByPlaceholderText } = render(
      <SearchBar searchHandler={searchHandlerMock} placeholder={placeholder} />
    );

    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it("calls searchHandler function with correct search query on input change", () => {
    const { getByPlaceholderText } = render(
      <SearchBar searchHandler={searchHandlerMock} placeholder={placeholder} />
    );
    const inputElement = getByPlaceholderText(placeholder);

    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(searchHandlerMock).toHaveBeenCalledTimes(1);
    expect(searchHandlerMock).toHaveBeenCalledWith("test");
  });

  it("has correct attributes", () => {
    const { getByRole } = render(
      <SearchBar searchHandler={searchHandlerMock} placeholder={placeholder} />
    );
    const inputElement = getByRole("search");

    expect(inputElement).toHaveAttribute("type", "search");
    expect(inputElement).toHaveAttribute("aria-label", placeholder);
    expect(inputElement).toHaveAttribute("role", "search");
  });
});
