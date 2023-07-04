import styled from 'styled-components';

export const MainContainer = styled.main`
  min-height: calc(100vh - 4rem - 3.125rem);
  display: flex;
  justify-content: center;
  align-items: flex-start;

  background: linear-gradient(
    270deg,
    ${({ theme }) => theme.colors.platinum[800]} 0%,
    ${({ theme }) => theme.colors.alabaster[600]} 100%
  );

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    min-height: calc(100vh - 5rem - 3.125rem);
  }
`;

export const GridContainer = styled.section`
  display: grid;
  place-items: center;
  gap: 1rem;
  padding: 3rem 0;
  max-width: 29.75rem;

  @media screen and (min-width: 550px) {
    grid-template-columns: auto auto;
    max-height: 29.75rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    max-width: 35.375rem;
  }

  @media screen and (min-width: 1250px) {
    grid-template-columns: auto auto auto auto;
    max-width: 71.75rem;
  }
`;
