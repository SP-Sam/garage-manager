import styled from 'styled-components';

export const TableToolsContainer = styled.div`
  width: 90%;
  max-width: 64rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
  }
`;

// ** Form
export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    height: 3.125rem;
    flex-direction: row;
    align-items: flex-end;
    width: auto;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  height: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row;
    align-items: flex-end;
    gap: 1rem;
  }
`;

export const SelectLabel = styled.label`
  color: ${({ theme }) => theme.colors.platinum[50]};
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    max-width: 5rem;
  }
`;

export const CustomSelect = styled.select`
  width: 100%;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.platinum[800]};
  background-color: ${({ theme }) => theme.colors.platinum[50]};
  border-radius: 0.3rem;
  height: 2rem;
  padding: 0 0.5rem;

  appearance: none;
  -moz-appearance: none;

  background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${({ theme }) => theme.colors.platinum[700]} 50%
    ),
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.platinum[700]} 50%,
      transparent 50%
    );
  background-position: calc(100% - 20px) calc(1em), calc(100% - 15px) calc(1em);

  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;

  &:focus {
    background-image: linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%);
    background-position: calc(100% - 15px) 0.95em, calc(100% - 20px) 0.95em;
    background-size: 5px 5px, 5px 5px;
    background-repeat: no-repeat;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  color: ${({ theme }) => theme.colors.platinum[800]};
  padding: 0.5rem;
  border: none;
  border-radius: 0.3rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.platinum[800]};
    opacity: 0.5;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    /* min-width: 12.5rem; */
    height: 2rem;
  }
`;

export const SearchButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.platinum[200]};
  padding: 0.5rem 1rem;
  height: 2rem;
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.colors.platinum[50]};
  background-color: ${({ theme }) => theme.colors.alabaster[600]};
  font-weight: bold;
  transition: 150ms;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.alabaster[700]};
  }
`;

export const ResetButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.platinum[200]};
  color: ${({ theme }) => theme.colors.platinum[50]};
  background-color: ${({ theme }) => theme.colors.platinum[700]};
  border-radius: 0.3rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  padding: 0.8rem;
  height: 2rem;
  width: 3.25rem;
  transition: 150ms;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.alabaster[600]};
  }
`;

// ** Add Button
export const AddButtonContainer = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  border-radius: 0.3rem;
  padding: 0.2rem 0.6rem 0.2rem 0.4rem;
  color: ${({ theme }) => theme.colors.platinum[700]};
  background-color: ${({ theme }) => theme.colors.platinum[100]};
  transition: 150ms;

  &:hover {
    color: ${({ theme }) => theme.colors.platinum[800]};

    background-color: ${({ theme }) => theme.colors.platinum[200]};
    cursor: pointer;
  }
`;
