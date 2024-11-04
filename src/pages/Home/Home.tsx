import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';

const Home: React.FC = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews();
        setNews(response.news);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNews();
  }, []);
  return (
    <div>
      <main className={styles.main}>
        {news.length > 0 && !isLoading ? (
          <NewsBanner item={news[0]} />
        ) : (
          <Skeleton count={1} type={'banner'} />
        )}
      </main>

      {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type={'item'} />}
    </div>
  );
};

export default Home;
