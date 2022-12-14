import React, { useMemo, useState } from 'react';
// import Categories from '../../atoms/Categories/Categories';
// import Select from '../../atoms/Select/Select';

import ConverterItem from '../../molecules/ConverterItem/ConverterItem';
import ArrowSwap from '../../../assets/arrows-swap.svg';

import cl from './Converter.module.scss';
import { useSelector } from 'react-redux';
import { selectConvertToByFilter } from '../../../store/convert/convertSlice';

const Converter = () => {
  // console.log(useSelector((state) => selectConvertToByFilter(state, filter)));
  return (
    <div className={cl.converter}>
      <ConverterItem title="Отдаёте" type="from" />
      <div className={cl.converter__item__wrapper}>
        <div className={cl.converter__arrows}>
          <ArrowSwap />
        </div>

        <ConverterItem title="Получаете" type="to" />
      </div>

      {/* <Select list={listTo} /> */}
    </div>
  );
};

export default Converter;
