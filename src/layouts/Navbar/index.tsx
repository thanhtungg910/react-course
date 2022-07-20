/* eslint-disable indent */
import {
	EnvironmentOutlined,
	ShoppingOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { lazy, useEffect, useState } from 'react';

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

const SignInPage = lazy(() => import('~/features/user/sign-in/SignInPage'));
const SignUpPage = lazy(() => import('~/features/user/sign-up/SignUpPage'));
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
	const [products, setProducts] = useState([]);
	const user = useAppSelector((state) => userSelector(state));
	const [dialog, setDialog] = useState(Tab.SIGN_IN);
	const [isModalVisible, setIsModalVisible] = useState(false);

	useEffect(() => {
		if (user?.isLogin) {
			setIsModalVisible(false);
		}
	}, [user]);

	const showModal = () => {
		setIsModalVisible(true);
	};
	const handlerSetDialog = () => {
		setDialog(Tab.SIGN_UP);
	};
	const Dialog = () => {
		switch (dialog) {
			case Tab.SIGN_IN:
				return (
					<SignInPage
						show={isModalVisible}
						setShow={setIsModalVisible}
						onClick={handlerSetDialog}
					/>
				);
			case Tab.SIGN_UP:
				return <SignUpPage show={isModalVisible} setShow={setIsModalVisible} />;
			default:
				return <></>;
		}
	};
	const debounceValue = useDebounce(textSearch, 800);
	useEffect(() => {
		if (!debounceValue.trim()) {
			return;
		}
		const handlerSearch = async () => {
			const { data }: any = await searchProduct(debounceValue);
			setProducts(data);
		};
		handlerSearch();
	}, [debounceValue]);

	return (
		<>
			{Dialog()}
			<WrapperStyled>
				<ContainerStyled>
					<ContentStyled>
						<LogoStyled>
							<img src={logos} alt='logo' />
						</LogoStyled>
						<SearchInput data={products} onChange={setTextSearch} />
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
									onClick={showModal}
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
