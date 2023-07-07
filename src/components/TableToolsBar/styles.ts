import styled from 'styled-components';

export const TableToolsContainer = styled.div`
  width: 90%;
  max-width: 64rem;
  height: 4rem;
  display: flex;
  gap: 0.5rem;
`;

export const SearchWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  background-color: #ccc;
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const AddButtonContainer = styled.div`
  min-width: 2.1875rem;
  min-height: 2.1875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.platinum[100]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.platinum[100]};
    color: ${({ theme }) => theme.colors.platinum[700]};
  }
`;
