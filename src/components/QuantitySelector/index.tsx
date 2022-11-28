import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';

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
    <HiOutlineMinus onClick={onDecrement} />
    <span>{quantity}</span>
    <HiOutlinePlus onClick={onIncrement} />
  </S.Wrapper>
);

export default QuantitySelector;
