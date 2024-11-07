import React from 'react';
import styles from './styles.module.scss';

import Image from '../Image.tsx/Image';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import withSkeleton from '../../helpers/hocs/withSkeleton';

type NewsItem = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
};

const NewsBanner: React.FC<NewsItem> = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={item.image} />
      <h3 className={styles.banner__title}>{item.title}</h3>
      <p className={styles.banner__extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);

export default NewsBannerWithSkeleton;
