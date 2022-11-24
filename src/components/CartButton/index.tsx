import { ComponentPropsWithoutRef } from 'react';
import { Icon } from 'phosphor-react';

import * as S from './styles';

export interface CartButtonProps extends ComponentPropsWithoutRef<'button'> {
  icon?: Icon;
  color?: 'yellow' | 'purple';
  variant?: 'solid' | 'common';
}

const CartButton = ({
  icon: Icon,
  color = 'yellow',
  variant = 'solid',

  ...props
}: CartButtonProps) => (
  <S.Wrapper color={color} variant={variant} {...props}>
    {Icon && <Icon />}
  </S.Wrapper>
);

export default CartButton;
