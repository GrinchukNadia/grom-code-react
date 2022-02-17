import React from 'react';
import './filter.scss';

const Filter = ({count, onChange, filterText}) => {
    return (
      <div className='filter'>
        <span className='filter__count'>{count}</span>
        <input
          name='filter'
          type='text'
          className='filter__input'
          onChange={onChange}
          value={filterText}
        />
      </div>
    );
}

export default Filter;
