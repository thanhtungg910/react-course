import { message } from 'antd';
import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import {
	useGetByIdCategoryMutation,
	useGetProductQuery,
} from '~/api/product.api';
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
	const { id = 0 } = useParams();
	const dispatch = useAppDispatch();
	const { isSuccess, data } = useGetProductQuery(id);
	const [getById, { isSuccess: isSuccessTogether, data: productsTogether }] =
		useGetByIdCategoryMutation();

	const handleAddToCart = (data: ProductType) => {
		const payload = {
			...data,
			quantity: 1,
		};
		dispatch(addToCart(payload));
		message.success('Đã thêm vào giỏ hàng');
	};

	useEffect(() => {
		if (isSuccess) {
			getById(data.categoryId);
		}
	}, [data]);

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
						<h2>SẢN PHẨM CÙNG LOẠI</h2>
					</HeaderFeaturedStyled>
					<ProductListStyled>
						{isSuccessTogether &&
							productsTogether.length > 0 &&
							productsTogether.map((item: ProductType) => {
								if (item.id === +id || !item.status) {
									return null;
								}
								return (
									<Card
										key={item.id}
										id={item.id}
										categoryId={item.categoryId}
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
