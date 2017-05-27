import React from 'react';

class Header extends React.Component {
  render() {
    const style = {
      fontSize: 40,
      fontWeight: 'bold',
      lineHeight: '72px',
      color: '#333',
    }

    return (
      <div style={style}>
        {this.props.title}
      </div>
    );
  }
};

export default Header;