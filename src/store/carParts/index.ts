import { api } from '@/services/api';
import { CarPartsStoreTypes } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface DataParams {
  page?: number;
  perPage?: number;
  searchParams?: string;
}

const initialState: CarPartsStoreTypes = {
  data: [],
};

export const fetchCarParts = createAsyncThunk(
  'carParts/fetchCarParts',
  async ({ page = 1, perPage = 10 }: DataParams) => {
    const { data } = await api.get('/car-parts', { params: { page, perPage } });

    return data;
  }
);

export const carPartsSlice = createSlice({
  name: 'carParts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCarParts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default carPartsSlice.reducer;
