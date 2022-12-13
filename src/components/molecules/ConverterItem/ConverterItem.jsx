import React from 'react';
import Categories from '../../atoms/Categories/Categories';
import Select from '../../atoms/Select/Select';

import listFrom from '../../../../public/db/directions.json';

import cl from './ConverterItem.module.scss';

const ConverterItem = ({ title }) => {
  return (
    <div className={cl.converter__item}>
      <p className={cl.converter__item__title}>{title}</p>
      <Categories />
      <Select list={listFrom} />
    </div>
  );
};

export default ConverterItem;
