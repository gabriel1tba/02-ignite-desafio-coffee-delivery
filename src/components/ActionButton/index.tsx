import { ComponentPropsWithoutRef } from 'react';
import { IconType } from 'react-icons/lib';

import * as S from './styles';

export interface ActionButtonProps extends ComponentPropsWithoutRef<'button'> {
  icon: IconType;
  color?: 'yellow' | 'purple';
  variant?: 'solid' | 'common';
  borderRadius?: 'rounded' | 'common';
  quantity?: number;
}

const ActionButton = ({
  icon: Icon,
  color = 'yellow',
  variant = 'solid',
  borderRadius = 'common',
  quantity = 0,
  ...props
}: ActionButtonProps) => (
  <S.Wrapper
    color={color}
    variant={variant}
    quantity={quantity}
    borderRadius={borderRadius}
    {...props}
  >
    <Icon />
  </S.Wrapper>
);

export default ActionButton;
