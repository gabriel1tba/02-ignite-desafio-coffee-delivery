import { ComponentPropsWithoutRef } from 'react';
import { Icon } from 'phosphor-react';

import * as S from './styles';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: string;
  icon?: Icon;
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
  ...props
}: ButtonProps) => {
  return (
    <S.Container
      color={color}
      variant={variant}
      size={size}
      fontSize={fontSize}
      fontWeigth={fontWeight}
      {...props}
    >
      {Icon && <Icon />}
      {children && <span>{children}</span>}
    </S.Container>
  );
};

export default Button;
