import React from 'react';
import styled from 'styled-components';
const Skills = () => {
	return (
		<StyledSkills>
			<Left>
				<h3>
					<span>02.</span>
					Skills
				</h3>
				<p>
					Expert in front-end development including technologies like
					<Highlighted>
						{' '}
						HTML, CSS, JavaScript, React, Node JS, Express, MongoDB, Sass{' '}
					</Highlighted>
					etc{' '}
				</p>
				<p>
					I am not a designer but I have a good sense of aesthatics, and
					experience in responsive, mobile-first web design. I put special
					effort into optimizing my code and providing the best user experience.
				</p>
			</Left>
			<Right>
				<SkillSet>
					<div>
						<p>HTML/CSS</p>
						<ProgressBar value={92} max={100} />
					</div>
					<div>
						<p>JavaScript</p>
						<ProgressBar value={85} max={100} />
					</div>
					<div>
						<p>React</p>
						<ProgressBar value={84} max={100} />
					</div>
					<div>
						<p>Next.js</p>
						<ProgressBar value={81} max={100} />
					</div>
					<div>
						<p>Node</p>
						<ProgressBar value={75} max={100} />
					</div>
					<div>
						<p>MongoDb</p>
						<ProgressBar value={70} max={100} />
					</div>
				</SkillSet>
			</Right>
		</StyledSkills>
	);
};

export default Skills;
const StyledSkills = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 1.5rem;
	gap: 2rem;
	@media (max-width: 768px) {
		flex-direction: column;
		height: fit-content;
	}
`;
const Left = styled.div`
	flex: 0.5;
	color: #ccd6f6;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	animation: backInLeft;
	animation-duration: 1s;
	overflow: hidden;
	h3 {
		font-size: 3rem;
		span {
			color: ${(props) => props.theme.textColor};
		}
		@media (max-width: 768px) {
			font-size: 2rem;
		}
	}
`;
const Highlighted = styled.span`
	color: ${(props) => props.theme.textColor};
`;
const Right = styled.div`
	flex: 0.5;
	animation: backInRight;
	animation-duration: 1s;

	@media (max-width: 768px) {
		width: 100%;
	}
`;
const SkillSet = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	div {
		p {
			color: ${(props) => props.theme.textColor};
		}
	}
`;

const ProgressBar = styled.progress`
	border-radius: 7px;
	width: 100%;

	animation: mymove 2s;

	box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
	::-webkit-progress-bar {
		background-color: #ccd6f6;
		border-radius: 7px;
	}
	::-webkit-progress-value {
		background-color: ${(props) => props.theme.textColor};
		border-radius: 7px;
	}
	@keyframes mymove {
		from {
			height: 0px;
		}
		to {
			height: 15px;
		}
	}
`;
