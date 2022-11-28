import { MdShoppingCart, MdRemoveShoppingCart } from 'react-icons/md';

import { Product, useCartContext } from '../../hooks/useCart';
import formatCurrency from '../../utils/formatCurrency';

import CartButton from '../CartButton';

import QuantitySelector from '../QuantitySelector';
import * as S from './styles';

interface CatalogItemProps {
  product: Product;
}

const CatalogItem = ({ product }: CatalogItemProps) => {
  const { addToCart, removeFromCart, increment, decrement } = useCartContext();

  return (
    <S.Wrapper>
      <img src={product.image} alt="" />
      <S.WrapperLabel>
        {product.label.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </S.WrapperLabel>

      <h1>{product.title}</h1>
      <p>{product.description}</p>

      <S.Footer>
        <p>{formatCurrency(product.price)}</p>

        <QuantitySelector
          quantity={0}
          onDecrement={() => decrement(1)}
          onIncrement={() => increment(1)}
        />

        {product.addedToCart ? (
          <CartButton
            onClick={() => removeFromCart(product.id)}
            color="purple"
            icon={MdRemoveShoppingCart}
          />
        ) : (
          <CartButton
            onClick={() => addToCart(product.id)}
            color="purple"
            icon={MdShoppingCart}
          />
        )}
      </S.Footer>
    </S.Wrapper>
  );
};

export default CatalogItem;
