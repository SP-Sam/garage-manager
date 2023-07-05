import styled from 'styled-components';

export const PartCard = styled.div`
  min-height: 3.75rem;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.black[50]};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.platinum[700]};
  padding: 0 0.5rem;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.5);
  gap: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 1rem;
  }
`;

export const IconWrapper = styled.div`
  width: 10%;
  min-width: 1.9rem;
  max-width: 1.9rem;
  height: 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.platinum[500]};
  color: ${({ theme }) => theme.colors.platinum[50]};

  svg {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 2.3rem;
    height: 2.3rem;
    max-width: 2.3rem;

    svg {
      width: 1.375rem;
      height: 1.375rem;
    }
  }
`;

export const TitleWrapper = styled.div`
  width: 40%;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 1rem;
  }
`;

export const PriceWrapper = styled.div`
  font-size: 0.8rem;
  width: 40%;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 1rem;
  }
`;

export const ActionsWrapper = styled.div`
  width: 10%;
  min-width: 1.9rem;
  max-width: 1.9rem;
  height: 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 150ms;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.platinum[600]};
    color: ${({ theme }) => theme.colors.platinum[50]};
    cursor: pointer;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 2.3rem;
    max-width: 2.3rem;
    height: 2.3rem;

    svg {
      width: 1.375rem;
      height: 1.375rem;
    }
  }
`;
