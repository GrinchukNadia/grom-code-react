import React, { Component } from 'react';
import './status.scss';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: true,
    };

    this.onConnectChange = this.onConnectChange.bind(this)
  }

  onConnectChange() {
    this.setState({isOnline: !this.state.isOnline });
  }

  componentDidMount() {
    window.addEventListener('online', this.onConnectChange);
    window.addEventListener('offline', this.onConnectChange);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onConnectChange);
    window.removeEventListener('ofline', this.onConnectChange);
  }

  render() {
    console.log(this.state.isOnline)
    if (this.state.isOnline) {
      return <div className='status status_online'>Online</div>;
    }
    else {
      return <div className='status status_offline'>Offline</div>;
    }
  }
}

export default ConnectionStatus;
