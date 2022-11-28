import { Product, useCartContext } from '../../hooks/useCart';

import productsMocked from '../../mocks/products';

import QuantitySelector from '../QuantitySelector';
import * as S from './styles';

interface CatalogItemProps {
  product: Product;
}

const CatalogItem = () => {
  const { addToCart, increment, decrement } = useCartContext();

  return (
    <S.Wrapper>
      <img src={productsMocked[13].image} alt="" />
      <S.WrapperLabel>
        {productsMocked[13].label.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </S.WrapperLabel>

      <p>{productsMocked[13].title}</p>
      <p>{productsMocked[13].description}</p>

      <S.Footer>
        <p>{productsMocked[13].price}</p>

        <QuantitySelector
          quantity={0}
          onDecrement={() => decrement(1)}
          onIncrement={() => increment(1)}
        />
      </S.Footer>
    </S.Wrapper>
  );
};

export default CatalogItem;
