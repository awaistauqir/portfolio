import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
	faNode,
	faCss3,
	faGitAlt,
	faHtml5,
	faJsSquare,
	faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const About = () => {
	return (
		<StyledAbout>
			<Left>
				<h3>
					<span>01.</span>
					About me
				</h3>
				<p>Hello, my name Awais Tauqir.</p>
				<p>
					I'm very ambitious mern stack developer looking for role in an IT
					company with the opportunity to work with the latest technologies on
					challenging and diverse projects.
				</p>
				<p>
					I'm confident, curious and continuosully working on imporving my
					knowledge and skills.
				</p>
			</Left>
			<Right>
				<StageCubeCont>
					<Face1>
						<FontAwesomeIcon icon={faNode} color="#689F63" />
					</Face1>
					<Face2>
						<FontAwesomeIcon icon={faHtml5} color="#F06529" />
					</Face2>
					<Face3>
						<FontAwesomeIcon icon={faCss3} color="#28A4D9" />
					</Face3>
					<Face4>
						<FontAwesomeIcon icon={faReact} color="#5ED4F4" />
					</Face4>
					<Face5>
						<FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
					</Face5>
					<Face6>
						<FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
					</Face6>
				</StageCubeCont>
			</Right>
		</StyledAbout>
	);
};

export default About;
const StyledAbout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90vh;
	@media (max-width: 990px) {
		flex-direction: column;
		padding: 1rem 1.25rem;
		width: 100%;
		height: fit-content;
		gap: 1rem;
	}
`;

const Left = styled.div`
	flex: 0.5;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 1.5rem;
	animation: backInLeft;
	animation-duration: 1s;
	h3 {
		font-size: 3rem;
		color: #ccd6f6 !important;
		span {
			color: ${(props) => props.theme.textColor};
		}
		@media (max-width: 768px) {
			font-size: 2rem;
		}
	}
	p {
		color: ${(props) => props.theme.textColor};
	}
`;
const Right = styled.div`
	flex: 0.5;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: backInRight;
	animation-duration: 1s;
	padding: 1rem 1.5rem;
`;

const StageCubeCont = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;
	width: 100%;
	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 400px) {
		grid-template-columns: repeat(1, 1fr);
	}

	div {
		border: 1px solid #ccc;
		background: rgba(86, 160, 170, 0.521);
		text-align: center;
		font-size: 100px;
		border-radius: 8px;
		box-shadow: 0 0 20px 0px #ccd6f6;
		border: 1px solid ${(props) => props.theme.textColor};
		transition: all ease 0.5s;
		:hover {
			box-shadow: 0 0 20px 0px rgb(83, 211, 185);
			transform: scale(1.1);
		}
	}
`;
const Face1 = styled.div`
	color: #dd0031;
`;
const Face2 = styled.div`
	color: #f06529;
`;
const Face3 = styled.div`
	color: #28a4d9;
`;
const Face4 = styled.div`
	color: #5ed4f4;
`;
const Face5 = styled.div`
	color: #efd81d;
`;
const Face6 = styled.div`
	color: #ec4d28;
`;
