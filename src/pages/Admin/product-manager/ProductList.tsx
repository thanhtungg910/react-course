/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { setStatusFetchProduct } from '~/api/api';
import { useGetProductsQuery } from '~/api/product.api';
import PageHeader from '~/components/PageHeader';
import Table, { Columns } from '~/components/Table';
import { ProductType } from '~/types/product.type';

const columns = [
	{
		key: '1',
		title: '#',
		dataIndex: 'id',
		render: (_: ProductType, item: ProductType, index: number) => {
			return <h1>{index + 1}</h1>;
		},
	},
	{ key: '2', title: Columns.TITLE, dataIndex: 'name' },
	{ key: '3', title: Columns.PRICE, dataIndex: 'originalPrice' },
	{ key: '4', title: Columns.SALE_OFF_PRICE, dataIndex: 'saleOffPrice' },
	{ key: '5', title: Columns.DESC, width: '10%', dataIndex: 'description' },
	{
		key: '6',
		title: 'Trạng thái',
		render: (item: ProductType) => {
			let checked: boolean = item.status;
			const onChange = async (value: boolean) => {
				checked = value;
				await setStatusFetchProduct({
					id: item.id,
					status: value,
				});
			};
			return <Switch defaultChecked={checked} onChange={onChange} />;
		},
	},
	{
		key: '7',
		title: Columns.ACTIONS,
		render: (item: ProductType) => {
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
	if (isError) {
		return <h1>Error</h1>;
	}

	return (
		<div>
			<PageHeader
				title='Điện thoại'
				iconButton={<PlusOutlined size={30} />}
				href='product-add'
			/>
			{isSuccess && data && data.length > 0 && (
				<Table columns={columns} data={data}></Table>
			)}
		</div>
	);
};

export default ProductList;
