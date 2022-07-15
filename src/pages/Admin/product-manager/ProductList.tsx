import { PlusOutlined } from '@ant-design/icons';
import PageHeader from '~/components/PageHeader';
import Table from '~/components/Table';

const ProductList = () => {
	const columns = [
		{ title: 'Name', dataIndex: 'name' },
		{ title: 'Price', dataIndex: 'price' },
		{ title: 'DESC', dataIndex: 'desc' },
	];
	const data = [
		{
			key: '1',
			name: 'John Brown',
			price: 32,
			desc: 'New York No. 1 Lake Park',
		},
		{
			key: '2',
			name: 'Jim Green',
			price: 42,
			desc: 'London No. 1 Lake Park',
		},
		{
			key: '3',
			name: 'Joe Black',
			price: 32,
			desc: 'Sidney No. 1 Lake Park',
		},
	];
	return (
		<div>
			<PageHeader
				title='Điện thoại'
				iconButton={<PlusOutlined size={30} />}
				href='product-add'
			/>
			<Table columns={columns} data={data}></Table>
		</div>
	);
};

export default ProductList;
