import React from 'react';

const Image = ({ url, onClick = () => {} }) => {
  const styles = {
    paddingBottom: '100%',
    background: `url(${url}) center / cover`
  };

  return (
    <div style={styles} onClick={onClick} />
  );
}


export default Image;