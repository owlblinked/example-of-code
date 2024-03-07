import { generateCountryFlagURL, DEFAULT_SIZE } from "./generateCountryFlagURL";

describe("generateCountryFlagURL", () => {
  it("should generate a valid country flag URL with default size", () => {
    const countryCode = "US";
    const expectedURL = `https://flagsapi.com/${countryCode}/flat/${DEFAULT_SIZE}.png`;
    const result = generateCountryFlagURL(countryCode);

    expect(result).toEqual(expectedURL);
  });

  it("should generate a valid country flag URL with custom size", () => {
    const countryCode = "FR";
    const customSize = 32;
    const expectedURL = `https://flagsapi.com/${countryCode}/flat/${customSize}.png`;
    const result = generateCountryFlagURL(countryCode, customSize);

    expect(result).toEqual(expectedURL);
  });
});
