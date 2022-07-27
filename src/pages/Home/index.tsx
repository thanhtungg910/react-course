import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import Accessory from '~/components/Accessory';
import Button from '~/components/Button';
import Card from '~/components/Card';
import { ACCESSORY1, ACCESSORY2 } from '~/conts/accessories';
import { getProducts } from '~/features/products';
import { productSelector } from '~/features/products/productSelector';
import { ContainerStyled, mixins } from '~/GlobalClasses';
import BlockTopHome from '~/modules/home/BlockTopHome/BlockTopHome';
import { ProductType } from '~/types/product.type';
export const FeaturedProduct = styled.div`
	margin-top: 20px;
`;
export const ProductListStyled = styled.div`
	${mixins.flexAlignCenter}
	justify-content: flex-start;
	gap: 15px 5px;
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
	const dispatch = useAppDispatch();
	const { products } = useAppSelector((state) => productSelector(state));

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);
	return (
		<ContainerStyled>
			<>
				<BlockTopHome></BlockTopHome>
				<FeaturedProduct>
					<HeaderFeaturedStyled>
						<h2>ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
					</HeaderFeaturedStyled>
					<ProductListStyled>
						{products &&
							products.length > 0 &&
							products.map((item: ProductType) => {
								if (!item.status) {
									return null;
								}
								return (
									<Card
										key={item.id}
										id={item.id}
										title={item.name}
										originalPrice={item.originalPrice}
										saleOffPrice={item.saleOffPrice}
										img={item.img}
									/>
								);
							})}
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
						{ACCESSORY1.length > 0 &&
							ACCESSORY1.map((item, index) => (
								<Accessory
									key={index}
									title={item.title}
									img={item.img}
									bgColor={item.bgColor}
								/>
							))}
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
						{ACCESSORY2.length > 0 &&
							ACCESSORY2.map((item, index) => (
								<Accessory
									key={index}
									title={item.title}
									img={item.img}
									bgColor={item.bgColor}
								/>
							))}
					</AccessoryList>
				</AccessoryStyled>
			</>
		</ContainerStyled>
	);
};
export default Home;
