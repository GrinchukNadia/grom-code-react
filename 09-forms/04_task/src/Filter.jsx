import React, { Component } from 'react';
import './filter.scss';

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='filter'>
        <span className='filter__count'>{this.props.count}</span>
        <input
          name='filter'
          type='text'
          className='filter__input'
          onChange={this.props.handleInput}
          value={this.props.filterText}
        />
      </div>
    );
  }
}

export default Filter;
