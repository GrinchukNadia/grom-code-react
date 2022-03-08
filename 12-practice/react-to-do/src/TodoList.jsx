import React from 'react';
import TasksList from './TasksList.jsx';

class TodoList extends React.Component {
  render() {
    return (
      <div id='root'>
        <h1 className='title'>Todo List</h1>
          <TasksList />
      </div>
    );
  }
}

export default TodoList;
