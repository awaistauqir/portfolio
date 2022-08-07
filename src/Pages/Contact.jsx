import React, { useState } from 'react';
import styled from 'styled-components';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	return (
		<StyledContact>
			<Heading>
				<span>get in touch</span>
				<h3>Contact</h3>
			</Heading>
			<CotactInformation>
				<ContactData>
					<div>
						<span>
							<BsTelephoneFill />
						</span>
						<p>+923167689694</p>
					</div>
					<div>
						<span>
							<MdAlternateEmail />
						</span>
						<p>awaistauqir1@gmail.com</p>
					</div>
					<div>
						<span>
							<ImLocation />
						</span>
						<p>Phalia, Pakistan</p>
					</div>
				</ContactData>
				<Form>
					<FormGroup>
						<label htmlFor="name">
							Your Name
							<input
								type="text"
								id="name"
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</label>
					</FormGroup>
					<FormGroup>
						<label htmlFor="email">
							Your Email
							<input
								type="email"
								id="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</label>
					</FormGroup>
					<FormGroup>
						<label htmlFor="message">
							Your message
							<textarea
								type="text"
								id="message"
								name="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</label>
					</FormGroup>
					<button type="submit">Send</button>
				</Form>
			</CotactInformation>
		</StyledContact>
	);
};

export default Contact;
const StyledContact = styled.div`
	width: 100%;
	height: 90vh;
	padding: 1rem 1.5rem;
`;
const Heading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	animation: backInDown;
	animation-duration: 1s;

	gap: 1rem;
	span {
		color: ${(props) => props.theme.textColor};
		font-size: 1.5rem;
	}
	h3 {
		color: #ccd6f6;
		font-size: 3.5rem;
	}
`;
const CotactInformation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 1.5rem;

	@media (max-width: 786px) {
		flex-direction: column;
	}
`;

const ContactData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;
	width: 100%;
	flex: 0.5;
	animation: backInLeft;
	animation-duration: 1s;

	div {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 0.75rem;
		border: ${(props) => props.theme.textColor} solid 1px;
		border-radius: 8px;
		padding: 1rem;
		span {
			color: #ccd6f6;
			background: #112240;
			color: ${(props) => props.theme.textColor};
			border: 1px solid ${(props) => props.theme.textColor};
			padding: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			font-size: 1.5rem;
		}
		p {
			color: ${(props) => props.theme.textColor};
		}
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 1rem 0;
	flex: 0.5;
	width: 100%;
	animation: backInRight;
	animation-duration: 1s;

	button[type='submit'] {
		font-size: 1.2rem;
		display: inline-block;
		outline: none;
		border: none;
		padding: 0.5rem 4rem;
		border-radius: 8px;
		cursor: pointer;
		background: transparent;
		color: ${(props) => props.theme.textColor};
		border: 1px solid ${(props) => props.theme.textColor};
	}
`;
const FormGroup = styled.div`
	width: 100%;
	margin-bottom: 1rem;
	label {
		color: #ccd6f6;
	}
	input,
	textarea {
		width: 100%;
		padding: 0.75rem;
		outline: none;
		border: none;
		border-radius: 8px;
		margin-top: 1rem;
		background: transparent;
		color: ${(props) => props.theme.textColor};
		border: 1px solid ${(props) => props.theme.textColor};
	}
	textarea {
		min-height: 150px;
		resize: vertical;
	}
`;
