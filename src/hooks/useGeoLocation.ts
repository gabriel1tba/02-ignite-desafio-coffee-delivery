import { useState, useEffect } from 'react';

type Localization = {
  city: string;
  region_code: string;
};

const useGeoLocation = () => {
  const [city, setCity] = useState('');
  const [regionCode, setRegionCode] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://ipapi.co/json');

        const { city, region_code } = (await response.json()) as Localization;

        setCity(city);
        setRegionCode(region_code);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    city,
    regionCode,
    isLoading,
    isError,
  };
};

export default useGeoLocation;
