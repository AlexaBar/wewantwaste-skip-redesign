import axios from 'axios';

export const fetchSkipsByLocation = async () => {
  try {
    const response = await axios.get(
      'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching skip data:', error);
    return [];
  }
};
