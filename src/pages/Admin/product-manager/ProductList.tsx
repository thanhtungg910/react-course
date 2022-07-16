/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { Select, Space, Switch } from 'antd';
import { useCallback } from 'react';
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
	{
		key: '5',
		title: Columns.DESC,
		render: (item: ProductType) => {
			return (
				<p className='w-60 text-ellipsis whitespace-nowrap overflow-hidden'>
					{item.description}
				</p>
			);
		},
	},
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
	const handlerOnChange = useCallback((e: string) => {
		console.log(e);
	}, []);
	return (
		<div>
			<PageHeader
				title='Điện thoại'
				iconButton={<PlusOutlined size={30} />}
				href='product-add'
			/>
			<div className='flex items-center gap-5'>
				<h2 className='self-end text-base font-normal'>Bộ lọc: </h2>
				<Space direction='vertical'>
					<h2>Danh mục sản phẩm </h2>
					<Select
						defaultValue='lucy'
						style={{ width: 200 }}
						allowClear
						onChange={handlerOnChange}
					>
						<Select.Option value='lucy'>Lucy</Select.Option>
						<Select.Option value='jack'>jack</Select.Option>
						<Select.Option value='disabled'>disabled</Select.Option>
					</Select>
				</Space>
			</div>
			{isSuccess && data && data.length > 0 && (
				<Table columns={columns} data={data}></Table>
			)}
		</div>
	);
};
export default ProductList;
