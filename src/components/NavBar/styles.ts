import styled from 'styled-components';

export const NavBarWrapper = styled.header`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.black[50]};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    height: 5rem;
    padding: 0 2rem;
  }
`;

export const NavBarItemsWrapper = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.platinum[800]};
  transition: 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.platinum[700]};
    color: ${({ theme }) => theme.colors.black[50]};
    cursor: pointer;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    height: 3rem;
    width: 3rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.platinum[800]};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 1.3rem;
  }
`;
