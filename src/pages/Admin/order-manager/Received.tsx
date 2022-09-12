import { memo } from 'react';
import { useGetOrdersQuery } from '~/api/order.api';
import Table from '~/components/Table';
import OrderConst from '~/const/order.const';
import { columns } from './OrderNew';

const Received = () => {
	const { isSuccess, data } = useGetOrdersQuery(OrderConst.DONE);
	const columnsReceived = [...columns];
	return (
		<div>
			{isSuccess && (
				<Table columns={columnsReceived} data={data} loading={false}></Table>
			)}
		</div>
	);
};

export default memo(Received);
