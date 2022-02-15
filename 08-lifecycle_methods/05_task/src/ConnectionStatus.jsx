import React, { Component } from 'react';
import './status.scss';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: true,
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.onConnectChange);
    window.addEventListener('offline', this.onConnectChange);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onConnectChange);
    window.removeEventListener('offline', this.onConnectChange);
  }

  onConnectChange = () => {
    this.setState({ isOnline: !this.state.isOnline });
  };

  render() {
    const isOnline = this.state.isOnline;
    return (
      <div className={isOnline ? 'status' : 'status status_offline'}>
        {isOnline ? 'online' : 'offline'}
      </div>
    );
  }
}

export default ConnectionStatus;
