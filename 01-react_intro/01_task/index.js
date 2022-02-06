const rootElem = document.querySelector('#root');
const elem = React.createElement(
  'div',
  {className: 'greeting'},
  'Hello, React!'
)

ReactDOM.render(elem, rootElem)