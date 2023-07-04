import Link from 'next/link';
import styled from 'styled-components';

export const Card = styled(Link)`
  text-decoration: none;
  max-width: 14.375rem;
  min-width: 14.375rem;
  height: 9.375rem;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1.5rem 2rem;
  color: ${({ theme }) => theme.colors.platinum[700]};
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.5);
  transition: 150ms;

  &:hover {
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 1);
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    padding: 1rem 2rem;
    max-width: 17.1875rem;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CardIconWrapper = styled.div`
  min-width: 2.2rem;
  min-height: 2.2rem;
  color: ${({ theme }) => theme.colors.black[50]};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.platinum[700]};
  border-radius: 50%;

  svg {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    min-width: 3rem;
    min-height: 3rem;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const CardTitle = styled.h3`
  font-size: 0.95rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 1.2rem;
  }
`;

export const CardDescription = styled.p`
  width: 100%;
  font-size: 0.75rem;
  margin-top: 1rem;
  line-height: 0.8rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    line-height: 0.95rem;
  }
`;
