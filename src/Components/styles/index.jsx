import styled from 'styled-components';
const Container = styled.div`
	margin: 0 auto;
	position: relative;
	@media (min-width: 576px) {
		width: 540px;
	}
	@media (min-width: 768px) {
		width: 720px;
	}
	@media (min-width: 992px) {
		width: 960px;
	}
	@media (min-width: 1200px) {
		width: 1140px;
	}
`;
export { Container };
