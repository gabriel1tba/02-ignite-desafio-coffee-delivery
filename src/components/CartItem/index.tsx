import { VscTrash } from 'react-icons/vsc';

import formatCurrency from '../../utils/formatCurrency';

import { Product, useCartContext } from '../../hooks/useCart';

import Button from '../Button';
import QuantitySelector from '../QuantitySelector';

import * as S from './styles';

interface CartItemProps {
  product: Product;
}

const CartItem = ({ product }: CartItemProps) => {
  const { removeFromCart, increment, decrement } = useCartContext();

  return (
    <S.Wrapper>
      <img src={product.image} />
      <S.ManageItem>
        <p>{product.title}</p>

        <div>
          <QuantitySelector
            quantity={product.amount}
            onDecrement={() => decrement(product.id)}
            onIncrement={() => increment(product.id)}
          />

          <Button
            onClick={() => removeFromCart(product.id)}
            icon={VscTrash}
            variant="common"
            color="purple"
            size="small"
          >
            Remover
          </Button>
        </div>
      </S.ManageItem>

      <p>{formatCurrency(product.price)}</p>
    </S.Wrapper>
  );
};

export default CartItem;
