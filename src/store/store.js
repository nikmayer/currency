import { configureStore } from '@reduxjs/toolkit';
import convertSlice from './convert/convertSlice';
import directionsSlice from './directions/directionsSlice';
import filterSlice from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    directions: directionsSlice,
    filter: filterSlice,
    // fromConvert: fromConvertSlice,
    convert: convertSlice,
  },
});
