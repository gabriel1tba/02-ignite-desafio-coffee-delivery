import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  > main {
    height: calc(100vh - 6.5rem);
  }
`;
