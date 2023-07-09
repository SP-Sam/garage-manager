import styled from 'styled-components';

export const CarPartsContainer = styled.main`
  min-height: calc(100vh - 4rem - 3.125rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    270deg,
    ${({ theme }) => theme.colors.platinum[800]} 0%,
    ${({ theme }) => theme.colors.alabaster[600]} 100%
  );

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    min-height: calc(100vh - 5rem - 3.125rem);
  }
`;

export const CarPartListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  max-width: 64rem;
  width: 90%;
  height: calc(100vh - 20rem);
  margin-top: 1rem;
  overflow-y: scroll;
  padding: 0 0.5rem 1rem 0;
`;

export const NoPartsText = styled.h2`
  color: ${({ theme }) => theme.colors.platinum[100]};
  font-size: 1.1rem;
  max-width: 64rem;
  margin-top: 2rem;
  text-align: center;
  padding: 0 1rem;
`;
