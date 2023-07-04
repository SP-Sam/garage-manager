import styled from 'styled-components';

export const NavBarWrapper = styled.header`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const NavBarItemsWrapper = styled.div`
  height: 3.125rem;
  width: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.platinum[800]};
  transition: 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.platinum[800]};
    color: ${({ theme }) => theme.colors.black[50]};
    cursor: pointer;
  }
`;

export const PageTitle = styled.h1`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.platinum[800]};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 1.5rem;
  }
`;
