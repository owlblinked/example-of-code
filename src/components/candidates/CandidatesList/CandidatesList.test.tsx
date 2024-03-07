import { render } from "@testing-library/react";
import { CandidatesList } from "./CandidatesList";

describe("CandidatesList", () => {
  it("renders loading text when loading is true", () => {
    const { getByText } = render(<CandidatesList data={[]} loading={true} />);
    expect(getByText("Loading candidates...")).toBeInTheDocument();
  });

  it("renders error text when data is empty", () => {
    const { getByText } = render(<CandidatesList data={[]} />);
    expect(
      getByText("No candidates available. Please check back later.")
    ).toBeInTheDocument();
  });
});
