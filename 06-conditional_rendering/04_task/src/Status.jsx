import React, { Component } from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';
import './status.scss';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: props.status,
    };

    this.onConnect = this.onConnect.bind(this)
  }

  onConnect() {
    this.setState({
      isOnline: !this.state.isOnline
    })
  }

  render() {
    return (
      <div className='status'>
        {this.state.isOnline 
          ? (<Online />) 
          : (<Offline onConnect={this.onConnect} />)
        }
      </div>
    );
  }
}

export default Status;
