import React from 'react';

const Image = ({ src, onClick = () => {} }) => {
  const style = {
    paddingBottom: '100%', // percentage is based on the width
    background: `url(${src}) center / cover`
  };

  return (
    <div style={style} onClick={onClick} />
  );
}


export default Image;