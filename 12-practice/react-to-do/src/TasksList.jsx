import React from 'react';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';
import { createTask, fetchTasksList, updateTask, deleteTask } from './TasksGateway.jsx';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then((tasksList) => {
      this.setState({ tasks: tasksList });
    });
  };

  onCreate = (text) => {
    const newTask = {
      text,
      done: false,
    };

    return createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = (id) => {
    const { done, text } = this.state.tasks.find(
      (task) => task.id === id
    );
    const updatedTasks = {
      text,
      done: !done,
    };
    updateTask(id, updatedTasks).then(() => this.fetchTasks());
  };

  handleDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const tasks = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <main className='todo-list'>
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className='list'>
          {tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.handleDelete}
              onChange={this.handleTaskStatusChange}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
