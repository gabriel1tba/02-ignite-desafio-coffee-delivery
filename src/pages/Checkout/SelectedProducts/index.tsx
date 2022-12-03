import { Fragment, useMemo } from 'react';

import formatCurrency from '../../../utils/formatCurrency';

import { useCartContext } from '../../../hooks/useCart';

import CartItem from '../../../components/CartItem';
import Button from '../../../components/Button';

import * as S from './styles';

const SelectedProducts = () => {
  const { products, totalPrice } = useCartContext();

  const generateMoney = useMemo(
    () => Number((Math.random() * 10.0).toFixed(1)),
    []
  );

  return (
    <S.Wrapper>
      <h1>Cafés selecionados</h1>
      <S.ProductList>
        {products
          .filter((product) => product.addedToCart)
          .map((product) => (
            <Fragment key={product.id}>
              <CartItem product={product} />
              <S.Divider />
            </Fragment>
          ))}

        <S.PriceInfo>
          <div>
            <span>Total de itens</span>
            <span>{formatCurrency(totalPrice)}</span>
          </div>

          <div>
            <span>Entrega</span>
            <span>{formatCurrency(generateMoney)}</span>
          </div>

          <div>
            <strong>Total</strong>
            <strong>{formatCurrency(totalPrice + generateMoney)}</strong>
          </div>
        </S.PriceInfo>

        <Button type="submit">CONFIRMAR PEDIDO</Button>
      </S.ProductList>
    </S.Wrapper>
  );
};

export default SelectedProducts;
