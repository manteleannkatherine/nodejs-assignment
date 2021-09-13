import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';
import useAppStore from '../../store';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Dropdown, Menu, PageHeader, Tag } from 'antd';
import { blue } from '@ant-design/colors';

const PageHeaderStyled = styled(PageHeader)`
	span.ant-page-header-heading-title {
		color: #fff;
	}

	span.ant-page-header-heading-extra {
		display: flex;
	}
`;

const StyledBadge = styled.div`
	color: white;
	border-radius: 20px;
	height: 20px;
	min-width: 20px;
	padding: 2px;
	font-size: 12px;
	background: red;
	position: absolute;
	top: 0;
	right: 0;
`;

const Header: React.FC = ({ children }) => {
	const history = useHistory();
	const cart = useAppStore((state) => state.cart);
	const totalAmount = useAppStore((state) => state.totalAmount);

	const menu = (
		<Menu>
			<Menu.Item>
				<NavLink to="order">View Order</NavLink>
			</Menu.Item>
			<Menu.Item>
				<NavLink to="orderHistory">Order History</NavLink>
			</Menu.Item>
		</Menu>
	);

	const DropdownMenu = () => (
		<Dropdown key="more" overlay={menu}>
			<Button
				style={{
					background: 'transparent',
					border: 'none',
					padding: 0,
				}}>
				<GiHamburgerMenu size={32} fill="white" />
			</Button>
		</Dropdown>
	);

	return (
		<PageHeaderStyled
			style={{
				background: blue.primary,
				border: 'none',
			}}
			title="E-Commerce Website Sample"
			extra={[
				<Button
					onClick={() => history.push('/order')}
					style={{ background: 'transparent', outline: 0, border: 0 }}>
					<AiOutlineShoppingCart fill="white" size={24} />
					<StyledBadge>{cart.length ?? 0}</StyledBadge>
				</Button>,
				<DropdownMenu />,
			]}
		/>
	);
};

export default Header;
