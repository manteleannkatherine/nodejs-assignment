import gql from 'graphql-tag';

const CREATE_CATEGORY = gql`
	mutation ($createCategoryData: CategoryCreateInput!) {
		createCategory(data: $createCategoryData) {
			id
			name
		}
	}
`;

const GET_CATEGORY = gql`
	{
		categories {
			id
			name
		}
	}
`;

export { CREATE_CATEGORY, GET_CATEGORY };
