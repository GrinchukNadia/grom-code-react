import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.Component {
  state = {
    isWisible: false,
  };

  onHide = () => {
    this.setState({
      isWisible: !this.state.isWisible,
    });
  };

  render() {
    const { children, title } = this.props;
    const isWisible = this.state.isWisible;
    return (
      <div className='expand border'>
        <div className='expand__header'>
          <span className='expand__title'>{title}</span>
          <button onClick={this.onHide} className='expand__toggle-btn'>
            <i
              style={
                isWisible ? { transform: 'rotate(180deg)' } : {}
              }
              className='fas fa-chevron-down'
            ></i>
          </button>
        </div>
        {isWisible ? (
          <div className='expand__content'>{children}</div>
        ) : null}
      </div>
    );
  }
}

Expand.propTypes = {
  isWisible: PropTypes.bool,
};

Expand.defaultProps = {
  isWisible: false,
};

export default Expand;
