import {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';

import useLocalStorage from './useLocalStorage';

import productsMocked from '../mocks/products';

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
  totalPrice: number;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
}

const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [products, setProducts] = useLocalStorage<Product[]>(
    '@CoffeeDelivery:products',
    productsMocked
  );

  const addToCart = useCallback(
    (id: number) => {
      const updatedProducts = products.map((product) =>
        product.id === id
          ? { ...product, amount: product.amount + 1, addedToCart: true }
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
        addToCart,
        removeFromCart,
        increment,
        decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = (): CartContextProps => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useToastContext must be used within ToastProvider');
  }

  return context;
};

export { CartProvider, useCartContext };
