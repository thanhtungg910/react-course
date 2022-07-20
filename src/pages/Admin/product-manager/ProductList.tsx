/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { Select, Space, Switch } from 'antd';
import { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setStatusFetchProduct } from '~/api/api';
import { useGetCategoriesQuery } from '~/api/category.api';
import { useGetByIdCategoryMutation } from '~/api/product.api';
import PageHeader from '~/components/PageHeader';
import Table, { Columns } from '~/components/Table';
import { Category } from '~/types/category.type';
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
	const [filterData, { isError, isSuccess, data }] =
		useGetByIdCategoryMutation<any>();

	const {
		isError: isErrorCategory,
		isSuccess: isSuccessCategory,
		data: dataCategory,
		isLoading,
	} = useGetCategoriesQuery('Categories');

	if (isError || isErrorCategory) {
		return <h1>Error</h1>;
	}

	useEffect(() => {
		filterData();
	}, []);

	const handlerOnChange = useCallback((e: string) => {
		filterData(e);
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
						defaultValue={'Tất cả'}
						style={{ width: 200 }}
						allowClear
						onChange={handlerOnChange}
					>
						{isSuccessCategory &&
							dataCategory.map((item: Category) => (
								<Select.Option key={item.id} value={item.id}>
									{item.name}
								</Select.Option>
							))}
					</Select>
				</Space>
			</div>
			<Table loading={isLoading} columns={columns} data={data}></Table>
		</div>
	);
};
export default ProductList;
