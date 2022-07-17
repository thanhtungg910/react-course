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
import { useState } from 'react';
import SignInPage from '~/features/sign-in/SignInPage';

const Navbar = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	return (
		<>
			<SignInPage show={isModalVisible} setShow={setIsModalVisible} />
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
							<Button
								color='white'
								icon={<UserOutlined style={{ fontSize: '26px' }} />}
								onClick={showModal}
							>
								Đăng
								<br /> nhập
							</Button>
						</ActionsStyled>
					</ContentStyled>
				</ContainerStyled>
			</WrapperStyled>
		</>
	);
};

export default Navbar;
