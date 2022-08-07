import React from 'react';
import styled from 'styled-components';
import { AiOutlineFolder } from 'react-icons/ai';
import { MdOutlineOpenInNew } from 'react-icons/md';
const data = [
	{
		github: 'https://github.com/awaistauqir/resume-generator',
		link: 'https://beautiful-creponne-ebaba7.netlify.app/',
		title: 'Resume Generator',
		tech: ['React.js', 'Styled Componenet', 'Node.js'],
	},
	{
		github: 'https://github.com/awaistauqir/airbnb-clone',
		link: 'https://airbnb-clone1-xi.vercel.app/',
		title: 'Airbnb Clone',
		tech: ['Next.js', 'Tailwind'],
	},
	{
		github: 'https://github.com/awaistauqir/Instagram-Clone',
		link: 'https://blissful-thompson-c951ad.netlify.app',
		title: 'Instagram Clone',
		tech: ['React.js', 'Styled Componenet', 'Firebase'],
	},
	{
		github: 'https://github.com/awaistauqir/linkedin-clone',
		link: 'https://trusting-easley-062dc1.netlify.app',
		title: 'LinkedIn Clone',
		tech: ['React.js', 'Styled Componenet', 'Firebase'],
	},
	{
		github: 'https://github.com/awaistauqir/cryptoapp',
		link: 'https://incomparable-cendol-a033a0.netlify.app',
		title: 'Crypto Hunter',
		tech: ['React.js', 'Styled Componenet', 'API'],
	},
];

const Projects = () => {
	return (
		<StyledProjects>
			<section>
				<h1>My work</h1>
				<p>Projects</p>
			</section>
			<ProjectsContainer>
				{data.map((project) => (
					<StyledProject>
						<header>
							<div>
								<a href={project.github} target={'_blank'} rel="norefferer">
									<AiOutlineFolder />
								</a>
								<a href={project.link} target={'_blank'} rel="norefferer">
									<MdOutlineOpenInNew />
								</a>
							</div>
							<h2>{project.title}</h2>
						</header>
						<footer>
							{project.tech.map((t) => (
								<span>{t}</span>
							))}
						</footer>
					</StyledProject>
				))}
			</ProjectsContainer>
		</StyledProjects>
	);
};

export default Projects;
const StyledProjects = styled.div`
	height: 90vh;
	width: 100%;
	display: flex;
	gap: 2rem;
	align-items: center;
	flex-direction: column;

	section {
		display: flex;
		gap: 2rem;
		align-items: center;
		flex-direction: column;
		animation: backInDown;
		animation-duration: 1s;
	}

	@media (max-width: 768px) {
		height: fit-content;
	}
	h1 {
		color: #ccd6f6 !important;
		font-size: 2rem;
	}
	p {
		color: ${(props) => props.theme.textColor};
	}
`;
const ProjectsContainer = styled.div`
	animation: backInUp;
	animation-duration: 1s;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;
	padding: 1rem 1.5rem;
	width: 100%;
	height: fit-content;
	animation: backInUp;
	animation-duration: 1s;
	@media (max-width: 990px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const StyledProject = styled.div`
	box-shadow: 0 10px 30px -15px #112240;
	display: flex;
	background: #112240;
	justify-content: space-between;
	height: 300px;
	flex-direction: column;
	align-items: flex-start;

	padding: 2rem 1rem;
	border-radius: 16px;
	header {
		width: 100%;
		color: #ccd6f6 !important;
		div {
			display: flex;
			justify-content: space-between;
			width: 100%;
		}

		a {
			color: ${(props) => props.theme.textColor};
			font-size: 2rem;
		}
	}
	footer {
		display: flex;
		gap: 1rem;
		font-size: 0.875rem;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		color: #919dbb;
	}
`;
