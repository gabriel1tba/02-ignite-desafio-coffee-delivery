import styled, { css, DefaultTheme } from 'styled-components';

type Variant = 'solid' | 'common';

interface WrapperProps {
  variant: Variant;
  color: 'yellow' | 'purple';
}

const wrapperVariant = {
  yellow: (theme: DefaultTheme, variant: Variant) => css`
    background-color: ${variant === 'solid'
      ? theme.colors.yellow.dark
      : theme.colors.yellow.light};

    svg {
      color: ${variant === 'solid'
        ? theme.colors.bases.white
        : theme.colors.yellow.medium};
    }

    &:hover {
      background-color: ${variant === 'solid'
        ? theme.colors.yellow.medium
        : theme.colors.yellow.light};
    }

    &:active {
      background-color: ${variant === 'solid'
        ? theme.colors.yellow.dark
        : theme.colors.bases.hover};
    }
  `,
  purple: (theme: DefaultTheme, variant: Variant) => css`
    background-color: ${variant === 'solid'
      ? theme.colors.purple.dark
      : theme.colors.purple.light};

    svg {
      color: ${variant === 'solid'
        ? theme.colors.bases.white
        : theme.colors.purple.medium};
    }

    &:hover {
      background-color: ${variant === 'solid'
        ? theme.colors.purple.medium
        : theme.colors.purple.light};
    }

    &:active {
      background-color: ${variant === 'solid'
        ? theme.colors.purple.dark
        : theme.colors.purple.light};
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, variant }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.75rem 0.5rem;
    height: 2.375rem;
    width: 2.375rem;
    border-radius: 6px;
    line-height: 1.375rem;

    text-transform: uppercase;
    border: none;

    transition: background-color 0.5s;

    svg {
      font-size: 1.375rem;
    }

    ${!!color && wrapperVariant[color](theme, variant)}
  `}
`;
