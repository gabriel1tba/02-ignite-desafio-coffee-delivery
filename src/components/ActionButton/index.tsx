import { ComponentPropsWithoutRef } from 'react';
import { IconType } from 'react-icons/lib';

import * as S from './styles';

export interface ActionButtonProps extends ComponentPropsWithoutRef<'button'> {
  icon: IconType;
  color?: 'yellow' | 'purple';
  variant?: 'solid' | 'common';
  borderRadius?: 'rounded' | 'common';
  size?: 'small' | 'normal';
  pinContent?: number;
}

const ActionButton = ({
  icon: Icon,
  color = 'yellow',
  variant = 'solid',
  borderRadius = 'common',
  size = 'normal',
  pinContent = 0,
  ...props
}: ActionButtonProps) => (
  <S.Wrapper
    color={color}
    variant={variant}
    size={size}
    pinContent={pinContent}
    borderRadius={borderRadius}
    {...props}
  >
    <Icon />
  </S.Wrapper>
);

export default ActionButton;
