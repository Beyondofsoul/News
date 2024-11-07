/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styles from './styles.module.scss';

type categoryParams = {
  categories: any;
  setSelectedCategory: any;
  selectedCategory: any;
};

const Categories: React.FC<categoryParams> = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}) => {
  return (
    <div className={styles.categories}>
      <button
        className={selectedCategory ? styles.categories__active : styles.categories__item}
        onClick={() => setSelectedCategory(null)}
      >
        All
      </button>
      {categories.map((category: any) => {
        return (
          <button
            key={category}
            className={
              selectedCategory === category ? styles.categories__active : styles.categories__item
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
