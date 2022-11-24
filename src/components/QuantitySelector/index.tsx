import { Plus, Minus } from 'phosphor-react';

import * as S from './styles';

interface QuantitySelectorProps {
  quantity: number;
  onDecrement: (value: number) => void;
  onIncrement: (value: number) => void;
}

const QuantitySelector = ({
  quantity,
  onDecrement,
  onIncrement,
}: QuantitySelectorProps) => (
  <S.Wrapper>
    <Minus onClick={() => onDecrement(quantity - 1)} />
    <span>{quantity}</span>
    <Plus onClick={() => onIncrement(quantity + 1)} />
  </S.Wrapper>
);

export default QuantitySelector;
