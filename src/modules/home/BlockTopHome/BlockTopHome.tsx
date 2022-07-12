import styled from 'styled-components';
import MainMenu from '~/components/MainMenu';
import { mixins } from '~/GlobalClasses';
const BlockTopStyled = styled.div`
	${mixins.flexCenter}
	justify-content: space-between;
	margin-top: 20px;
	column-gap: 10px;
`;
const BannerStyled = styled.div`
	flex: 1;
`;

const BlockTopHome = () => {
	return (
		<BlockTopStyled>
			<MainMenu />
			<BannerStyled>
				<img
					src='https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/fujitsuu.png'
					alt='Logo'
				/>
			</BannerStyled>
		</BlockTopStyled>
	);
};

export default BlockTopHome;
