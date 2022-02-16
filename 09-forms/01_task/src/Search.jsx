import React, { Component } from 'react';
import './search.scss';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  handleSubmit = e => {
    alert(`Search text: ${this.state.inputValue}`)
    e.preventDefault()
    
  }

  handleInput = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='search'>
        <input onChange={this.handleInput} value={this.state.inputValue} type='text' className='search__input' />
        <button className='search__button'>Search</button>
      </form>
    );
  }
}

export default Search;
