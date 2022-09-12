import { Button } from 'antd';
import { memo } from 'react';
import { useGetOrdersQuery, useUpdateOrderMutation } from '~/api/order.api';
import Table from '~/components/Table';
import OrderConst from '~/const/order.const';
import { columns } from './OrderNew';

const WaitShip = () => {
	const { isSuccess, data } = useGetOrdersQuery(OrderConst.ACCESS_ORDER);
	const [update] = useUpdateOrderMutation();
	const columnsWaitShip = [
		...columns,
		{
			key: '9',
			title: 'Trạng thái',
			dataIndex: 'id',
			render: (_item: string) => {
				const handlerAccessOrder = async () => {
					await update({ id: _item, accessOrder: OrderConst.SHIPPING });
				};

				return (
					<>
						<Button onClick={() => handlerAccessOrder()}>
							Shipper đã lấy sản phẩm
						</Button>
					</>
				);
			},
		},
	].sort((a: any, b: any) => a.key - b.key);
	return (
		<div>
			{isSuccess && (
				<Table columns={columnsWaitShip} data={data} loading={false}></Table>
			)}
		</div>
	);
};

export default memo(WaitShip);
