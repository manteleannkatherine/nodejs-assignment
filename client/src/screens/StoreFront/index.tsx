import { useQuery } from '@apollo/client';
import React from 'react';
import StoreGallery from '../../components/StoreGallery';
import { GET_PRODUCTS } from '../../queries/product.queries';

const StoreFront: React.FC = ({ children }) => {
	const { loading, error, data } = useQuery(GET_PRODUCTS);

	return <>{data && data.products && <StoreGallery data={data.products} />}</>;
};

export default StoreFront;
