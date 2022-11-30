import { useState, useCallback } from 'react';
import { Product } from './useCart';

import productsMocked from '../mocks/products';

type StoredProduct = {
  id: number;
  amount: number;
};

const initializeProductsFc = () => {
  if (typeof window === 'undefined') return productsMocked;

  try {
    const storedProducts = window.localStorage.getItem(
      '@CoffeeDelivery:products'
    );

    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts) as StoredProduct[];

      const products = productsMocked.map((product) => {
        const storedProduct = parsedProducts.find(
          (parsedProduct) => parsedProduct.id === product.id
        );

        if (storedProduct) {
          return {
            ...product,
            amount: storedProduct.amount,
            addedToCart: true,
          };
        }

        return product;
      });

      return products;
    }

    return productsMocked;
  } catch (error) {
    console.error(error);
    return productsMocked;
  }
};

const useCartLocalStorage = () => {
  const [products, setValue] = useState<Product[]>(initializeProductsFc);

  const setProducts = useCallback((value: Product[]) => {
    try {
      setValue(value);

      const valuesToStore: StoredProduct[] = [];

      value.forEach((product) => {
        if (product.addedToCart) {
          valuesToStore.push({
            id: product.id,
            amount: product.amount,
          });
        }
      });

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(
          '@CoffeeDelivery:products',
          JSON.stringify(valuesToStore)
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { products, setProducts };
};

export default useCartLocalStorage;
