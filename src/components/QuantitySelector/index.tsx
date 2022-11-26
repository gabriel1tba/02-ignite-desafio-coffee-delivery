import { Plus, Minus } from 'phosphor-react';

import * as S from './styles';

interface QuantitySelectorProps {
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

const QuantitySelector = ({
  quantity,
  onDecrement,
  onIncrement,
}: QuantitySelectorProps) => (
  <S.Wrapper>
    <Minus onClick={onDecrement} />
    <span>{quantity}</span>
    <Plus onClick={onIncrement} />
  </S.Wrapper>
);

export default QuantitySelector;
