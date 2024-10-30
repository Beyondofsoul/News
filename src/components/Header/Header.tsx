import React from 'react';
import styles from './styles.module.scss';
import { formatDate } from '../../helpers/formateDate';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>News</h1>
      <p className={styles.header__date}>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
