import { MdShoppingCart, MdRemoveShoppingCart } from 'react-icons/md';

import formatCurrency from '../../utils/formatCurrency';

import { Product, useCartContext } from '../../hooks/useCart';

import ActionButton from '../ActionButton';
import QuantitySelector from '../QuantitySelector';

import * as S from './styles';

interface CatalogItemProps {
  product: Product;
}

const CatalogItem = ({ product }: CatalogItemProps) => {
  const { addToCart, removeFromCart, increment, decrement } = useCartContext();

  return (
    <S.Wrapper>
      <img src={product.image} />
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
          quantity={product.amount}
          onDecrement={() => decrement(product.id)}
          onIncrement={() => increment(product.id)}
        />

        {product.addedToCart ? (
          <ActionButton
            onClick={() => removeFromCart(product.id)}
            color="purple"
            icon={MdRemoveShoppingCart}
          />
        ) : (
          <ActionButton
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
