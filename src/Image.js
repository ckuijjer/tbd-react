import React from 'react';

const Image = ({ url }) => {
  const styles = {
    paddingBottom: '100%',
    background: `url(${url}) center / cover`
  };

  return (
    <div style={styles} />
  );
}


export default Image;