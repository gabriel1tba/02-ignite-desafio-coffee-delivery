import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    height: 2.375rem;
    width: 4.5rem;
    border-radius: 6px;
    background: ${theme.colors.bases.button};

    span {
      cursor: default;
      color: ${theme.colors.bases.title};
      font-weight: 400;
      font-size: 16px;
    }

    svg {
      cursor: pointer;
      color: ${theme.colors.purple.medium};
      transition: color 0.2s;

      &:hover {
        color: ${theme.colors.purple.dark};
      }
    }
  `}
`;
