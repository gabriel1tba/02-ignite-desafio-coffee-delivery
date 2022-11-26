import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}
import * as S from './styles';

const Input: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { error, ...props },
  ref
) => (
  <S.Wrapper hasError={!!error}>
    <input ref={ref} {...props} />

    {error && <S.Error>{error}</S.Error>}
  </S.Wrapper>
);

export default forwardRef(Input);
