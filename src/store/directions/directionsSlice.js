import { createSlice } from '@reduxjs/toolkit';

const directionsSlice = createSlice({
  name: 'directions',
  initialState: [],
  reducers: {
    setDirections(state, action) {
      return [...action.payload];
    },
  },
});

export const { setDirections } = directionsSlice.actions;
export default directionsSlice.reducer;
