import React, { useState } from 'react';
import cl from './Categories.module.scss';
import cn from 'classnames';

const categories = ['Все', 'Криптовалюты', 'Наличные', 'Банки RUB', 'Банки UAH'];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
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
            onClick={() => setActiveCategory(category)}>
            {category}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
