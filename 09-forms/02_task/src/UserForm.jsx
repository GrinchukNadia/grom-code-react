import React, { Component } from 'react';
import './userForm.scss';

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      student: '',
      occupation: '',
      about: '',
    };
  }

  handleChange = (e) => {
    const {name, value, checked} = e.target;

    const inputValue = checked || value
    this.setState({
      [name]: inputValue,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form className='login-form' onSubmit={this.handleSubmit}>
        <h1 className='form-title'>Profile</h1>
        <div className='form-control'>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input
            className='form-input'
            type='text'
            id='name'
            onChange={this.handleChange}
            value={this.state.name}
            name='name'
          />
        </div>
        <div className='form-control'>
          <label className='form-label' htmlFor='student'>
            Student
          </label>
          <input
            className='form-input'
            type='checkbox'
            id='student'
            onChange={this.handleChange}
            value={this.state.student}
            name='student'
          />
        </div>
        <div className='form-control'>
          <label className='form-label' id='occupation' htmlFor='occupation'>
            Occupation
          </label>
          <select
            onChange={this.handleChange}
            value={this.state.occupation}
            name='occupation'
            className='form-input'
          >
            <option value='london'>London</option>
            <option value='new-york'>New York</option>
            <option value='coconut'>Sidney</option>
            <option value='mango'>Berlin</option>
          </select>
        </div>
        <div className='form-control'>
          <label className='form-label' id='about' htmlFor='about'>
            About
          </label>
          <textarea
            onChange={this.handleChange}
            value={this.state.about}
            name='about'
            className='form-input'
          ></textarea>
        </div>
        <button className='submit-button' type='submit'>
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
