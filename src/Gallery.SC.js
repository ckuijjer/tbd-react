import React from 'react';
import styled from 'styled-components';
import Image from './Image.SC';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
`;

const Gallery = ({ images = [], onClick = () => {} }) => (
<GalleryContainer>
    {
      images.map((src) => (
        <Image src={src} onClick={() => onClick(src)} />
      ))
    }
  </GalleryContainer>
);

export default Gallery;
