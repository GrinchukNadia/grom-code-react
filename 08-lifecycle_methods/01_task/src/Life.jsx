import React, { Component } from 'react';

class NumbersList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate() {
    console.log(
      'shouldComponentUpdate(nextProps, nextState): decide to render or not to render'
      );
      return true
  }

  componentDidUpdate() {
    console.log(
      'componentDidUpdate(prevProps, prevState): some updates based on new props'
    );
  }

  componentWillUnmount() {
    console.log(
      'componentWillUnmount(): cleanup before DOM related to component will be removed'
    );
  }

  render() {
    console.log('constructor: good place to create state');
    return null
  }
}

export default NumbersList;
