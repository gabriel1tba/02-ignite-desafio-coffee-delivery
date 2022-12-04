import {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useCallback,
  useState,
} from 'react';

import { CheckoutFormData } from '../pages/Checkout';

import useCartLocalStorage from './useCartLocalStorage';

export type Product = {
  id: number;
  image: string;
  label: string[];
  title: string;
  description: string;
  price: number;
  amount: number;
  addedToCart: boolean;
};

interface CartContextProps {
  products: Product[];
  totalProductsInCart: number;
  totalPrice: number;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  address: CheckoutFormData;
  setAddress: (address: CheckoutFormData) => void;
}

const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const { products, setProducts } = useCartLocalStorage();
  const [address, setAddress] = useState({} as CheckoutFormData);

  const addToCart = useCallback(
    (id: number) => {
      const updatedProducts = products.map((product) =>
        product.id === id
          ? {
              ...product,
              amount: product.amount > 0 ? product.amount : product.amount + 1,
              addedToCart: true,
            }
          : product
      );

      setProducts(updatedProducts);
    },

    [products, setProducts]
  );

  const removeFromCart = useCallback(
    (id: number) => {
      const updatedProducts = products.map((product) =>
        product.id === id
          ? { ...product, amount: 0, addedToCart: false }
          : product
      );

      setProducts(updatedProducts);
    },
    [products, setProducts]
  );

  const clearCart = useCallback(() => {
    setProducts(
      products.map((product) => ({
        ...product,
        amount: 0,
        addedToCart: false,
      }))
    );

    window.localStorage.removeItem('@CoffeeDelivery:products');
  }, [products, setProducts]);

  const increment = useCallback(
    (id: number) => {
      const updatedProducts = products.map((product) =>
        product.id === id ? { ...product, amount: product.amount + 1 } : product
      );

      setProducts(updatedProducts);
    },
    [products, setProducts]
  );

  const decrement = useCallback(
    (id: number) => {
      const updatedProducts = products.map((product) =>
        product.id === id
          ? { ...product, amount: product.amount > 0 ? product.amount - 1 : 0 }
          : product
      );

      setProducts(updatedProducts);
    },
    [products, setProducts]
  );

  const totalProductsInCart = useMemo(() => {
    return products.filter((product) => product.addedToCart).length;
  }, [products]);

  const totalPrice = useMemo(() => {
    const total = products
      .filter((product) => product.addedToCart)
      .reduce((sumTotal, product) => {
        const productSubtotal = product.price * product.amount;

        return sumTotal + productSubtotal;
      }, 0);

    return total;
  }, [products]);

  return (
    <CartContext.Provider
      value={{
        products,
        totalPrice,
        totalProductsInCart,
        addToCart,
        removeFromCart,
        clearCart,
        increment,
        decrement,
        address,
        setAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = (): CartContextProps => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used within CartProvider');
  }

  return context;
};

export { CartProvider, useCartContext };
