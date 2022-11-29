import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  padding-bottom: 5rem;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const BannerInfos = styled.div`
  ${({ theme }) => css`
    max-width: 36.75rem;
    width: 100%;

    h1 {
      font-weight: 800;
      font-size: 3rem;
      line-height: 3.875rem;
      color: ${theme.colors.bases.title};
      margin-bottom: 1rem;
    }

    > p {
      font-weight: 400;
      font-size: 20px;
      line-height: 1.625rem;
      color: ${theme.colors.bases.subtitle};
      font-stretch: 100;
    }

    > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 1.25rem;
      margin-top: 4.125rem;
    }
  `}
`;

interface BannerItemProps {
  backgroundColor: string;
}

export const BannerItem = styled.div<BannerItemProps>`
  display: flex;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;

    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 50%;
    margin-right: 0.5rem;

    svg {
      flex: none;
      fill: white;
    }
  }
`;

export const CatalogItemsList = styled.section`
  margin-top: 8rem;

  > h2 {
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.625rem;
    margin-bottom: 3.375rem;

    color: ${({ theme }) => theme.colors.bases.title};
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem 1.5rem;
  }
`;
