/* eslint-disable @typescript-eslint/no-explicit-any */
import { LeftOutlined } from '@ant-design/icons';
import { Col, Form, Input, Row, Tag } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import { useGetOrderQuery } from '~/api/order.api';
import Table from '~/components/Table';
import { quantity } from '~/pages/Cart';

const columns = [
	{ key: '2', title: 'Tên sản phẩm', dataIndex: 'name' },
	{ key: '3', title: 'Số lượng', dataIndex: 'quantity' },
	{ key: '4', title: 'Giá gốc', dataIndex: 'originalPrice' },
	{ key: '5', title: 'Giá khuyến mại', dataIndex: 'saleOffPrice' },
];

const DetailOrder = () => {
	const { id }: any = useParams();
	const { isSuccess, data } = useGetOrderQuery(id);
	return (
		<div>
			<Link to='/dash-board/product-manager/orders'>
				<span className='flex items-center'>
					<LeftOutlined />
					Quay lại
				</span>
			</Link>
			{isSuccess && (
				<div className='mt-10'>
					<Row gutter={20}>
						<Col span={10}>
							<Form labelCol={{ span: 8 }}>
								<Form.Item label='Tên khách hàng:'>
									<Input
										disabled
										value={data.last_name}
										size='large'
										className='text-lg font-bold'
									/>
								</Form.Item>
								<Form.Item label='Số điện thoại:'>
									<Input
										disabled
										value={data.phone}
										size='large'
										className='text-lg font-bold'
									/>
								</Form.Item>
								<Form.Item label='Email:'>
									<Input
										disabled
										value={data.email}
										size='large'
										className='text-lg font-bold'
									/>
								</Form.Item>
								<Form.Item label='Địa chỉ nhận hàng:'>
									<TextArea disabled value={data.delivery_address}></TextArea>
								</Form.Item>
								<Form.Item label='Phương thức thanh toán:'>
									{data.payment_on_delivery ? (
										<Tag color='green'>Thanh toán khi nhận hàng</Tag>
									) : (
										<Tag color='geekblue'>Pay </Tag>
									)}
								</Form.Item>
								<Form.Item label='Ngày tạo đơn hàng:'>
									<Tag color='cyan'>
										{moment(data.createAt).format('MMMM Do YYYY, h:mm:ss a')}
									</Tag>
								</Form.Item>
							</Form>
						</Col>
						<Col span={14}>
							<Table
								loading={false}
								columns={columns}
								data={data.productsOrder}
							></Table>
							<h2 className='text-lg font-bold'>
								Tổng tiền thu hộ:{' '}
								<span className='text-red-500'>
									{quantity(data.productsOrder).toLocaleString('vi', {
										style: 'currency',
										currency: 'VND',
									})}
								</span>
							</h2>
						</Col>
					</Row>
				</div>
			)}
		</div>
	);
};

export default DetailOrder;
