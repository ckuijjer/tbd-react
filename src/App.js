import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Dialog from './Dialog';
import Image from './Image';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogIsOpen: false,
      dialogImage: null,
      images: [],
    };
  }

  componentDidMount() {
    const subreddit = 'kitten';

    fetch(`https://www.reddit.com/r/${subreddit}/new.json?raw_json=1`)
      .then(response => response.json())
      .then(response => {
        return response.data.children.map(child => {
          // get the first image
          const image = child.data.preview.images[0];

          return image.resolutions
            .filter(resolution => resolution.width === 216)
            .map(resolution => resolution.url)[0];
        });
      })
      .then(images => {
        this.setState({
          images,
        });
      })
  }

  openDialog = (url) => {
    this.setState({
      dialogIsOpen: true,
      dialogImage: url,
    });
  }

  closeDialog = () => {
    this.setState({
      dialogIsOpen: false
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
      },
      dialog: {
        flex: 1,
        maxWidth: 768,
        padding: 16,
        boxSizing: 'border-box'
      },
    }

    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <Header title="Meowstagram" />
          <Gallery images={this.state.images} onClick={this.openDialog} />
          <Dialog
            isOpen={this.state.dialogIsOpen}
            onClose={this.closeDialog}
            style={styles.dialog}
          >
            <Image src={this.state.dialogImage} />
          </Dialog>
        </div>
      </div>
    );
  }
}

export default App;
