import React from 'react';
import styles from './styles.module.scss';

type ImageItem = {
  image: string;
};

const Image: React.FC<ImageItem> = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.wrapper__image} /> : null}
    </div>
  );
};

export default Image;
