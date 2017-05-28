import React, { Component } from 'react';
import _ from 'lodash';
import queryString from 'query-string';

import Gallery from './Gallery';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };

    this.handleLoadMore();
  }

  handleLoadMore = async () => {
    const subreddit = this.props.match.params.subreddit;

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

  render() {
    // Make the Gallery always render full rows
    const images = this.state.images.slice(0, this.state.images.length - (this.state.images.length % 3)) 

    return (
      <Gallery
        title={this.props.match.params.subreddit}
        images={images}
        onLoadMoreClick={this.handleLoadMore}
      />
    );
  }
}

export default GalleryContainer;
