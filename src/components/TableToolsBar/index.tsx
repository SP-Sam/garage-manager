import { FC } from 'react';
import {
  AddButtonContainer,
  CustomSelect,
  ResetButton,
  SearchButton,
  SearchForm,
  SearchInput,
  SearchWrapper,
  SelectLabel,
  TableToolsContainer,
} from './styles';
import { Plus, RotateCcw } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { SearchFormTypes } from '@/types';
import { SearchTypesEnum } from '@/enums';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { fetchCarParts, searchCarParts } from '@/store/carParts';

const TableToolsBar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SearchFormTypes>({
    defaultValues: { type: 'id', searchTerm: '' },
    mode: 'onSubmit',
  });

  const onSearch = (formData: SearchFormTypes) => {
    dispatch(searchCarParts(formData));
  };

  const onReset = () => {
    dispatch(fetchCarParts({}));
    reset();
  };

  return (
    <TableToolsContainer>
      <SearchForm onSubmit={handleSubmit(onSearch)}>
        <SearchWrapper>
          <Controller
            name="type"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectLabel htmlFor="search-type">
                Buscar por:{' '}
                <CustomSelect
                  id="search-type"
                  value={value}
                  onChange={onChange}
                >
                  <option value="id">{SearchTypesEnum.id}</option>
                  <option value="name">{SearchTypesEnum.name}</option>
                </CustomSelect>
              </SelectLabel>
            )}
          />

          <Controller
            name="searchTerm"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SearchInput
                type="text"
                placeholder="Nome ou ID da peça"
                {...register('searchTerm')}
                value={value}
                onChange={onChange}
              />
            )}
          />
        </SearchWrapper>

        <SearchButton type="submit">Buscar</SearchButton>
      </SearchForm>

      <ResetButton type="button" onClick={onReset}>
        <RotateCcw />
      </ResetButton>

      <AddButtonContainer>
        <Plus />
        Cadastrar peça
      </AddButtonContainer>
    </TableToolsContainer>
  );
};

export default TableToolsBar;
