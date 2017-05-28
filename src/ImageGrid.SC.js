import React from 'react';
import styled from 'styled-components';
import Image from './Image.SC';

const ImageGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
`;

const ImageGrid = ({ images = [], onClick = () => {} }) => (
  <ImageGridWrapper>
    {
      images.map((src) => (
        <Image src={src} onClick={() => onClick(src)} />
      ))
    }
  </ImageGridWrapper>
);

export default ImageGrid;
