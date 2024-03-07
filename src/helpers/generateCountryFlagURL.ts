export const DEFAULT_SIZE = 48;

export const generateCountryFlagURL = (
  countryCode: string,
  size: number = DEFAULT_SIZE
) => `https://flagsapi.com/${countryCode}/flat/${size}.png`;
