import React, { Component } from 'react';
import _ from 'lodash';
import queryString from 'query-string';

import Header from './Header';
import ImageGrid from './ImageGrid';
import Dialog from './Dialog';
import Image from './Image';
import Button from './Button';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogIsOpen: false,
      dialogImage: null,
      images: [],
    };

    this.getMoreImages();
  }

  getMoreImages = async () => {
    let subreddit = 'kittens';

    const params = {
      raw_json: 1,
      limit: 24,
      after: this.state.images.length ? this.state.images[this.state.images.length - 1].id : undefined
    };

    const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?${queryString.stringify(params)}`);
    const json = await response.json();

    const images = this.transformAPIresult(json);

    this.setState({ images: [...this.state.images, ...images] });
  }

  transformAPIresult = (json) => (
    json.data.children.map(item => ({
      id: item.data.name,
      url: _.get(item, 'data.preview.images[0].resolutions', [])
        .filter(resolution => resolution.width === 320)
        .map(resolution => resolution.url)[0]
    }))
    .filter(item => item.url)
  );

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
          <ImageGrid images={this.state.images} onClick={this.openDialog} />
          <Dialog
            isOpen={this.state.dialogIsOpen}
            onClose={this.closeDialog}
            style={styles.dialog}
          >
            <Image src={this.state.dialogImage} />
          </Dialog>
          <div style={styles.buttonContainer}>
            <Button onClick={this.getMoreImages}>Load more</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
