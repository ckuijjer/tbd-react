import React, { Component } from 'react';
import _ from 'lodash';
import queryString from 'query-string';

import Gallery from './Gallery';

const SUBREDDIT = 'kittens';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };

    this.handleLoadMore();
  }

  handleLoadMore = async () => {
    const params = {
      raw_json: 1,
      limit: 24,
      after: this.state.images.length ? this.state.images[this.state.images.length - 1].id : undefined
    };

    const response = await fetch(`https://www.reddit.com/r/${SUBREDDIT}/hot.json?${queryString.stringify(params)}`);
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

  render() {
    return (
      <Gallery
        images={this.state.images}
        onLoadMoreClick={this.handleLoadMore}
      />
    );
  }
}

export default GalleryContainer;
