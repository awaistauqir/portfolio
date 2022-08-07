import React from 'react';
import styled from 'styled-components';
const Backdrop = (props) => {
	return <StyledBackdrop onClick={props.onClick} opened={props.opened} />;
};

export default Backdrop;
const StyledBackdrop = styled.div`
	height: 100vh;
	width: 100vw;
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.4);
	z-index: 2;
	filter: blur(5px);
	@media (min-width: 768px) {
		display: none;
		filter: ${(props) => (props.opened ? '5px' : '')};
	}
`;
