import React, { Component } from 'react';

import Header from './Header';
import ImageGrid from './ImageGrid';
import Image from './Image';
import Dialog from './Dialog';
import Button from './Button';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogIsOpen: false,
      dialogImage: null,
    };
  }

  openDialog = (item) => {
    this.setState({
      dialogIsOpen: true,
      dialogImage: item.url,
    });
  }

  closeDialog = () => {
    this.setState({
      dialogIsOpen: false
    });
  }

  render() {
    const { images, onLoadMoreClick } = this.props;

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
      },
      dialog: {
        flex: 1,
        maxWidth: 768,
        padding: 16,
        boxSizing: 'border-box'
      },
      buttonContainer: {
        marginTop: 16,
        display: 'flex',
        justifyContent: 'center',
      }
    }

    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <Header title="Meowstagram" />
          <ImageGrid images={images} onClick={this.openDialog} />
          <Dialog
            isOpen={this.state.dialogIsOpen}
            onClose={this.closeDialog}
            style={styles.dialog}
          >
            <Image src={this.state.dialogImage} />
          </Dialog>
          <div style={styles.buttonContainer}>
            <Button onClick={onLoadMoreClick}>Load more</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
