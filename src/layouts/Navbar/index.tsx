/* eslint-disable indent */
import {
	EnvironmentOutlined,
	ShoppingOutlined,
	UserOutlined,
} from '@ant-design/icons';
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
import { useEffect, useState } from 'react';
import SignInPage from '~/features/user/sign-in/SignInPage';
import SignUpPage from '~/features/user/sign-up/SignUpPage';
import { useAppSelector } from '~/app/hooks';
import userSelector from '~/features/user/userSelector';
export enum Tab {
	SIGN_IN = 1,
	SIGN_UP = 2,
}
const Navbar = () => {
	const [dialog, setDialog] = useState(Tab.SIGN_IN);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const user = useAppSelector((state) => userSelector(state));

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
				break;
		}
	};

	return (
		<>
			{Dialog()}
			<WrapperStyled>
				<ContainerStyled>
					<ContentStyled>
						<LogoStyled>
							<img src={logos} alt='logo' />
						</LogoStyled>
						<SearchInput />
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
							{user?.user?.email || (
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
