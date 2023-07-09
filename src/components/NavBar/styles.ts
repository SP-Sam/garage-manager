import Link from 'next/link';
import styled from 'styled-components';

export const NavBarWrapper = styled.header`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.black[50]};
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    height: 5rem;
    padding: 0 2rem;
  }
`;

export const NavBarToggle = styled.div`
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

  &.active {
    background-color: ${({ theme }) => theme.colors.platinum[700]};
    color: ${({ theme }) => theme.colors.black[50]};
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    height: 3rem;
    width: 3rem;
  }
`;

export const MenuItemsContainer = styled.ul`
  position: absolute;
  width: 13.75rem;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.platinum[100]};
  top: 3.6rem;
  left: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.alabaster[700]};
  border-radius: 0.5rem;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    top: 4.5rem;
    left: 2rem;
  }
`;

export const MenuListItem = styled.li`
  list-style: none;
`;

export const MenuItemLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.platinum[600]};
  transition: 150ms;
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.platinum[50]};

  &:hover {
    color: ${({ theme }) => theme.colors.platinum[50]};
    background-color: ${({ theme }) => theme.colors.platinum[400]};
  }

  &.active {
    color: ${({ theme }) => theme.colors.platinum[50]};
    background-color: ${({ theme }) => theme.colors.platinum[600]};
  }
`;

export const PageTitle = styled.h1`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.platinum[800]};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 1.3rem;
  }
`;
