import styled, { css, DefaultTheme } from 'styled-components';

type Variant = 'solid' | 'common';

interface WrapperProps {
  variant: Variant;
  color: 'yellow' | 'purple';
  size: 'small' | 'normal';
  fontWeigth: 'regular' | 'bold';
  fontSize: 'small' | 'normal';
}

const wrapperVariant = {
  yellow: (theme: DefaultTheme, variant: Variant) => css`
    color: ${variant === 'solid'
      ? theme.colors.bases.white
      : theme.colors.bases.text};

    background-color: ${variant === 'solid'
      ? theme.colors.yellow.medium
      : theme.colors.bases.button};

    svg {
      color: ${variant === 'solid'
        ? theme.colors.bases.white
        : theme.colors.yellow.medium};
    }

    &:hover {
      color: ${variant === 'solid'
        ? theme.colors.bases.white
        : theme.colors.bases.subtitle};

      background-color: ${variant === 'solid'
        ? theme.colors.yellow.dark
        : theme.colors.bases.hover};
    }

    &:active {
      color: ${variant === 'solid'
        ? theme.colors.bases.white
        : theme.colors.bases.subtitle};

      background-color: ${variant === 'solid'
        ? theme.colors.yellow.dark
        : theme.colors.bases.hover};
    }
  `,
  purple: (theme: DefaultTheme, variant: Variant) => css`
    color: ${variant === 'solid'
      ? theme.colors.bases.white
      : theme.colors.bases.text};

    background-color: ${variant === 'solid'
      ? theme.colors.purple.medium
      : theme.colors.bases.button};

    svg {
      color: ${variant === 'solid'
        ? theme.colors.bases.white
        : theme.colors.purple.medium};
    }

    &:hover {
      color: ${variant === 'solid'
        ? theme.colors.bases.white
        : theme.colors.bases.subtitle};

      background-color: ${variant === 'solid'
        ? theme.colors.purple.dark
        : theme.colors.bases.hover};
    }

    &:active {
      color: ${variant === 'solid'
        ? theme.colors.bases.white
        : theme.colors.bases.subtitle};

      background-color: ${variant === 'solid'
        ? theme.colors.purple.dark
        : theme.colors.bases.hover};
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, variant, size, fontSize, fontWeigth }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.75rem 0.5rem;
    height: ${size === 'normal' ? '2.875rem' : '2rem'};
    width: fit-content;
    border-radius: 6px;
    font-weight: ${fontWeigth === 'regular' ? 400 : 700};
    font-size: ${fontSize === 'normal' ? '0.875rem' : '0.75rem'};

    text-transform: uppercase;
    border: none;

    transition: background-color 0.5s;

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    svg {
      font-size: ${size === 'normal' ? '1.375rem' : '1rem'};
    }

    ${!!color && wrapperVariant[color](theme, variant)}
  `}
`;
