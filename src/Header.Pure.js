import React from 'react';

const Header = ({ title }) => (
  <div style={style}>
    {this.props.title}
  </div>
)

const style = {
  fontSize: 40,
  fontWeight: 'bold',
  lineHeight: '72px',
  color: '#333',
}

export default Header;