import { FC } from 'react';
import {
  AddButtonContainer,
  CustomSelect,
  SearchButton,
  SearchForm,
  SearchInput,
  SearchWrapper,
  SelectLabel,
  TableToolsContainer,
} from './styles';
import { Plus } from 'lucide-react';

const TableToolsBar: FC = () => {
  return (
    <TableToolsContainer>
      <SearchForm>
        <SearchWrapper>
          <SelectLabel htmlFor="search-type">
            Buscar por:{' '}
            <CustomSelect id="search-type">
              <option value="name">Nome</option>
              <option value="id">ID</option>
            </CustomSelect>
          </SelectLabel>

          <SearchInput type="text" placeholder="Nome ou ID da peça" />
        </SearchWrapper>

        <SearchButton>Buscar</SearchButton>
      </SearchForm>

      <AddButtonContainer>
        <Plus />
        Cadastrar peça
      </AddButtonContainer>
    </TableToolsContainer>
  );
};

export default TableToolsBar;
