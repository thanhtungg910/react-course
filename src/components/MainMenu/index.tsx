import { memo } from 'react';
import styled from 'styled-components';
import images from '~/assets/logo';
import Button from '../Button';

const MainMenuStyed = styled.div`
	width: 205px;
`;
const MAIN_MENU = [
	{ title: 'Dien thoai', icon: images.phonepng, rightIcon: images.arrowLeft },
	{ title: 'Laptop', icon: images.laptop, rightIcon: images.arrowLeft },
	{
		title: 'Máy tính bảng',
		icon: images.tablet,
		rightIcon: images.arrowLeft,
	},
	{ title: 'Âm thanh', icon: images.tainghe, rightIcon: images.arrowLeft },
	{ title: 'Đồng hồ', icon: images.tainghe, rightIcon: images.arrowLeft },
	{
		title: 'Nhà thông minh phụ kiện',
		icon: images.home,
		rightIcon: images.arrowLeft,
	},
	{
		title: 'PC - Màn hình',
		icon: images.pc,
		rightIcon: images.arrowLeft,
	},
	{ title: 'Tivi', icon: images.tivi, rightIcon: images.arrowLeft },
	{ title: 'Thu cũ', icon: images.thucu, rightIcon: images.arrowLeft },
	{ title: 'Hàng cũ', icon: images.hangcu, rightIcon: images.arrowLeft },
	{ title: 'Khuyến mãi', icon: images.khuyenmai, rightIcon: images.arrowLeft },
	{
		title: 'Tin công nghệ',
		icon: images.news,
		rightIcon: images.arrowLeft,
	},
];

const MainMenu = () => {
	return (
		<MainMenuStyed>
			{MAIN_MENU.map((item, index) => (
				<Button
					key={index}
					color={'black'}
					icon={item.icon}
					rightIcon={item.rightIcon}
					bgHover='#f3f4f6'
				>
					{item.title}
				</Button>
			))}
		</MainMenuStyed>
	);
};

export default memo(MainMenu);
