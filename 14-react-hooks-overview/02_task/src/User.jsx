import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const url = 'https://api.github.com/users';
const User = () => {
  const [userData, onDataSet] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`${url}/${userId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to load user');
      })
      .then((userData) => {
        onDataSet(userData);
      });
  }, [userId]);

  if (!userData) {
    return null;
  }

  const { avatar_url, name, location } = userData;
  return (
    <div className='user'>
      <img alt='User Avatar' src={avatar_url} className='user__avatar' />
      <div className='user__info'>
        <span className='user__name'>{name}</span>
        <span className='user__location'>{location}</span>
      </div>
    </div>
  );
};

export default User;
