import { useQuery } from '@apollo/client';
import produce from 'immer';
import { sumBy } from 'lodash';
import { useState } from 'react';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { GET_ORDERS } from '../queries/order.queries';

export interface Product {
	id: string;
	name: string;
	price: number;
	image: string;
}

export interface Order {
	quantity: number;
	totalPrice: number;
	productId: string;
	product: Product;
}

export interface OrderHistory {
	quantity: number;
	totalPrice: number;
	customer: string;
}

export type AppStore = {
	cart: Order[];
	orders: OrderHistory[];
	totalAmount: number;
	addToCart: (item: Product, qty: number) => void;
	updateCart: (item: Product, qty: number) => void;
	deleteFromCart: (item: Product) => void;
	clearCart: () => void;
	getHistory: () => void;
};

const useAppStore = create<AppStore>(
	persist(
		(set) => ({
			cart: [],
			orders: [],
			totalAmount: 0,
			addToCart: (item, qty) =>
				set((state) =>
					produce(state, (draft) => {
						const indx = state.cart.findIndex((i) => i.productId === item.id);

						if (indx < 0) {
							const order: Order = {
								quantity: qty,
								productId: item.id,
								product: item,
								totalPrice: item.price * qty,
							};

							draft.cart = [...state.cart, order];
							draft.totalAmount = state.totalAmount + order.totalPrice;
						} else {
							const existing = draft.cart[indx];
							const order: Order = {
								quantity: existing.quantity + qty,
								productId: item.id,
								product: item,
								totalPrice: item.price * (existing.quantity + qty),
							};

							draft.cart[indx] = order;
							draft.totalAmount = state.totalAmount + order.totalPrice;
						}
					})
				),
			updateCart: (item, qty) =>
				set((state) =>
					produce(state, (draft) => {
						const indx = state.cart.findIndex((i) => i.productId === item.id);

						const order: Order = {
							quantity: qty,
							productId: item.id,
							product: item,
							totalPrice: item.price * qty,
						};

						draft.cart[indx] = order;
						draft.totalAmount = sumBy(draft.cart, 'totalPrice');
					})
				),
			deleteFromCart: (item) =>
				set((state) =>
					produce(state, (draft) => {
						const indx = state.cart.findIndex((i) => i.productId === item.id);
						
						draft.cart.splice(indx, 1);
						draft.totalAmount = sumBy(draft.cart, 'totalPrice');
					})
				),
			clearCart: () =>
				set((state) =>
					produce(state, (draft) => {
						draft.cart = [];
						draft.totalAmount = 0;
					})
				),
			getHistory: () => {
				set((state) => 
					produce(state, (draft) => {
						const { data } = useQuery(GET_ORDERS);
						const [order, setOrders] = useState<OrderHistory[]>();

						setOrders(data);
						state.orders = order || [];
					})
				)
			}
		}),

		{ name: 'app-store-persist' }
	)
);

export default useAppStore;
