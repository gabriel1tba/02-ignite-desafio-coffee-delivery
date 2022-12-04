import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    h1 {
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.625rem;
      color: ${theme.colors.yellow.dark};
      margin-bottom: 0.25rem;
    }

    p {
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 1.625rem;
      color: ${theme.colors.bases.subtitle};
    }

    > div {
      display: flex;
      align-items: flex-end;
      height: 100%;
    }
  `}
`;

export const BorderGradient = styled.div`
  margin-top: 2.5rem;
  padding: 1px;
  max-width: 32rem;
  width: 100%;
  border-radius: 6px 36px;
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  margin-right: 6.375rem;
`;

export const BannerList = styled.div`
  display: flex;
  flex-direction: column;
  background: #fafafa;
  max-width: 32rem;
  width: 100%;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 6px 36px;
`;

interface BannerItemProps {
  backgroundColor: string;
}

export const BannerItem = styled.div<BannerItemProps>`
  ${({ theme, backgroundColor }) => css`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.313rem;

    color: ${theme.colors.bases.text};

    > span {
      max-width: 22.125rem;
      width: 100%;
    }

    div:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;

      background-color: ${backgroundColor};
      border-radius: 50%;
      margin-right: 0.75rem;

      svg {
        flex: none;
        fill: white;
      }
    }
  `}
`;
