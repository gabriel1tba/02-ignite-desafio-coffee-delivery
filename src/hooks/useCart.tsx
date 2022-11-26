import {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';

import useLocalStorage from './useLocalStorage';

export type Product = {
  id: number;
  image: string;
  label: string[];
  title: string;
  description: string;
  price: number;
  amount: number;
};

interface CartContextProps {
  products: Product[];
  totalPrice: number;
  addToCart: (product: Product) => void;
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
    '@RocketShoes:products',
    []
  );

  const addToCart = useCallback(
    (product: Product) => {
      const productExists = products.find((p) => p.id === product.id);

      if (productExists) {
        setProducts((prevState) =>
          prevState.map((p) =>
            p.id === product.id ? { ...product, amount: p.amount + 1 } : p
          )
        );
      } else {
        setProducts(
          (prevState) => [...prevState, { ...product, amount: 1 }] as Product[]
        );
      }
    },

    [products, setProducts]
  );

  const removeFromCart = useCallback(
    (id: number) => {
      const remainingProducts = products.filter((product) => product.id !== id);

      setProducts(remainingProducts);
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
        product.id === id ? { ...product, amount: product.amount - 1 } : product
      );

      setProducts(updatedProducts);
    },
    [products, setProducts]
  );

  const totalPrice = useMemo(() => {
    const total = products.reduce((sumTotal, product) => {
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
