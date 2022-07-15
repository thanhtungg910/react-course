import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { useGetProductsQuery } from '~/api/product.api';
import PageHeader from '~/components/PageHeader';
import Table from '~/components/Table';

const columns = [
	{ key: '1', title: '#', dataIndex: 'id' },
	{ key: '2', title: 'Name', dataIndex: 'name' },
	{ key: '3', title: 'Price', dataIndex: 'originalPrice' },
	{ key: '4', title: 'Price off', dataIndex: 'saleOffPrice' },
	{ key: '5', title: 'Description', dataIndex: 'description' },
	{
		key: '6',
		title: 'Status',
		render: (_: any) => {
			const onChange = (checked: boolean) => {
				console.log(`switch to ${checked}`);
			};
			return <Switch defaultChecked onChange={onChange} />;
		},
	},
	{
		key: '7',
		title: 'Action',
		render: (_: any) => {
			return <EditOutlined />;
		},
	},
];
const ProductList = () => {
	const { isError, isSuccess, data, ...args } = useGetProductsQuery('Products');
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
