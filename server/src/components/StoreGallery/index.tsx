import StoreGalleryItem from './item';
import { map } from 'lodash';
import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    display: grid;
    grid-gap: .7rem;
    grid-template-columns: repeat(4,25%);
    text-align: center;
    margin-top: 10px;
}`;

interface StoreGalleryProps {
	data: any[];
}

const StoreGallery: React.FC<StoreGalleryProps> = ({ data }) => {
	const _data = React.useMemo(() => data, [data]);

	return (
		<div>
			<div>Products</div>
			<ItemContainer>
				{_data &&
					map(_data, (item: any, i: number) => (
						<StoreGalleryItem key={i} item={item} />
					))}
			</ItemContainer>
		</div>
	);
};

export default React.memo(StoreGallery);
