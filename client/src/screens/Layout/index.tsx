import Header from './Header';
import styled from 'styled-components';

const Container = styled.div`
	@media (min-width: 1224px) {
		width: 1170px;
		margin: 0 auto;
	}
`;

const AppLayout: React.FC = ({ children }) => {
	return (
		<div className="App">
			<Header />
			<Container>
				<div style={{ padding: 20 }}>{children}</div>
			</Container>
		</div>
	);
};

export default AppLayout;
