import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Dialog from './Dialog';
import Image from './Image';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDialogOpen: false,
      imageUrlInDialog: null,
    };
  }

  openDialogWithImage = (url) => {
    this.setState({
      isDialogOpen: true,
      imageUrlInDialog: url,
    });
  }

  closeDialog = () => {
    this.setState({
      isDialogOpen: false 
    });
  }

  render() {
    const styles = {
      container: {
        backgroundColor: '#fbfbfb',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
      },
      content: {
        backgroundColor: '#fff',
        flex: 1,
        maxWidth: 768,
        padding: 16,
        boxSizing: 'border-box'
      }
    }

    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <Header title="Meowstagram" />
          <Gallery onClick={this.openDialogWithImage} />
          <Dialog 
            isOpen={this.state.isDialogOpen}
            onClose={this.closeDialog}
          >
            <div style={{ width: 736 }}>
               <Image src={this.state.imageUrlInDialog} />
            </div>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default App;
