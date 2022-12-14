import { createSlice } from '@reduxjs/toolkit';

const toConvertSlice = createSlice({
  name: 'toConvert',
  initialState: {
    selectedCategory: 'Все',
    selectedDirection: '',
    activeDirections: [],
  },
  reducers: {
    setToConvert(state, action) {
      return { ...action.payload };
    },
  },
});

export const { setTomConvert } = toConvertSlice.actions;
export default toConvertSlice.reducer;
