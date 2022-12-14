import React, { useEffect, useState } from 'react';
import cl from './Categories.module.scss';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setConvertFrom, setConvertTo } from '../../../store/convert/convertSlice';

const categories = ['Все', 'Криптовалюты', 'Наличные', 'Банки RUB', 'Банки UAH'];

const Categories = ({ type }) => {
  const filter = useSelector((state) => state.filter);
  const convert = useSelector((state) => state.convert);
  const activeCategory = convert[type].selectedCategory;

  const dispatch = useDispatch();

  // const { selectedCategory } = state.convert['to'];

  // return {
  //   selectedCategory: selectedCategory,
  //   selectedDirection: activeDirectionsTo[0],
  //   activeDirections: activeDirectionsTo,
  // };

  const changeCategory = (category, filter, convert) => {
    if (type === 'from') {
      dispatch(setConvertFrom({ selectedCategory: category }));
    } else if (type === 'to') dispatch(setConvertTo({ selectedCategory: category }));
  };

  return (
    <div className={cl.categories}>
      {categories.map((category) => {
        return (
          <div
            key={category}
            className={
              cn(cl['categories__category'], {
                [cl['categories__category__active']]: activeCategory == category,
              })
              // activeCategory == category
              //   ? cn(cl['categories__category__active'])
              //   : cl['categories__category']
            }
            onClick={() => changeCategory(category, filter, convert)}>
            {category}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
