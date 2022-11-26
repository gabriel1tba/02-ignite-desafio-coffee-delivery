import { Product } from '../hooks/useCart';

const storageProducts = (products: Product[]) => {
  localStorage.setItem('@Coffee-Delivery:products', JSON.stringify(products));
};

export default storageProducts;
