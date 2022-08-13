/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs } from 'antd';
import OrderConst from '~/const/order.const';

import OrderNew from './OrderNew';
const { TabPane } = Tabs;

const OrderPageManager = () => {
	return (
		<>
			<Tabs defaultActiveKey='1'>
				<TabPane tab='Đơn hàng mới' key={OrderConst.NEW_ORDER}>
					<OrderNew />
				</TabPane>
				<TabPane tab='Chờ vận chuyển' key={OrderConst.WAIT_SHIPPER}>
					Chờ vận chuyển
				</TabPane>
				<TabPane tab='Đang vận chuyển' key={OrderConst.SHIPPING}>
					Content of Tab Pane 2
				</TabPane>
				<TabPane tab='Nhận hàng thành công' key={OrderConst.DONE}>
					Content of Tab Pane 3
				</TabPane>
				<TabPane tab='Đơn đã hủy' key={OrderConst.CANCEL}>
					Content of Tab Pane 3
				</TabPane>
			</Tabs>
		</>
	);
};

export default OrderPageManager;
