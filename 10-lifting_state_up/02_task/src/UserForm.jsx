import React from 'react';
import './userForm.scss';

const UserForm = ({ userData, onFormChange }) => {
  return (
    <form className='user-form'>
      <input
        type='text'
        name='firstName'
        className='user-form__input'
        value={userData.firstName}
        onChange={onFormChange}
      />
      <input
        type='text'
        name='lastName'
        className='user-form__input'
        value={userData.lastName}
        onChange={onFormChange}
      />
    </form>
  );
};

export default UserForm;
