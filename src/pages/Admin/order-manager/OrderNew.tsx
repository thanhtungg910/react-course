import {
	useGetOrdersQuery,
	useRemoveOrderMutation,
	useUpdateOrderMutation,
} from '~/api/order.api';
import Table from '~/components/Table';
import moment from 'moment';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Button, Tag } from 'antd';
import { ProductType } from '~/types/product.type';
import React from 'react';
import OrderConst from '~/const/order.const';

export const columns = [
	{
		key: '1',
		title: '#',
		dataIndex: 'id',
		render: (_: ProductType, item: ProductType, index: number) => {
			return <h1>{index + 1}</h1>;
		},
	},
	{ key: '2', title: 'Tên khách hàng', dataIndex: 'user_name' },
	{ key: '3', title: 'Email', dataIndex: 'email' },
	{ key: '4', title: 'Phone', dataIndex: 'phone' },
	{ key: '5', title: 'Địa chỉ nhận hàng', dataIndex: 'delivery_address' },
	{
		key: '6',
		title: 'Thanh toán khi nhận hàng',
		dataIndex: 'payment_on_delivery',
		render: (_item: boolean) => {
			return (
				<>
					{' '}
					{_item ? (
						<Tag color='green'>Payment on delivery</Tag>
					) : (
						<Tag color='Blue'>Pay card</Tag>
					)}
				</>
			);
		},
	},
	{
		key: '7',
		title: 'Ngày đặt',
		dataIndex: 'createAt',
		render: (_item: string) => {
			return <>{moment(_item).format('MMMM Do YYYY, h:mm:ss a')}</>;
		},
	},
	{
		key: '8',
		title: 'Sản phẩm',
		dataIndex: 'productsOrder',
		render: (_item: any) => {
			return (
				<ul>
					{_item.map((item: ProductType, index: React.Key) => (
						<li key={item.id} className={`${index === 1 && 'border-t-2'}`}>
							<h2>
								<span className='font-semibold'>Tên sản phẩm:</span> {item.name}
							</h2>
							<h2>
								<span className='font-semibold'>Số lượng:</span> {item.quantity}
							</h2>
						</li>
					))}
				</ul>
			);
		},
	},

	{
		key: '10',
		title: '',
		dataIndex: 'id',
		render: (_id: number, item: any) => {
			return (
				<Link
					to={`${_id}?user_name=${item.user_name}`}
					className='text-[#00B0D7]'
				>
					<EyeOutlined style={{ fontSize: '1.5rem' }} />
				</Link>
			);
		},
	},
];

const OrderNew = () => {
	const { isSuccess, data } = useGetOrdersQuery(OrderConst.NEW_ORDER);
	const [update] = useUpdateOrderMutation();
	const [remove] = useRemoveOrderMutation();
	const columnsOrderNew = [
		...columns,
		{
			key: '9',
			title: 'Trạng thái',
			dataIndex: 'id',
			render: (_item: string) => {
				const handlerAccessOrder = async () => {
					await update({ id: _item, accessOrder: OrderConst.ACCESS_ORDER });
				};
				const handlerCancelOrder = async () => {
					await remove({ id: _item, accessOrder: OrderConst.CANCEL });
				};

				return (
					<>
						<Button onClick={() => handlerAccessOrder()}>Xác nhận</Button>
						<Button
							danger
							className='mt-2'
							onClick={() => handlerCancelOrder()}
						>
							Hủy
						</Button>
					</>
				);
			},
		},
	].sort((a: any, b: any) => a.key - b.key);
	return (
		<div>
			{isSuccess && (
				<Table columns={columnsOrderNew} data={data} loading={false}></Table>
			)}
		</div>
	);
};

export default OrderNew;
