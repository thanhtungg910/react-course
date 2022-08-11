/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
import {
	EnvironmentOutlined,
	ShoppingOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';

import { ContainerStyled } from '~/GlobalClasses';
import logos from '~/assets/logo/logos.png';
import {
	ContentStyled,
	LogoStyled,
	WrapperStyled,
	ActionsStyled,
} from './Navbar';
import tracing from '~/assets/logo/tracking.svg';
import Button from '~/components/Button';
import SearchInput from '~/components/Search';
import { useAppSelector } from '~/app/hooks';
import userSelector from '~/features/user/userSelector';
import Dropdown from '~/components/Dropdown';
import SignOut from '~/features/user/sign-out';
import { useDebounce } from '~/hooks/useDebounce';
import { searchProduct } from '~/api/api';

export enum Tab {
	SIGN_IN = 1,
	SIGN_UP = 2,
}

export const menu = (
	<Menu
		items={[
			{
				key: '1',
				label: (
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.antgroup.com'
					>
						Đơn hàng của tôi
					</a>
				),
			},
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

const Navbar = () => {
	const [textSearch, setTextSearch] = useState('');
	const [visibility, setVisibility] = useState(false);
	const [products, setProducts] = useState([]);
	const user = useAppSelector((state) => userSelector(state));
	const debounceValue = useDebounce(textSearch, 800);
	useEffect(() => {
		if (!debounceValue.trim()) {
			return;
		}
		const handlerSearch = async () => {
			const { data }: any = await searchProduct(debounceValue);
			setProducts(data);
			setVisibility(true);
		};
		handlerSearch();
	}, [debounceValue]);

	return (
		<>
			<WrapperStyled>
				<ContainerStyled>
					<ContentStyled>
						<LogoStyled to='/'>
							<img src={logos} alt='logo' />
						</LogoStyled>
						<SearchInput
							data={products}
							onChange={setTextSearch}
							visibility={visibility}
							setVisibility={setVisibility}
						/>
						<ActionsStyled className='action'>
							<Button color='white'>
								Gọi mua hàng <br />
								1800.2097
							</Button>
							<Button
								color='white'
								icon={<EnvironmentOutlined style={{ fontSize: '26px' }} />}
							>
								Cửa hàng
								<br />
								gần bạn
							</Button>
							<Button color='white' icon={tracing}>
								Tra cứu
								<br />
								đơn hàng
							</Button>
							<Button
								href='cart'
								color='white'
								icon={<ShoppingOutlined style={{ fontSize: '26px' }} />}
							>
								Giỏ <br /> hàng
							</Button>
							{(user.isLogin && (
								<Dropdown
									overlay={menu}
									placement='bottomRight'
									trigger={['click']}
								>
									<Button color={'#fff'}>{user?.user?.email}</Button>
								</Dropdown>
							)) || (
								<Button
									color='white'
									icon={<UserOutlined style={{ fontSize: '26px' }} />}
									href='/sign-in'
								>
									Đăng
									<br /> nhập
								</Button>
							)}
						</ActionsStyled>
					</ContentStyled>
				</ContainerStyled>
			</WrapperStyled>
		</>
	);
};

export default Navbar;
