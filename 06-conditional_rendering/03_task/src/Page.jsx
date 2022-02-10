import React from 'react';
import Message from './Message.jsx';
import './page.scss';

const text1 = 'Hello, world!';
const text2 = 'Another exciting text.';

class Page extends React.Component {
  state = {
    text: null
  }

  setMessage(text) {
    this.setState({
      text
    })
  }

  render() {
    return (
      <div className='page'>
        <Message message={this.state.text}/>
        <div className='actions'>
          <button className='btn' onClick={() => this.setMessage(text1)}>Text 1</button>
          <button className='btn' onClick={() => this.setMessage(text2)}>Text 2</button>
          <button className='btn' onClick={() => this.setMessage(null)}>Clear</button>
        </div>
      </div>
    );
  }
}
export default Page;
