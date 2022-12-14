import React from 'react';
import ConverterItem from '../../molecules/ConverterItem/ConverterItem';
import ArrowSwap from '../../../assets/arrows-swap.svg';

import cl from './Converter.module.scss';

const Converter = () => {
  return (
    <div className={cl.converter}>
      <ConverterItem title="Отдаёте" type="from" />
      <div className={cl.converter__item__wrapper}>
        <div className={cl.converter__arrows}>
          <ArrowSwap />
        </div>

        <ConverterItem title="Получаете" type="to" />
      </div>
    </div>
  );
};

export default Converter;
