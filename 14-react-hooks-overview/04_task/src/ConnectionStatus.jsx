import React, { useState, useEffect } from 'react';
import './status.scss';

const ConnectionStatus = () => {
  const [conection, setConnection] = useState({isOnline: true});

  useEffect(() => {
    const onChangeOnline = () => {
      setConnection({ isOnline: true });
    };
    const onChangeOfline = () => {
      setConnection({ isOnline: false });
    };

    window.addEventListener('online', onChangeOnline);
    window.addEventListener('offline', onChangeOfline);

    return () => {
          window.removeEventListener('online', onChangeOnline);
          window.removeEventListener('offline', onChangeOfline);
    }
  }, [conection]);

  const {isOnline} = conection
  return (
    <div className={isOnline ? 'status' : 'status status_offline'}>
      {isOnline ? 'online' : 'offline'}
    </div>
  );
};

export default ConnectionStatus;
