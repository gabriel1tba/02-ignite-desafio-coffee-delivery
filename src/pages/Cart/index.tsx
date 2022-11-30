import CartItem from '../../components/CartItem';
import { useCartContext } from '../../hooks/useCart';

import * as S from './styles';

const Cart = () => {
  const { products } = useCartContext();

  return (
    <S.Wrapper>
      {products
        .filter((product) => product.addedToCart)
        .map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
    </S.Wrapper>
  );
};

export default Cart;
