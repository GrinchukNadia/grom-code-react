import React, {useState} from 'react';
import './counter.scss';

const Counter = () => {
  const [count, onChange] = useState(0)

  return (
    <div className='counter'>
      <button
        data-action='decrease'
        className='counter__button'
        onClick={() => onChange(count - 1)}
      >
        -
      </button>
      <span className='counter__value' onClick={() => onChange(0)}>
        {count}
      </span>
      <button
        data-action='increase'
        className='counter__button'
        onClick={() => onChange(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
