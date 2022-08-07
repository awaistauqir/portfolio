import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Backdrop from '../utils/Backdrop';
import SideNav from './SideNav';
import { Link } from 'react-router-dom';

const Links = (props) => {
	return (
		<StyledLinks>
			<StyledLink to={'/about'} onClick={props.onClose}>
				{' '}
				<span>01.</span> About
			</StyledLink>
			<StyledLink to={'/skills'} onClick={props.onClose}>
				{' '}
				<span>02.</span> Skills
			</StyledLink>
			<StyledLink to={'/projects'} onClick={props.onClose}>
				{' '}
				<span>03.</span> Projects
			</StyledLink>
			<StyledLink to={'/contact'} onClick={props.onClose}>
				{' '}
				<span>04.</span> Contact
			</StyledLink>
			<ResumeLink
				href="https://www.canva.com/design/DAFFHQjHhg4/PwPksmNrEQ4IUQaW-kd8rw/view?utm_content=DAFFHQjHhg4&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
				target={'_blank'}
			>
				Resume
			</ResumeLink>
		</StyledLinks>
	);
};

const Navbar = () => {
	const [hamburgerOpened, setHamburgerOpened] = useState(false);
	const handleHamburger = () => {
		setHamburgerOpened(!hamburgerOpened);
	};
	const handleCloseHamburger = () => {
		setHamburgerOpened(false);
	};

	return (
		<Nav>
			<Link to={'/'} onClick={handleCloseHamburger}>
				<Logo>
					<h3>AT</h3>
				</Logo>
			</Link>
			<section>
				<Links />
			</section>
			<Hamburger onClick={handleHamburger}>
				{hamburgerOpened ? <AiOutlineClose /> : <AiOutlineMenu />}
			</Hamburger>
			{hamburgerOpened && (
				<Backdrop onClick={handleHamburger} opened={hamburgerOpened} />
			)}
			{hamburgerOpened && (
				<SideNav>
					<Links onClose={handleCloseHamburger} />
				</SideNav>
			)}
		</Nav>
	);
};

export default Navbar;
const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 1rem;
	position: sticky;
	top: 0;
	left: 0;
	height: 10vh;
	background: ${(props) => props.theme.bg};

	section {
		@media (max-width: 768px) {
			display: none;
		}
	}
`;
const Logo = styled.div`
	padding: 0.5rem 2rem;
	border: ${(props) => props.theme.textColor} solid 2px;
	border-radius: 8px;
	z-index: 100000;
	color: ${(props) => props.theme.textColor};
	cursor: pointer;
	a {
		color: ${(props) => props.theme.textColor};
		text-decoration: none;
	}
	:hover {
		background: ${(props) => props.theme.dimColor};
	}
`;
const StyledLinks = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;

	@media (max-width: 768px) {
		flex-direction: column;
		height: 100%;
		gap: 3rem;
		font-size: 1.25rem;
		padding: 0 1rem;
	}
`;

const StyledLink = styled(Link)`
	color: white;
	span {
		color: ${(props) => props.theme.textColor};
		/* font-family: 'Fira Code', sans-serif !important; */
	}
`;
const ResumeLink = styled.a`
	color: ${(props) => props.theme.textColor};
	background-color: transparent;
	border: 1px solid ${(props) => props.theme.textColor};
	border-radius: 8px;
	line-height: 1;
	text-decoration: none;
	cursor: pointer;
	padding: 14px 40px;
	width: max-content;
	transition: 0.3s all ease-in-out;
	:hover {
		box-shadow: 0 0 5px 0px rgb(83, 211, 185);
		background: #081220;
	}
`;
const Hamburger = styled.div`
	font-size: 2rem;
	color: ${(props) => props.theme.textColor};
	cursor: pointer;
	z-index: 100000;
	@media (min-width: 768px) {
		display: none;
	}
`;
