import {
	SearchOutlined,
	EnvironmentOutlined,
	ShoppingOutlined,
} from '@ant-design/icons';
import { ContainerStyled } from '~/GlobalClasses';
import logos from '~/assets/logo/logos.png';
import {
	ContentStyled,
	LogoStyled,
	WrapperStyled,
	SearchStyled,
	ActionsStyled,
} from './Navbar';
import tracing from '~/assets/logo/tracking.svg';

const Navbar = () => {
	return (
		<WrapperStyled>
			<ContainerStyled>
				<ContentStyled>
					<LogoStyled>
						<img src={logos} alt='logo' />
					</LogoStyled>
					<SearchStyled>
						<SearchOutlined />
						<input type='search' />
					</SearchStyled>
					<ActionsStyled className='action'></ActionsStyled>
				</ContentStyled>
			</ContainerStyled>
		</WrapperStyled>
	);
};

export default Navbar;
