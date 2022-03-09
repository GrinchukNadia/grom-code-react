import React, { useState, useEffect } from 'react';
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;

  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const Clock = ({ location, offset }) => {
  const editedTime = moment(getTimeWithOffset(offset)).format('LTS');
  const [timeInfo, setTime] = useState({ time: editedTime });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        time: editedTime,
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [timeInfo]);

  const { time } = timeInfo;
  return (
    <div className='clock'>
      <div className='clock__location'>{location}</div>
      <div className='clock__time'>{time}</div>
    </div>
  );
};

export default Clock;
