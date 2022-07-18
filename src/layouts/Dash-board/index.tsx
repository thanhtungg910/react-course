import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React, { memo, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '~/app/hooks';
import images from '~/assets/logo';
import Button from '~/components/Button';
import Dropdown from '~/components/Dropdown';
import Search from '~/components/Search';
import SignOut from '~/features/user/sign-out';
import userSelector from '~/features/user/userSelector';

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = [
	'Điện thoại',
	'Laptop',
	'Máy tính bảng',
	'Âm thanh',
].map((key) => ({
	key,
	label: <Link to='/dash-board/product-manager'>{key}</Link>,
}));

const items2: MenuProps['items'] = [
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
].map((icon, index) => {
	const key = String(index + 1);

	return {
		key: `sub${key}`,
		icon: React.createElement(icon),
		label: `subnav ${key}`,

		children: new Array(4).fill(null).map((_, j) => {
			const subKey = index * 4 + j + 1;
			return {
				key: subKey,
				label: `option${subKey}`,
			};
		}),
	};
});
const menu = (
	<Menu
		items={[
			{
				key: '2',
				label: (
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.aliyun.com'
					>
						Quản lí tài khoản
					</a>
				),
			},
			{
				key: '3',
				label: <SignOut>Đăng xuất</SignOut>,
			},
		]}
	/>
);
const DashBoard = () => {
	const [collapsed, setCollapsed] = useState(false);
	const user = useAppSelector((state) => userSelector(state));
	const navigate = useNavigate();

	if (!user?.isLogin) {
		navigate('/');
	}

	return (
		<>
			<Layout>
				<Header className='flex flex-1 justify-between'>
					<div className='p-2'>
						<img src={images.logo} alt='logo' />
					</div>
					<Search className='text-black' />
					<div className='account'>
						{user.isLogin && (
							<Dropdown
								overlay={menu}
								placement='bottomRight'
								trigger={['click']}
							>
								<Button color={'#fff'}>Xin chào {user?.user?.email}</Button>
							</Dropdown>
						)}
					</div>
				</Header>
				<Layout>
					<Sider
						width={200}
						className='site-layout-background'
						collapsible
						collapsed={collapsed}
						onCollapse={(value) => setCollapsed(value)}
					>
						<Menu
							mode='inline'
							defaultSelectedKeys={['1']}
							style={{ height: '100%', borderRight: 0 }}
							items={items1}
						/>
					</Sider>
					<Layout style={{ padding: '0 24px 24px' }}>
						<Content
							className='site-layout-background'
							style={{
								padding: 24,
								minHeight: 280,
								margin: '16px 0',
							}}
						>
							<Outlet />
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</>
	);
};

export default memo(DashBoard);
