import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CandidateItem } from "./CandidateItem";

const mockCandidate = {
  id: "123",
  firstName: "John",
  lastName: "Doe",
  verified: true,
  location: "New York",
  role: "Software Engineer",
  image: "https://example.com/image.jpg",
  country: "US",
  availability: "within 1 month",
  nationality: "US",
};

describe("CandidateItem", () => {
  it("renders candidate item correctly", () => {
    render(
      <MemoryRouter>
        <CandidateItem item={mockCandidate} />
      </MemoryRouter>
    );

    expect(
      screen.getByText(`${mockCandidate.firstName} ${mockCandidate.lastName}`)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(`${mockCandidate.country} flag`)
    ).toBeInTheDocument();
    expect(screen.getByText(mockCandidate.location)).toBeInTheDocument();
    expect(screen.getByText(mockCandidate.role)).toBeInTheDocument();
  });

  it("renders verified badge if candidate is verified", () => {
    render(
      <MemoryRouter>
        <CandidateItem item={mockCandidate} />
      </MemoryRouter>
    );

    expect(screen.getByText("borderless verified")).toBeInTheDocument();
  });

  it("does not render verified badge if candidate is not verified", () => {
    const mockCandidateNotVerified = { ...mockCandidate, verified: false };

    render(
      <MemoryRouter>
        <CandidateItem item={mockCandidateNotVerified} />
      </MemoryRouter>
    );

    expect(screen.queryByText("borderless verified")).toBeNull();
  });

  it("renders link to candidate details page", () => {
    render(
      <MemoryRouter>
        <CandidateItem item={mockCandidate} />
      </MemoryRouter>
    );

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `/candidate/${mockCandidate.id}`
    );
  });
});
