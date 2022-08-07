import React from 'react';
import styled from 'styled-components';
import Mailto from 'reactv16-mailto';
const Email = () => {
	return (
		<StyledEmail>
			<Mailto email="awaistauqir1@gmail.com">awaistauqir1@gmail.com</Mailto>
			<div />
		</StyledEmail>
	);
};

export default Email;
const StyledEmail = styled.div`
	position: fixed;

	writing-mode: vertical-rl;
	right: 5%;
	bottom: 0;
	display: flex;
	gap: 1rem;
	justify-content: center;
	align-items: center;

	> a {
		color: #ccd6f6;
		text-decoration: none;
		letter-spacing: 4px;
		font-size: 0.8rem;
		:hover {
			color: ${(props) => props.theme.textColor};
		}
	}
	div {
		height: 100px;
		width: 3px;
		background: ${(props) => props.theme.textColor};
		border-radius: 4px;
	}
	@media (max-width: 1050px) {
		display: none;
	}
`;
