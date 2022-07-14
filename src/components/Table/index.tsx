import { Table as TableAntd, TableProps } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useState } from 'react';
interface DataType {
	key: React.Key;
	name: string;
	price: number;
	desc: string;
	status: string;
}
type Props = {
	columns: ColumnsType<DataType>;
	data: any[];
};

const Table = ({ columns, data }: Props) => {
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

	const onChange: TableProps<DataType>['onChange'] = (
		pagination,
		filters,
		sorter,
		extra
	) => {
		console.log('params', pagination, filters, sorter, extra);
	};
	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		console.log('selectedRowKeys changed: ', selectedRowKeys);
		setSelectedRowKeys(newSelectedRowKeys);
	};
	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};
	return (
		<TableAntd
			columns={columns}
			dataSource={data}
			onChange={onChange}
			rowSelection={rowSelection}
		/>
	);
};
export default Table;

export enum Columns {
	TITLE = 'Tên sản phẩm',
	PRICE = 'Thành tiền',
	DESC = 'Mô tả',
	ACTIONS = 'Thao tác',
}
