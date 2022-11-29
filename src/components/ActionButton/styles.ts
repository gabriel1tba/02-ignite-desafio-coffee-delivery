import styled, { css, DefaultTheme } from 'styled-components';

type Variant = 'solid' | 'common';

interface WrapperProps {
  variant: Variant;
  color: 'yellow' | 'purple';
  borderRadius: 'rounded' | 'common';
  size: 'small' | 'normal';
  pinContent: number;
}

const wrapperVariant = {
  yellow: (theme: DefaultTheme, variant: Variant) => css`
    background-color: ${variant === 'solid'
      ? theme.colors.yellow.dark
      : theme.colors.yellow.light};

    &::after {
      background-color: ${variant === 'solid'
        ? theme.colors.yellow.medium
        : theme.colors.yellow.dark};
    }

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

    &::after {
      background-color: ${variant === 'solid'
        ? theme.colors.purple.medium
        : theme.colors.purple.dark};
    }

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
  ${({ theme, color, variant, borderRadius, size, pinContent }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.75rem 0.5rem;
    height: ${size === 'normal' ? '2.875rem' : '2rem'};
    width: ${size === 'normal' ? '2.875rem' : '2rem'};
    border-radius: ${borderRadius === 'rounded' ? '50%' : '6px'};
    line-height: 1.375rem;

    text-transform: uppercase;
    border: none;

    transition: background-color 0.5s;

    ${pinContent > 0 &&
    css`
      position: relative;

      &::after {
        content: '${pinContent}';
        position: absolute;
        top: ${size === 'normal' ? '-0.5rem' : '-0.3rem'};
        right: ${size === 'normal' ? '-0.5rem' : '-0.3rem'};
        height: ${size === 'normal' ? '1.25rem' : '0.9rem'};
        width: ${size === 'normal' ? '1.25rem' : '0.9rem'};
        border-radius: 50%;
        color: ${theme.colors.bases.white};
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 1rem;
        font-size: ${size === 'normal' ? '0.75rem' : '0.5rem'};
      }
    `}

    svg {
      font-size: 1.375rem;
    }

    ${!!color && wrapperVariant[color](theme, variant)}
  `}
`;
