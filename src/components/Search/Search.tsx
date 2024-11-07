/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styles from './styles.module.scss';

type categoryParams = {
  keywords: any;
  setKeywords: any;
};

const Search: React.FC<categoryParams> = ({ keywords, setKeywords }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={keywords}
        className={styles.search__input}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Введите"
      />
    </div>
  );
};

export default Search;
