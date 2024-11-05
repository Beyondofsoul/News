import React from 'react';
import styles from './styles.module.scss';

type PaginationParams = {
  totalPages: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClickPage: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleNextPage: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handlePrevPage: any;
  currentPage: number;
};

const Pagination: React.FC<PaginationParams> = ({
  totalPages,
  handleClickPage,
  handlePrevPage,
  handleNextPage,
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.pagination__arrow}
        onClick={handlePrevPage}
        disabled={currentPage <= 1}
      >
        {'<'}
      </button>
      <div className={styles.pagination__list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => {
                handleClickPage(index + 1);
              }}
              disabled={index + 1 === currentPage}
              key={index}
              className={styles.pagination__pageNumber}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        className={styles.pagination__arrow}
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
