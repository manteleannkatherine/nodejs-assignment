import { InputNumber, Button, Card } from 'antd';
import React from 'react';
import styled from 'styled-components';
import useAppStore, { Product } from '../../store';

const ImageHolder = styled.div`
	img {
		margin: 0 auto;
	}
`;

const ItemName = styled.div`
	font-weight: 500;
	padding-top: 15px;
	font-size: 12px;
	color: #525252;
`;

const PriceTag = styled.div`
	font-size: 13px;
	font-weight: 800;
	padding-top: 15px;
`;

const ItemBox = styled.div`
	background-color: #fff;
	padding: 1rem;
	box-shadow: 0 3px 13px -5px #dedede;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 2px solid transparent;
`;

const InputNumberStyled = styled(InputNumber)`
	display: block;
	width: 100%;
	margin-top: 10px;
	margin-bottom: 10px;
`;

interface StoreGalleryItemProps {
	item: any;
}

const StoreGalleryItem: React.FC<StoreGalleryItemProps> = ({ item }) => {
	const addItemToCart = useAppStore((state) => state.addToCart);

	const [quantity, setQuantity] = React.useState<number>(1);

	const handleAddToCart = React.useCallback(
		(item: Product, qty: number) => addItemToCart(item, qty),
		[]
	);

	const parse = (val: any) => parseInt(val);

	return (
		<ItemBox>
			<div>
				<ImageHolder>
					<img src={item.image} style={{ maxHeight: 90 }} />
				</ImageHolder>
				<ItemName>{item.name}</ItemName>
				<PriceTag>${item.price}</PriceTag>
			</div>
			<div>
				<InputNumberStyled
					min={1}
					defaultValue={quantity}
					onChange={(e) => setQuantity(parse(e))}
				/>
				<Button
					type="primary"
					size="middle"
					onClick={() => handleAddToCart(item, quantity)}>
					Add To Cart
				</Button>
			</div>
		</ItemBox>
	);
};

export default React.memo(StoreGalleryItem);
