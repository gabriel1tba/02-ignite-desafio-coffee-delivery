import { useState } from 'react';

type Cep = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
};

const useCep = () => {
  const [address, setAddress] = useState({} as Cep);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFatched, setHasFatched] = useState(true);

  const fetchAddress = async (cep: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = (await response.json()) as Cep;

      setAddress(data);

      setHasFatched(true);
    } catch {
      /* empty */
    } finally {
      setIsLoading(false);
    }
  };

  return {
    address,
    fetchAddress,
    isLoading,
    hasFatched,
    setHasFatched,
  };
};

export default useCep;
