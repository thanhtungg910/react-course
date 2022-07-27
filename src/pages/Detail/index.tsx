import { message } from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGetProductQuery } from '~/api/product.api';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import Breadcrumb from '~/components/Breadcrumb';
import Card from '~/components/Card';
import { addToCart } from '~/features/cart/cartSlice';
import { getProducts } from '~/features/products';
import { productSelector } from '~/features/products/productSelector';
import { ContainerStyled } from '~/GlobalClasses';
import DetailProduct from '~/modules/detail/DetailProduct';
import { ProductType } from '~/types/product.type';
import {
	FeaturedProduct,
	HeaderFeaturedStyled,
	ProductListStyled,
} from '../Home';
const TitleStyled = styled.h3`
	font-weight: 600;
	font-size: 18px;
	line-height: 29px;
`;
const BoxNameStyled = styled.div`
	border-bottom: 1px solid #cccc;
	padding: 15px 0;
`;

const Detail = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { products } = useAppSelector((state) => productSelector(state));
	const { isSuccess, data } = useGetProductQuery(id);
	const handleAddToCart = (data: ProductType) => {
		const payload = {
			...data,
			quantity: 1,
		};
		dispatch(addToCart(payload));
		message.success('Đặt thành công');
	};

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);
	return (
		<div>
			<Breadcrumb />
			<BoxNameStyled>
				<ContainerStyled>
					<TitleStyled>Samsung Galaxy A73 (5G) 256GB</TitleStyled>
				</ContainerStyled>
			</BoxNameStyled>
			<ContainerStyled>
				{isSuccess && <DetailProduct data={data} onClick={handleAddToCart} />}
			</ContainerStyled>
			<ContainerStyled>
				<FeaturedProduct>
					<HeaderFeaturedStyled>
						<h2>ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
					</HeaderFeaturedStyled>
					<ProductListStyled>
						{products &&
							products.length > 0 &&
							products.map((item: ProductType) => {
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
			</ContainerStyled>
		</div>
	);
};

export default Detail;
