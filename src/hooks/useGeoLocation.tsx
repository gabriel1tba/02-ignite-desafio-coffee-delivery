import { useState, useEffect } from 'react';

type Localization = {
  city: string;
  region_code: string;
};

const useGeoLocation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState('');
  const [regionCode, setRegionCode] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://ipapi.co/json');

        const { city, region_code } = (await response.json()) as Localization;

        setCity(city);
        setRegionCode(region_code);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return {
    city,
    regionCode,
    isLoading,
  };
};

export default useGeoLocation;
