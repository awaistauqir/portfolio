import React from 'react';
import styled from 'styled-components';
const SideNav = (props) => {
	return <StyledSideNav>{props.children}</StyledSideNav>;
};

export default SideNav;
const StyledSideNav = styled.aside`
	height: 100vh; /* Full-height: remove this if you want "auto" height */
	width: 50%;

	position: fixed; /* Fixed Sidebar (stay in place on scroll) */
	z-index: 10000; /* Stay on top */
	top: 0; /* Stay at the top */
	left: 0;
	background: ${(props) => props.theme.bg};
	overflow-x: hidden; /* Disable horizontal scroll */
	padding-top: 20px;
	/* transform: translateX(-150%); */
	transition: width ease-in-out 1s;
	@media (min-width: 768px) {
		display: none;
	}
	@media (max-width: 350px) {
		width: 70%;
	}
`;
