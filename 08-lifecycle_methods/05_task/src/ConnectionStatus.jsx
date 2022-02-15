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
    window.addEventListener('online', this.onChangeOnline);
    window.addEventListener('offline', this.onChangeOfline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onChangeOnline);
    window.removeEventListener('offline', this.onChangeOfline);
  }

  onChangeOnline = () => {
    this.setState({ isOnline: true });
  };

  onChangeOfline = () => {
    this.setState({ isOnline: false });
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
