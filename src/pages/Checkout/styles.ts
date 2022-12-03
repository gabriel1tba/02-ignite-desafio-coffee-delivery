import styled from 'styled-components';

export const Wrapper = styled.main`
  form {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;

    h1 {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.438rem;
      color: ${({ theme }) => theme.colors.bases.subtitle};
      margin-bottom: 1rem;
    }
  }
`;
