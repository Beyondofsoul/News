import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';

const Home: React.FC = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleClickPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const fetchNews = async (currentPage: number) => {
    try {
      setIsLoading(true);
      const response = await getNews(currentPage, pageSize);
      setNews(response.news);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);
  return (
    <div>
      <main className={styles.main}>
        {news.length > 0 && !isLoading ? (
          <NewsBanner item={news[0]} />
        ) : (
          <Skeleton count={1} type={'banner'} />
        )}
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handleClickPage={handleClickPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </main>

      {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type={'item'} />}
    </div>
  );
};

export default Home;
