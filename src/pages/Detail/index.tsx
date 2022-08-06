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
import Button from '~/components/Button';
import Card from '~/components/Card';
import { addToCart } from '~/features/cart/cartSlice';
import { getProducts } from '~/features/products';
import { productSelector } from '~/features/products/productSelector';
import { ContainerStyled } from '~/GlobalClasses';
import { ContentStyled } from '~/layouts/Navbar/Navbar';
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
		<>
			{isSuccess && (
				<div>
					<Breadcrumb />
					<BoxNameStyled>
						<ContainerStyled>
							<TitleStyled>{isSuccess && data.name}</TitleStyled>
						</ContainerStyled>
					</BoxNameStyled>
					<ContainerStyled>
						{isSuccess && (
							<DetailProduct data={data} onClick={handleAddToCart} />
						)}
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
					<ContainerStyled>
						<div className='mt-8 p-3 bg-[#F2F2F2] rounded-lg'>
							<h2 className='text-red-600 text-center text-2xl'>
								ĐẶC ĐIỂM NỔI BẬT
							</h2>
							{/* <div>{data.feature}</div> */}
							<div dangerouslySetInnerHTML={{ __html: data.feature }} />
						</div>
						<div className='mt-5'>
							<div dangerouslySetInnerHTML={{ __html: data.description }} />
						</div>
						<div className='mx-auto w-28'>
							<Button
								color='#212529'
								className='border-spacing-1 border mt-4 border-[#212529] hover:bg-[#f8f9f9]'
							>
								Xem chi tiet
							</Button>
						</div>
					</ContainerStyled>
				</div>
			)}
		</>
	);
};

export default Detail;
