import React from 'react';
import Image from './Image';

const Gallery = ({ images = [], onClick = () => {} }) => (
  <div style={style}>
    {
      images.map((src, i) => (
        <Image src={src} onClick={() => onClick(src)} key={i} />
      ))
    }
  </div>
);

const style = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: 16,
};

export default Gallery;