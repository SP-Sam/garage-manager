import Link from 'next/link';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  height: 3.125rem;
  background-color: ${({ theme }) => theme.colors.black[50]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.black[800]};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 1rem;
  }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black[800]};
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
