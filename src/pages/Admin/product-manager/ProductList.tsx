/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { Link, Navigate } from 'react-router-dom';
import { useGetProductsQuery } from '~/api/product.api';
import PageHeader from '~/components/PageHeader';
import Table, { Columns } from '~/components/Table';

const columns = [
	{ key: '1', title: '#', dataIndex: 'id' },
	{ key: '2', title: Columns.TITLE, dataIndex: 'name' },
	{ key: '3', title: Columns.PRICE, dataIndex: 'originalPrice' },
	{ key: '4', title: Columns.SALE_OFF_PRICE, dataIndex: 'saleOffPrice' },
	{ key: '5', title: Columns.SALE_OFF_PRICE, dataIndex: 'description' },
	{
		key: '6',
		title: 'Trạng thái',
		render: (_: any) => {
			const onChange = (checked: boolean) => {
				console.log(`switch to ${checked}`);
			};
			return <Switch defaultChecked onChange={onChange} />;
		},
	},
	{
		key: '7',
		title: Columns.ACTIONS,
		render: (_: any, item: any) => {
			return (
				<Link to={'product-edit/' + item.id}>
					<EditOutlined />
				</Link>
			);
		},
	},
];
const ProductList = () => {
	const { isError, isSuccess, data } = useGetProductsQuery('Products');

	return (
		<div>
			<PageHeader
				title='Điện thoại'
				iconButton={<PlusOutlined size={30} />}
				href='product-add'
			/>
			{data && data.length > 0 && <Table columns={columns} data={data}></Table>}
		</div>
	);
};

export default ProductList;
