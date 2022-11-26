import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  useCallback,
} from 'react';

import productsMocked from '../mocks/products';

interface Product {
  id: number;
  image: string;
  label: string[];
  title: string;
  description: string;
  price: number;
  amount: number;
}

interface CartContextProps {
  products: Product[];
  productsAddedToCart: Product[];
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
  const [products, setProducts] = useState<Product[]>(productsMocked);

  const addToCart = useCallback(
    (product: Product) => {
      const productExists = products.find((p) => p.id === product.id);

      if (productExists) {
        setProducts(
          products.map((p) =>
            p.id === product.id ? { ...product, amount: p.amount + 1 } : p
          )
        );
      } else {
        setProducts([...products, { ...product, amount: 1 }]);
      }
    },
    [products]
  );

  const removeFromCart = useCallback(
    (id: number) => {
      const remainingProducts = products.filter((product) => product.id !== id);

      setProducts(remainingProducts);
    },
    [products]
  );

  const increment = useCallback(
    (id: number) => {
      const updatedProducts = products.map((product) =>
        product.id === id ? { ...product, amount: product.amount + 1 } : product
      );

      setProducts(updatedProducts);
    },
    [products]
  );

  const decrement = useCallback(
    (id: number) => {
      const updatedProducts = products.map((product) =>
        product.id === id ? { ...product, amount: product.amount - 1 } : product
      );

      setProducts(updatedProducts);
    },
    [products]
  );

  const totalPrice = useMemo(() => {
    const total = products.reduce((sumTotal, product) => {
      const productSubtotal = product.price * product.amount;

      return sumTotal + productSubtotal;
    }, 0);

    return total;
  }, [products]);

  const productsAddedToCart = useMemo(() => {
    const total = products.filter((product) => product.amount > 0);

    return total;
  }, [products]);

  return (
    <CartContext.Provider
      value={{
        products,
        productsAddedToCart,
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
