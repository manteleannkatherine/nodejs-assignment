import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ListContainer = styled.ul`
	display: flex;
	flex-direction: row;
	list-style: none;
`;

const ListItemContainer = styled.li`
	padding: 0px 20px;

	a {
		padding: 10px;
		border-radius: 8px;
		color: white;
	}

	a.selected {
		border: 2px solid #fff;
	}
`;

const Navigation: React.FC = ({ children }) => {
	return (
		<ListContainer className="navigation-area">
			<ListItemContainer>
				<NavLink to="/" exact activeClassName="selected">
					Home
				</NavLink>
			</ListItemContainer>
			<ListItemContainer>
				<NavLink to="/orderHistory" activeClassName="selected">
					Order Page
				</NavLink>
			</ListItemContainer>
			<ListItemContainer>
				<NavLink to="/orderHistory" activeClassName="selected">
					Order History Page
				</NavLink>
			</ListItemContainer>
		</ListContainer>
	);
};

export default Navigation;
