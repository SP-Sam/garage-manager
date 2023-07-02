import Link from 'next/link';
import styled from 'styled-components';

export const MainContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    270deg,
    ${({ theme }) => theme.colors.platinum[800]} 0%,
    ${({ theme }) => theme.colors.alabaster[600]} 100%
  );
  gap: 1rem;
`;

export const FlexContainer = styled.div<{
  $direction?: string;
  $justify?: string;
  $items?: string;
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $items }) => $items || 'flex-start'};
`;

export const GreetingText = styled.h1`
  max-width: 20rem;
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[100]};
  padding: 0 2rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 1.3rem;
    padding: 0;
  }
`;
export const Form = styled.form`
  width: 80%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.black[50]};
  font-size: 0.8rem;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.black[100]};
  outline: none;
  width: 100%;
  padding: 0.6rem;
  color: ${({ theme }) => theme.colors.black[50]};
  border-radius: 0.3rem;
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.black[50]};
    opacity: 0.65;
  }
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.black[100]};
  color: ${({ theme }) => theme.colors.black[100]};
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.3rem;
  background-color: transparent;
  transition: 150ms;

  &:hover,
  &:active {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.black[50]};
    color: ${({ theme }) => theme.colors.platinum[700]};
  }
`;

export const RegisterLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.black[50]};

  &:hover {
    text-decoration: underline;
  }
`;
