import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
	{
		products {
			id
			name
			price
			description
			quantity
			image
		}
	}
`;
export { GET_PRODUCTS };
