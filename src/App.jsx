import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Converter from './components/organisms/Converter/Converter';

import directions from '../public/db/directions.json';
import '../src/index.css';
import { setDirections } from './store/directions/directionsSlice';
import { setConvert } from './store/convert/convertSlice';
import filter from '../public/db/filter.json';
import { setFilter } from './store/filter/filterSlice';
// selectedCategory: str
//     selectedDirection: str
//     activeDirections: array directions
function App() {
  const dispatch = useDispatch();

  const initConvertFrom = {
    selectedCategory: 'Все',
    selectedDirection: directions[0],
    activeDirections: directions,
  };
  const initActiveDirectionsTo = filter.find(
    (list) => list.from.name == initConvertFrom.selectedDirection.name,
  ).to;
  const initConvertTo = {
    selectedCategory: 'Все',
    // selectedDirection: initActiveDirectionsTo[0],
    // activeDirections: initActiveDirectionsTo,
  };

  useEffect(() => {
    dispatch(setDirections(directions));
    dispatch(setFilter(filter));
    dispatch(
      setConvert({
        from: { ...initConvertFrom },
        to: { ...initConvertTo },
      }),
    );
  }, []);

  return (
    <div className="App">
      <Converter />
    </div>
  );
}

export default App;
