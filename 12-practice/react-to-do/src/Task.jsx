import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TasksList = ({ text, done, id, onChange, onDelete }) => {
  const listItemDoneClasses = classNames('list-item', {
    'list-item_done': done,
  });
  return (
    <li className={listItemDoneClasses}>
      <input
        defaultChecked={done}
        type='checkbox'
        className='list-item__checkbox'
        onChange={() => onChange(id)}
      />
      <span className='list-item__text'>{text}</span>
      <button
        className='list-item__delete-btn'
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

TasksList.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default TasksList;
