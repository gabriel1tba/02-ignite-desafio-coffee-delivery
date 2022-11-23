import { ComponentPropsWithoutRef } from 'react';
import { Icon } from 'phosphor-react';

import * as S from './styles';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: string;
  fontWeight?: 'regular' | 'bold';
  icon?: Icon;
  color?: 'yellow' | 'purple';
  variant?: 'solid' | 'common';
  size?: 'small' | 'normal';
}

const Button = ({
  children,
  icon: Icon,
  color = 'yellow',
  variant = 'solid',
  fontWeight = 'regular',
  ...props
}: ButtonProps) => {
  return (
    <S.Container
      color={color}
      variant={variant}
      fontWeigth={fontWeight}
      {...props}
    >
      {Icon && <Icon />}
      {children && <span>{children}</span>}
    </S.Container>
  );
};

export default Button;
