import React, { useState } from 'react';
import cn from 'classnames';

import Arrow from '../../../assets/arrow.svg';

import cl from './Select.module.scss';
import useComponentVisible from '../../../hooks/useComponentVisible';
import { useDispatch, useSelector } from 'react-redux';
import { setConvertFrom, setConvertTo } from '../../../store/convert/convertSlice';

const Select = ({ list, selectedDirection, type }) => {
  const {
    ref,
    isActive: isSelectActive,
    setIsActive: setIsSelectActive,
  } = useComponentVisible(false);

  const dispatch = useDispatch();

  return (
    <>
      <div className={cl.select}>
        <div className={cl.select__input}>
          <input type="text" placeholder="Введите значение..." />
          <div className={cl.select__btn} onClick={() => setIsSelectActive((prev) => !prev)}>
            <p>{selectedDirection?.code}</p>
            <div
              className={cn(cl.select__btn__arrow, {
                [cl.select__btn__arrow__active]: isSelectActive,
              })}>
              <Arrow />
            </div>
          </div>
        </div>
        {isSelectActive && (
          <div ref={ref} className={cl.select__list}>
            {list.length ? (
              list.map((dir) => (
                <div
                  className={cl.select__list__item}
                  key={dir.name}
                  onClick={() => {
                    if (type == 'from') {
                      dispatch(setConvertFrom({ selectedDirection: dir }));
                    } else if (type == 'to') dispatch(setConvertTo({ selectedDirection: dir }));
                  }}>
                  {dir.name}
                </div>
              ))
            ) : (
              <div className={cl.select__list__item}>Нет результатов</div>
            )}
          </div>
        )}
      </div>
    </>
  );
  D;
};

export default Select;
