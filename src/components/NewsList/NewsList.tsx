/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styles from './styles.module.scss';
import NewsItem from '../NewsItem/NewsItem';

type NewsListItem = {
  news: any;
};

const NewsList: React.FC<NewsListItem> = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item: any) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default NewsList;
