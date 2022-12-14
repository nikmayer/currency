import { createSlice } from '@reduxjs/toolkit';

const fromConvertSlice = createSlice({
  name: 'fromConvert',
  initialState: {
    selectedCategory: 'Все',
    selectedDirection: '',
    activeDirections: [],
  },
  reducers: {
    setFromConvert(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const selectDirectionsByCategory = (state, category) => {
  switch (category) {
    case 'Все': {
      return state.activeDirections;
    }
    case 'Криптовалюты': {
      return state.activeDirections.filter((dir) => ['BTC', 'ETH', 'USDTTRC'].includes(dir.code));
    }
  }
};

// ['Все', 'Криптовалюты', 'Наличные', 'Банки RUB', 'Банки UAH']
// Криптовалюты: BTC, ETH, USDTTRC
// Банки: ACRUB, SBERRUB, TCSBRUB
// Наличные: CASHUSD, CASHRUB

export const { setFromConvert } = fromConvertSlice.actions;
export default fromConvertSlice.reducer;
