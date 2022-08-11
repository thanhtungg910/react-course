/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from 'react';
import { Table as TableAntd, TableProps } from 'antd';
import { ColumnsType } from 'antd/lib/table';
interface DataType {
	key: React.Key;
	name: string;
	price: number;
	desc: string;
	status: string;
}
type NewType = {
	columns: ColumnsType<DataType> | any;
	data: any[];
	header?: string | any;
	loading: boolean;
};

type Props = NewType;

const Table = ({ columns, data, header, ...passProps }: Props) => {
	const onChange: TableProps<DataType>['onChange'] = (
		pagination,
		filters,
		sorter,
		extra
	) => {
		// console.log('params', pagination, filters, sorter, extra);
	};
	return (
		<TableAntd
			{...passProps}
			rowKey={'id'}
			columns={columns}
			dataSource={data}
			onChange={onChange}
			title={() => header}
		/>
	);
};
export default memo(Table);

export enum Columns {
	TITLE = 'Tên sản phẩm',
	PRICE = 'Thành tiền',
	SALE_OFF_PRICE = 'Giá khuyến mại',
	DESC = 'Mô tả',
	ACTIONS = 'Thao tác',
}
