import HomeOutlined from '@ant-design/icons/lib/icons/HomeOutlined';
import { useQuery } from '@apollo/client';
import { Button, Table } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { GET_ORDERS } from '../../queries/order.queries';
import useAppStore, { Order } from '../../store';

const OrderHistoryPage: React.FC = () => {
	const history = useHistory();
	const orders = useAppStore((state) => state.orders);

    console.log(orders);

    const columns = [
        {
            title: 'Order ID',
            dataIndex: 'orderId',
            
        },
        {
            title: 'Customer',
            dataIndex: 'quantity',
            
        },
        {
            title: '# of items',
        },
        {
            title: 'Total Price',
            dataIndex: 'totalPrice',
        }
    ];

    const sample = [
       { orderId: 1, quantity: 2, totalPrice: 3}
    ];

	return (        
		<div>
            <div
				style={{
					textAlign: 'right',
					marginBottom: 50,
				}}>
				<Button
					type="primary"
					onClick={() => history.push('/')}
					icon={<HomeOutlined />}
					size="large">
					Back to Store
				</Button>
			</div>
            <div>
            {(orders) && (
                <div>
                    <Table
                        columns={columns}
                        dataSource={orders}
                        />
                </div>)}
            </div>
               
		</div>
	);
};

export default React.memo(OrderHistoryPage);