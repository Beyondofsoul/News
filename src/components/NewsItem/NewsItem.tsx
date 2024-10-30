/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styles from './styles.module.scss';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';

const NewsItem: React.FC = ({ item }) => {
  return (
    <li className={styles.item}>
      <div className={styles.item__wrapper} style={{ backgroundImage: `url(${item.image})` }}></div>
      <div className={styles.item__info}>
        <h3 className={styles.item__title}>{item.title}</h3>
        <p className={styles.item__extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
