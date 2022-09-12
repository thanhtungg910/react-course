/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs } from 'antd';
import OrderConst from '~/const/order.const';
import OrderCancel from './OrderCancel';

import OrderNew from './OrderNew';
import Received from './Received';
import Shipping from './Shipping';
import WaitShip from './WaitShip';
const { TabPane } = Tabs;

const OrderPageManager = () => {
	return (
		<>
			<Tabs defaultActiveKey='1'>
				<TabPane tab='Đơn hàng mới' key={OrderConst.NEW_ORDER}>
					<OrderNew />
				</TabPane>
				<TabPane tab='Chờ vận chuyển' key={OrderConst.WAIT_SHIPPER}>
					<WaitShip />
				</TabPane>
				<TabPane tab='Đang vận chuyển' key={OrderConst.SHIPPING}>
					<Shipping />
				</TabPane>
				<TabPane tab='Nhận hàng thành công' key={OrderConst.DONE}>
					<Received />
				</TabPane>
				<TabPane tab='Đơn đã hủy' key={OrderConst.CANCEL}>
					<OrderCancel />
				</TabPane>
			</Tabs>
		</>
	);
};

export default OrderPageManager;
