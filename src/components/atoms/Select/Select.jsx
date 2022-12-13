import React, { useState } from 'react';
import cn from 'classnames';

import Arrow from '../../../assets/arrow.svg';

import cl from './Select.module.scss';

const Select = ({ list }) => {
  const [isSelectActive, setIsSelectActive] = useState(false);
  return (
    <>
      <div className={cl.select}>
        <div className={cl.select__input}>
          <input type="text" placeholder="Введите значение..." />
          <div className={cl.select__btn} onClick={() => setIsSelectActive(!isSelectActive)}>
            <p>BTC</p>
            <div
              className={cn(cl.select__btn__arrow, {
                [cl.select__btn__arrow__active]: isSelectActive,
              })}>
              <Arrow />
            </div>
          </div>
        </div>
        {isSelectActive && (
          <div className={cl.select__list}>
            {list.map((dir) => (
              <div className={cl.select__list__item} key={dir.name}>
                {dir.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
  D;
};

export default Select;
