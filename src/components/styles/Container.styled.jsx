import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.desktop};
  padding: 0 8rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 0 4rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 2rem;
  }
`;