import { Dispatch, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '@/services/api';

import { CarPartsStoreTypes } from '@/types';

interface Redux {
  getState?: any;
  dispatch: Dispatch<any>;
}
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

export const deleteCarPart = createAsyncThunk(
  'carParts/deleteCarPart',
  async (carPartId: number, { dispatch }: Redux) => {
    await api.delete(`/car-parts/${carPartId}`);

    dispatch(fetchCarParts({}));
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
