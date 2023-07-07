import { FC } from 'react';
import {
  AddButtonContainer,
  AddButtonWrapper,
  SearchWrapper,
  TableToolsContainer,
} from './styles';
import { Plus } from 'lucide-react';

const TableToolsBar: FC = () => {
  return (
    <TableToolsContainer>
      <SearchWrapper>
        <form>
          <select>
            <option value="name">nome</option>
            <option value="id">id</option>
          </select>

          <input type="text" />
        </form>
      </SearchWrapper>

      <AddButtonWrapper>
        <AddButtonContainer>
          <Plus />
        </AddButtonContainer>
      </AddButtonWrapper>
    </TableToolsContainer>
  );
};

export default TableToolsBar;
