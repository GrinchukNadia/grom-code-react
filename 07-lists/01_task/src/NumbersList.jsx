import React, { Component } from 'react';

class NumbersList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.numbers.slice().map(el => {
      return <li key={el}>{`${el}`}</li>
    }) 
  }

  render() {
      {console.log(this.renderList())}
    return (<ul> 
      {this.renderList()}
    </ul>)
  }
}

export default NumbersList;
