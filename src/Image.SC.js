import styled from 'styled-components';

const Image = styled.div.attrs({
	onClick: props => props.onClick || (() => {}),
})`
  padding-bottom: 100%;
  background: url(${ props => props.src }) center / cover;
`;

export default Image;