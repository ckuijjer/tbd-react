import React from 'react';

class Dialog extends React.Component {
  constructor(props) {
    super(props);

    this.onEscape = this.onEscape.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscape);    
  }

  onEscape = (event) => {
    const { isOpen, onClose = () => {} } = this.props;

    if (event.keyCode === 27 && isOpen) {
      onClose();
    }
  }

  render() {
    const { isOpen, children, onClose = () => {}, style } = this.props;

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
    );
  }
}

export default Dialog;