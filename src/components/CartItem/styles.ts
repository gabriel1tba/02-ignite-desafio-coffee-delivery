import styled from 'styled-components';

import { Wrapper as QuantitySelectorWrapper } from '../QuantitySelector/styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;

  width: 23rem;
  height: 5rem;

  background: ${({ theme }) => theme.colors.bases.card};

  img {
    width: 4rem;
    height: 4rem;
  }

  > p {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.313rem;
    color: ${({ theme }) => theme.colors.bases.text};
  }
`;

export const ManageItem = styled.div`
  margin-right: 1.25rem;
  > p {
    margin-bottom: 0.5rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.313rem;

    color: ${({ theme }) => theme.colors.bases.subtitle};
  }
  > div {
    display: flex;
    gap: 0.5rem;

    ${QuantitySelectorWrapper} {
      height: 2rem;
    }
  }
`;
