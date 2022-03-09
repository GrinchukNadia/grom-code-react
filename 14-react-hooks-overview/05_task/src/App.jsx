import React, { useState, useEffect } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [visibility, setVisibility] = useState({ visible: true });

  const {visible} = visibility
  const toggleVisible = () => {
    setVisibility({
      visible: !visible,
    });
  }

  return (
    <div className='hide_clock'>
      <button onClick={toggleVisible}>Hide</button>
      {visible && (
        <div className='clock_block'>
          <Clock location={'New York'} offset={0} />
          <Clock location={'Kyiv'} offset={2} />
          <Clock location={'London'} offset={-5} />
        </div>
      )}
    </div>
  );
};

export default App;
