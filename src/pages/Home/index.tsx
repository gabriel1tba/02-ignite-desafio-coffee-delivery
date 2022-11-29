import CatalogItem from '../../components/CatalogItem';
import CartItem from '../../components/CartItem';
import { useCartContext } from '../../hooks/useCart';

import * as S from './styles';

const Home = () => {
  const { products } = useCartContext();

  return (
    <S.Wrapper>
      <CartItem product={products[5]} />
      <CatalogItem product={products[0]} />
    </S.Wrapper>
  );
};

export default Home;
