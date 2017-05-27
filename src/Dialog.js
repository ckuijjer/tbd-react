import React from 'react';

const Dialog = ({ isOpen, children, onClose = () => {} }) => {
  if (!isOpen) return null;

  const styles = {
    container: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return (
    <div style={styles.container} onClick={onClose}>
      { children }
    </div>
  )
};

export default Dialog;