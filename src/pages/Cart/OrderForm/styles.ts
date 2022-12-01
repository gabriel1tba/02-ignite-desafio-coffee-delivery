import styled, { css } from 'styled-components';
import { lighten } from 'polished';
export const Wrapper = styled.section``;

export const FormSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    width: 40rem;
    background: ${theme.colors.bases.card};
    border-radius: 6px;

    > div {
      display: flex;
      justify-content: space-between;
    }

    button {
      display: flex;
      align-items: center;
      max-width: 11.167rem;
      width: 100%;
    }

    svg {
      font-size: 1rem;
    }

    & + & {
      margin-top: 0.75rem;
    }

    .active {
      color: ${theme.colors.bases.text};

      background-color: ${theme.colors.purple.light};
    }
  `}
`;

interface ButtonSelectProp {
  hasError: boolean;
}
export const ButtonSelect = styled.div<ButtonSelectProp>`
  ${({ hasError, theme }) =>
    hasError &&
    css`
      button {
        background-color: ${lighten(0.425, theme.colors.red.main)};
        svg {
          color: ${theme.colors.red.main};
        }
      }
    `}
`;

interface FormHeaderProps {
  fillSvg: string;
}

export const FormHeader = styled.header<FormHeaderProps>`
  ${({ theme, fillSvg }) => css`
    display: flex;
    margin-bottom: 2rem;
    font-weight: 400;

    svg {
      fill: ${fillSvg};
      margin-right: 0.5rem;
      font-size: 1rem;
    }

    div {
      p {
        line-height: 1.313rem;
        color: ${theme.colors.bases.subtitle};
      }

      small {
        font-size: 0.875rem;
        line-height: 1.125rem;
        color: ${theme.colors.bases.text};
      }
    }
  `}
`;

interface ColProps {
  size?: number;
}

export const Row = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Col = styled.div<ColProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: ${({ size = 100 }) => (size > 100 ? 100 : size)}%;
  margin-bottom: 1rem;
`;
