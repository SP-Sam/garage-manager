import { configureStore } from '@reduxjs/toolkit';
import carParts from './carParts';

export const store = configureStore({
  reducer: {
    carParts,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
