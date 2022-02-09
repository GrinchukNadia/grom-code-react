import React from 'react';
import './logout.scss';

class Logout extends React.Component {
  render() {
    return (
      <button 
        onClick={() => this.props.onLogout()} 
        className='btn logout'
      >
        Logout
      </button>
    );
  }
}

export default Logout;
