import React from 'react';

const Dialog = ({ isOpen, children, onClose = () => {}, style }) => {
  if (!isOpen) return null;

  const styles = {
    overlay: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={style}>
        { children }
      </div>
    </div>
  )
};

export default Dialog;