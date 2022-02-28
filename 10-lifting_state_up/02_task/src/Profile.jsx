import React from 'react';
import UserForm from './UserForm.jsx';

const Profile = ({ userData, onFormChange }) => {
  return (
    <div className='column'>
      <UserForm
        onFormChange={onFormChange}
        userData={userData}
      />
    </div>
  );
};

export default Profile;
