import React from 'react';
import styled from 'styled-components';

const Header = ({ title, className }) => (
  <div className={className}>
    {title}
  </div>
);

export default styled(Header)`
  font-size: 40px;
  font-weight: bold;
  line-height: 72px;
  color: #333;
`;