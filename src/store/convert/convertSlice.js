import { createSlice } from '@reduxjs/toolkit';

const convertSlice = createSlice({
  name: 'convert',
  initialState: {
    from: {
      selectedCategory: 'Все',
      selectedDirection: { code: '', name: '' },
      activeDirections: [],
    },
    to: {
      selectedCategory: 'Все',
      selectedDirection: { code: '', name: '' },
    },
  },
  reducers: {
    setConvert(state, action) {
      return { ...state, ...action.payload };
    },
    setConvertFrom(state, action) {
      return { ...state, from: { ...state.from, ...action.payload } };
    },

    setConvertTo(state, action) {
      return { ...state, to: { ...state.to, ...action.payload } };
    },
  },
});

export const selectDirectionsByCategory = (state, category, type, filter) => {
  let toDirections;
  if (filter.length)
    toDirections = filter.find(
      (list) => list.from.name == state.convert.from.selectedDirection?.name,
    )?.to;

  switch (category) {
    case 'Все': {
      if (type == 'from') return state.convert[type].activeDirections;
      else if (type == 'to' && filter.length) {
        return toDirections;
      }
    }
    case 'Криптовалюты': {
      if (type == 'from')
        return state.convert[type].activeDirections.filter((dir) =>
          ['BTC', 'ETH', 'USDTTRC'].includes(dir.code),
        );
      else if (type == 'to' && filter.length && toDirections)
        return toDirections.filter((dir) => ['BTC', 'ETH', 'USDTTRC'].includes(dir.code));
    }
    case 'Наличные': {
      if (type == 'from')
        return state.convert[type].activeDirections.filter((dir) =>
          ['CASHRUB', 'CASHUSD'].includes(dir.code),
        );
      else if (type == 'to' && filter.length && toDirections)
        return toDirections.filter((dir) => ['CASHRUB', 'CASHUSD'].includes(dir.code));
    }
    case 'Банки RUB': {
      if (type == 'from')
        return state.convert[type].activeDirections.filter((dir) =>
          ['ACRUB', 'SBERRUB', 'TCSBRUB'].includes(dir.code),
        );
      else if (type == 'to' && filter.length && toDirections)
        return toDirections.filter((dir) => ['ACRUB', 'SBERRUB', 'TCSBRUB'].includes(dir.code));
    }

    case 'Банки ': {
      return [];
    }

    default: {
      return state.convert[type];
    }
  }
};

export const { setConvert, setConvertFrom, setConvertTo } = convertSlice.actions;
export default convertSlice.reducer;
