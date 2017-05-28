import React from 'react';
import Image from './Image';

class ImageGrid extends React.Component {
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
        { this.props.images.map((image) => {
          return <Image src={image.url} onClick={() => onClick(image)} key={image.id} />
        }) }
      </div>
    );
  }
};


export default ImageGrid;