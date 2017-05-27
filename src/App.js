import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';

class App extends Component {
  render() {
    const styles = {
      container: {
        backgroundColor: '#fafafa',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
      },
      content: {
        backgroundColor: '#fff',
        flex: 1,
        maxWidth: 768,
        paddingLeft: 16,
        paddingRight: 16,
        boxSizing: 'border-box'
      }
    }

    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <Header title="Meowstagram" />
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;
