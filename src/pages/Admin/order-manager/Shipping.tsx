import { memo } from 'react';
import { useGetOrdersQuery } from '~/api/order.api';
import Table from '~/components/Table';
import OrderConst from '~/const/order.const';
import { columns } from './OrderNew';

const Shipping = () => {
	const { isSuccess, data } = useGetOrdersQuery(OrderConst.SHIPPING);
	const columnsShipping = [...columns];
	return (
		<div>
			{isSuccess && (
				<Table columns={columnsShipping} data={data} loading={false}></Table>
			)}
		</div>
	);
};

export default memo(Shipping);
