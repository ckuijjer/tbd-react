import React from 'react';
import Image from './Image';

class Gallery extends React.Component {
  render() {
    const styles = {
      container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: 16,
      },
    };

    const onClick = this.props.onClick || (() => {});

    return (
      <div style={styles.container}>
        { this.props.images.map((image, i) => {
          return <Image src={image.url} onClick={() => onClick(image)} key={i} />
        }) }
      </div>
    );
  }
};


export default Gallery;