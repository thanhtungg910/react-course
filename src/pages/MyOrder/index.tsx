import { Button, Col, Row, Tabs, Tag } from 'antd';
import moment from 'moment';
import { memo } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {
	useGetOrdersQuery,
	useRemoveOrderMutation,
	useUpdateOrderMutation,
	useUserGetOrderQuery,
} from '~/api/order.api';
import { useAppSelector } from '~/app/hooks';
import Table from '~/components/Table';
import OrderConst from '~/const/order.const';
import userSelector from '~/features/user/userSelector';
import { ContainerStyled } from '~/GlobalClasses';
import { ProductType } from '~/types/product.type';
const { TabPane } = Tabs;

const MyOrder = () => {
	const auth = useAppSelector((state) => userSelector(state));
	if (!auth.isLogin) {
		return <Navigate to='/' />;
	}
	const { isSuccess, data } = useUserGetOrderQuery(auth?.user.id);
	const [update] = useUpdateOrderMutation();
	const [remove] = useRemoveOrderMutation();
	const columnsMyOrder = [
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
									<span className='font-semibold'>Tên sản phẩm:</span>{' '}
									{item.name}
								</h2>
								<h2>
									<span className='font-semibold'>Số lượng:</span>{' '}
									{item.quantity}
								</h2>
							</li>
						))}
					</ul>
				);
			},
		},
		{
			key: '9',
			title: 'Trạng thái',
			dataIndex: 'id',
			render: (id: string, item: any) => {
				const handlerAccessOrder = async () => {
					await update({ id: id, accessOrder: OrderConst.DONE });
				};
				const handlerCancelOrder = async () => {
					await remove({ id: id, accessOrder: OrderConst.CANCEL });
				};

				return (
					<>
						{+item.accessOrder === OrderConst.SHIPPING ? (
							<Button
								type='primary'
								onClick={() => handlerAccessOrder()}
								color='#D70018'
							>
								Đã nhận được hàng
							</Button>
						) : +item.accessOrder === OrderConst.DONE ? (
							<Tag color='geekblue'>Đánh giá sản phẩm</Tag>
						) : (
							<Tag color='orange'>Đang xử lý</Tag>
						)}
						{+item.accessOrder === OrderConst.NEW_ORDER && (
							<Button
								danger
								className='mt-2'
								onClick={() => handlerCancelOrder()}
							>
								Hủy
							</Button>
						)}
					</>
				);
			},
		},
	].sort((a: any, b: any) => a.key - b.key);
	return (
		<ContainerStyled>
			<Row gutter={20} className='mt-7'>
				<Col span={24}>
					<Tabs>
						<TabPane tab='Đơn hàng của tôi' key='1'>
							{isSuccess && (
								<Table
									columns={columnsMyOrder}
									data={data}
									loading={false}
								></Table>
							)}
						</TabPane>
					</Tabs>
				</Col>
			</Row>
		</ContainerStyled>
	);
};

export default memo(MyOrder);
