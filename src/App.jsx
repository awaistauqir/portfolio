import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import { Container } from './Components/styles/index';
import About from './Pages/About';
import Skills from './Pages/Skills';
import 'animate.css';
import Email from './Components/Email';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
function App() {
	const theme = {
		textColor: '#52D0B7',
		bg: '#0A192F',
		dimColor: '#133040',
	};
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Navbar />
				<Email />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</Container>
		</ThemeProvider>
	);
}

export default App;
