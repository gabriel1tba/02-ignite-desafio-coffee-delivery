import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';
import { useTheme } from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  isLoading?: boolean;
}
import * as S from './styles';

const Input: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { error, isLoading = false, disabled, ...props },
  ref
) => {
  const theme = useTheme();

  return (
    <S.Wrapper hasError={!!error}>
      <div>
        <input disabled={disabled || isLoading} ref={ref} {...props} />
        <ClipLoader
          size={16}
          loading={isLoading}
          color={theme.colors.bases.label}
        />
      </div>

      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default forwardRef(Input);
