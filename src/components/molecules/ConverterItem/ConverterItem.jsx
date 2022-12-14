import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../../atoms/Categories/Categories';
import Select from '../../atoms/Select/Select';

import cl from './ConverterItem.module.scss';
import {
  selectDirectionsByCategory,
  setConvertFrom,
  setConvertTo,
} from '../../../store/convert/convertSlice';

const ConverterItem = ({ title, type }) => {
  const { selectedCategory, selectedDirection, activeDirections } = useSelector(
    (state) => state.convert[type],
  );

  console.log(type, selectedCategory, selectedDirection, activeDirections);

  const filter = useSelector((state) => state.filter);

  const selectDirections = useCallback(
    (state) => selectDirectionsByCategory(state, selectedCategory, type, filter),
    [filter, selectedCategory],
  );

  const directions = useSelector(selectDirections);

  const dispatch = useDispatch();

  useEffect(() => {
    if (type == 'from') {
      dispatch(setConvertFrom({ selectedDirection: directions[0] }));
    } else if (type == 'to') {
      dispatch(setConvertTo({ selectedDirection: directions[0] }));
    }
  }, [selectedCategory]);

  return (
    <div className={cl.converter__item}>
      <p className={cl.converter__item__title}>{title}</p>
      <Categories type={type} />
      <Select list={directions} selectedDirection={selectedDirection} type={type} />
    </div>
  );
};

export default ConverterItem;
