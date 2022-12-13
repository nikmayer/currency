import React, { useMemo, useState } from 'react';
// import Categories from '../../atoms/Categories/Categories';
// import Select from '../../atoms/Select/Select';

import ConverterItem from '../../molecules/ConverterItem/ConverterItem';
import ArrowSwap from '../../../assets/arrows-swap.svg';

import cl from './Converter.module.scss';

import listFrom from '../../../../public/db/directions.json';
import listsTo from '../../../../public/db/filter.json';

const Converter = () => {
  // const [listTo, setListTo] = useState([]);

  const { to: listTo } = listsTo.filter((list) => list.from.name == 'Bitcoin BTC')[0];

  console.log(listTo);

  return (
    <div className={cl.converter}>
      <ConverterItem title="Отдаёте" />
      <div className={cl.converter__item__wrapper}>
        <div className={cl.converter__arrows}>
          <ArrowSwap />
        </div>

        <ConverterItem title="Получаете" />
      </div>

      {/* <Select list={listTo} /> */}
    </div>
  );
};

export default Converter;
