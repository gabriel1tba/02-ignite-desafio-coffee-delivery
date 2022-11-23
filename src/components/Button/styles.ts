import styled, { css, DefaultTheme } from 'styled-components';

type Variant = 'solid' | 'common';

interface ContainerProps {
  variant: Variant;
  color: 'yellow' | 'purple';
  fontWeigth: 'regular' | 'bold';
}

const containerVariant = {
  yellow: (theme: DefaultTheme, variant: Variant) => css`
    color: ${variant === 'solid'
      ? theme.colors.bases.white
      : theme.colors.bases.text};

    background: ${variant === 'solid'
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

      background: ${variant === 'solid'
        ? theme.colors.yellow.dark
        : theme.colors.bases.hover};
    }

    &:active {
      color: ${variant === 'solid'
        ? theme.colors.bases.white
        : theme.colors.bases.subtitle};

      background: ${variant === 'solid'
        ? theme.colors.yellow.dark
        : theme.colors.bases.hover};
    }
  `,
  purple: (theme: DefaultTheme, variant: Variant) => css`
    color: ${variant === 'solid'
      ? theme.colors.bases.white
      : theme.colors.bases.text};

    background: ${variant === 'solid'
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

      background: ${variant === 'solid'
        ? theme.colors.purple.dark
        : theme.colors.bases.hover};
    }

    &:active {
      color: ${variant === 'solid'
        ? theme.colors.bases.white
        : theme.colors.bases.subtitle};

      background: ${variant === 'solid'
        ? theme.colors.purple.dark
        : theme.colors.bases.hover};
    }
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, color, variant, fontWeigth }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.75rem 0.5rem;
    width: 8.25rem;
    height: 2.875rem;
    border-radius: 6px;
    font-weight: ${fontWeigth === 'regular' ? 400 : 700};
    font-size: 0.875rem;
    line-height: 1.375rem;

    text-transform: uppercase;
    border: none;

    transition: background 0.5s;

    svg {
      font-size: 1.375rem;
    }

    ${!!color && containerVariant[color](theme, variant)}
  `}
`;
