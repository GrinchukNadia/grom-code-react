import React from 'react';

class CreateTaskInput extends React.Component {
  state = {
    inputValue: '',
  };

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  
  handleTaskCreate = () => {
    this.props.onCreate(this.state.inputValue)
    this.setState({inputValue: ''})
  }

  render() {
    return (
      <div className='create-task'>
        <input
          className='create-task__input'
          type='text'
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleTaskCreate} className='btn create-task__btn'>Create</button>
      </div>
    );
  }
}

export default CreateTaskInput;
