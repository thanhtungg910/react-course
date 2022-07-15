import styled from 'styled-components';
import Accessory from '~/components/Accessory';
import Button from '~/components/Button';
import Card from '~/components/Card';
import { ContainerStyled, mixins } from '~/GlobalClasses';
import BlockTopHome from '~/modules/home/BlockTopHome/BlockTopHome';
export const FeaturedProduct = styled.div`
	margin-top: 20px;
`;
export const ProductListStyled = styled.div`
	${mixins.flexAlignCenter}
	gap: 20px;
	flex-wrap: wrap;
	margin-top: 10px;
`;
export const HeaderFeaturedStyled = styled.div`
	h2 {
		font-style: normal;
		font-weight: 400;
		font-size: 22px;
		line-height: 40px;
	}
`;
export const AccessoryStyled = styled(FeaturedProduct)``;
export const HeaderAccessoryStyled = styled(HeaderFeaturedStyled)`
	${mixins.flexAlignCenter}
	justify-content: space-between;
`;
export const AccessoryList = styled(ProductListStyled)``;
const Home = () => {
	return (
		<ContainerStyled>
			<>
				<BlockTopHome></BlockTopHome>
				<FeaturedProduct>
					<HeaderFeaturedStyled>
						<h2>ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
					</HeaderFeaturedStyled>
					<ProductListStyled>
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</ProductListStyled>
				</FeaturedProduct>
				<AccessoryStyled>
					<HeaderAccessoryStyled>
						<h2>Phụ kiện</h2>
						<Button color='black' bgHover='#f9f8f8'>
							Xem tất cả
						</Button>
					</HeaderAccessoryStyled>
					<AccessoryList>
						<Accessory
							bgColor='rgb(252, 165, 165)'
							img='https://cdn2.cellphones.com.vn/180x/https://cellphones.com.vn/media/icons/category/cate-868.svg'
							title='CPU'
						/>
						<Accessory
							title='Mainboard'
							bgColor='rgb(249, 168, 212)'
							img='https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/m/a/mainboard_1.png'
						/>
					</AccessoryList>
				</AccessoryStyled>
				<AccessoryStyled>
					<HeaderAccessoryStyled>
						<h2>Linh kiện máy tính</h2>
						<Button color='black' bgHover='#f9f8f8'>
							Xem tất cả
						</Button>
					</HeaderAccessoryStyled>
					<AccessoryList>
						<Accessory
							bgColor='rgb(252, 165, 165)'
							img='https://cdn2.cellphones.com.vn/180x/https://cellphones.com.vn/media/icons/category/cate-868.svg'
							title='CPU'
						/>
						<Accessory
							title='Mainboard'
							bgColor='rgb(249, 168, 212)'
							img='https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/m/a/mainboard_1.png'
						/>
					</AccessoryList>
				</AccessoryStyled>
			</>
		</ContainerStyled>
	);
};
export default Home;
