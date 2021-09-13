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
		orderDetails {
			orderId,
			quantity,
			totalPrice
		}
	}
`;

export { CREATE_ORDER, GET_ORDERS };
