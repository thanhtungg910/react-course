/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tag } from 'antd';
import moment from 'moment';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useGetOrdersQuery } from '~/api/order.api';
import Table from '~/components/Table';
import { ProductType } from '~/types/product.type';
const columns = [
	{
		key: '1',
		title: '#',
		dataIndex: 'id',
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
					{_item.map((item: ProductType) => (
						<li key={item.id}>
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
		key: '9',
		title: '',
		dataIndex: 'id',
		render: (_id: number, item: any) => {
			return (
				<Link
					to={`${_id}?user_name=${item.user_name}`}
					className='text-[#00B0D7]'
				>
					<EyeOutlined />
				</Link>
			);
		},
	},
];

const OrderPageManager = () => {
	const { isSuccess, data } = useGetOrdersQuery('');

	return (
		<>
			{isSuccess && (
				<Table columns={columns} data={data} loading={false}></Table>
			)}
		</>
	);
};

export default OrderPageManager;
