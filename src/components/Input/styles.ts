import styled, { css } from 'styled-components';

interface WrapperProps {
  hasError: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hasError }) => css`
    div {
      position: relative;

      input {
        display: flex;
        align-items: center;
        padding: 0.75rem;
        gap: 0.25rem;
        width: 100%;
        height: 2.625rem;
        color: ${theme.colors.bases.text};
        background: ${theme.colors.bases.input};
        border: 1px solid ${theme.colors.bases.button};
        border-radius: 4px;

        font-weight: normal;
        font-size: 0.875rem;
        line-height: 1.125rem;

        &::placeholder {
          color: ${theme.colors.bases.label};
        }

        &:focus {
          border: 1px solid ${theme.colors.yellow.dark};
        }

        &:disabled {
          background: ${theme.colors.bases.hover};
          cursor: not-allowed;
        }

        ${hasError &&
        css`
          border: 1px solid ${theme.colors.red.main};
        `}
      }

      span {
        position: absolute;
        right: 0.5rem;
        top: 0.8rem;
      }
    }
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    display: block;
    margin: 0.25rem 0;
    color: ${theme.colors.red.main};
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 1rem;
  `}
`;
