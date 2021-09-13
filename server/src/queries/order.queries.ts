import gql from 'graphql-tag';

const CREATE_ORDER = gql`
	mutation ($createOrderData: OrderCreateInput!) {
		createOrder(data: $createOrderData) {
			id
			orderDetails {
				id
				productId
			}
		}
	}
`;

const GET_ORDERS = gql`
	{
		categories {
			id
			name
		}
	}
`;

export { CREATE_ORDER, GET_ORDERS };
