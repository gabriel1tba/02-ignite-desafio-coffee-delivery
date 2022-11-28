import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 16rem;
    height: 19.375rem;
    line-height: 0.813rem;
    background: ${theme.colors.bases.card};
    border-radius: 0.188rem 2.25rem;
    padding: 0 1.25rem;

    img {
      width: 7rem;
      height: 7rem;
      margin-top: -1.25rem;
    }

    h1 {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${theme.colors.bases.subtitle};
      margin-bottom: 0.5rem;
    }

    > p {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.125rem;
      color: ${theme.colors.bases.label};
    }
  `}
`;

export const WrapperLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0.75rem 0 1.25rem 0;

  span {
    display: flex;
    padding: 0.25rem 0.5rem;
    height: 1.313rem;
    background: ${({ theme }) => theme.colors.yellow.light};
    border-radius: 6.25rem;
    font-weight: 700;
    font-size: 0.625rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.yellow.dark};
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  p {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.313rem;
    color: ${({ theme }) => theme.colors.bases.text};

    margin-right: 1.375rem;
  }

  > button {
    margin-left: 0.5rem;
  }
`;
