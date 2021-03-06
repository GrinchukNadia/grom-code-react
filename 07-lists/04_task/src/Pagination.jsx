import React from 'react';
import './pagination.scss';

const Pagination = ({goPrev, goNext, currentPage, totalItems, itemsPerPage}) => {

  const isPrevPageAvailable = currentPage <= 1;
  const isNextPageAvailable = currentPage >= totalItems / itemsPerPage 

  return (
    <div className='pagination'>
      <button
        disabled={isPrevPageAvailable}
        onClick={() => goPrev()}
        className='btn'
      >
        {isPrevPageAvailable ? null : '←'}
      </button>
      <span className='pagination__page'>{currentPage}</span>
      <button
        disabled={isNextPageAvailable}
        onClick={() => goNext()}
        className='btn'
      >
        {isNextPageAvailable ? null : '→'}
      </button>
    </div>
  );
}

export default Pagination;