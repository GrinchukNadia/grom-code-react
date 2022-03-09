const url = 'https://61eaff907ec58900177cdb49.mockapi.io/api/v1/tasks';

export const createTask = (taskData) => 
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  });


export const fetchTasksList = () => 
  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((tasksList) => {
      return tasksList.map(({ _id, ...task }) => ({
        id: _id,
        ...task,
      }));
    });


export const updateTask = (taskId, taskData) => 
  fetch(`${url}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to update task');
    }
  });


export const deleteTask = (id) => 
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });

