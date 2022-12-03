import styled from 'styled-components';

export const Wrapper = styled.section``;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1.5rem;
  width: 28rem;
  background: ${({ theme }) => theme.colors.bases.card};
  border-radius: 6px 44px;

  > button {
    width: 100%;
  }
`;

export const ProductPrices = styled.div``;

export const Divider = styled.span`
  border-bottom: 1px solid ${({ theme }) => theme.colors.bases.button};
  width: 100%;
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.125rem;
      color: ${({ theme }) => theme.colors.bases.text};
    }

    strong {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.625rem;
      color: ${({ theme }) => theme.colors.bases.subtitle};
    }
  }
`;
