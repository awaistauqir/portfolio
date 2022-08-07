import React from 'react';
import styled from 'styled-components';
const Home = () => {
	return (
		<StyledHome>
			<Info>
				<p>Hello, my name is</p>
				<h3>Awais Tauqir</h3>

				<Description>I build websites.</Description>
				<Paragraph>
					I’m a mern stack web developer specializing in building (and occasionally designing) exceptional
					digital experiences.
				</Paragraph>
			</Info>
		</StyledHome>
	);
};

export default Home;
const StyledHome = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	min-height: 90vh;
	min-width: 100%;
	@media (max-width: 768px) {
		padding: 0 1.5rem;
	}
`;
const Info = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	animation: bounce;
	animation-duration: 1s;
	> p {
		color: ${(props) => props.theme.textColor};
		font-family: 'Fira Code', sans-serif;
	}
	> h3 {
		font-size: 5rem;
		color: #ccd6f6 !important;
		@media (max-width: 768px) {
			font-size: 3.5rem;
		}
	}
`;
const Description = styled.h4`
	font-size: 4.5rem;
	color: #8892b0;
	margin-bottom: 1rem;
	@media (max-width: 768px) {
		font-size: 2.5rem;
	}
`;
const Paragraph = styled.p`color: #ccd6f6 !important;`;
