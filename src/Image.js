import React from 'react';

const Image = ({ src, onClick = () => {} }) => {
  const styles = {
    paddingBottom: '100%',
    background: `url(${src}) center / cover`
  };

  return (
    <div style={styles} onClick={onClick} />
  );
}


export default Image;