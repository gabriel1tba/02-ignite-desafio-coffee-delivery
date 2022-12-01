import { ComponentPropsWithoutRef } from 'react';
import { IconType } from 'react-icons/lib';

import * as S from './styles';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: string;
  icon?: IconType;
  color?: 'yellow' | 'purple';
  variant?: 'solid' | 'common';
  size?: 'small' | 'normal';
  fontSize?: 'small' | 'normal';
  fontWeight?: 'regular' | 'bold';
}

const Button = ({
  children,
  icon: Icon,
  color = 'yellow',
  variant = 'solid',
  size = 'normal',
  fontSize = 'normal',
  fontWeight = 'regular',
  type = 'button',
  ...props
}: ButtonProps) => (
  <S.Wrapper
    color={color}
    variant={variant}
    size={size}
    fontSize={fontSize}
    fontWeigth={fontWeight}
    type={type}
    {...props}
  >
    {Icon && <Icon />}
    {children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
