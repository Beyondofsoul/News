import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';

const Home: React.FC = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNews();
  }, []);
  return (
    <div>
      <main className={styles.main}>{news.length > 0 ? <NewsBanner item={news[0]} /> : null}</main>

      <NewsList news={news} />
    </div>
  );
};

export default Home;
