export const fetchSkipsByLocation = async () => {
  const isSandbox = window.location.hostname.includes("codesandbox");

  const url = isSandbox
    ? "/mockSkips.json"
    : "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

