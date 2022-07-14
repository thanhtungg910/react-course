import styled from 'styled-components';
import Breadcrumb from '~/components/Breadcrumb';
import Card from '~/components/Card';
import { ContainerStyled } from '~/GlobalClasses';
import DetailProduct from '~/modules/detail/DetailProduct';
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
	return (
		<div>
			<Breadcrumb />
			<BoxNameStyled>
				<ContainerStyled>
					<TitleStyled>Samsung Galaxy A73 (5G) 256GB</TitleStyled>
				</ContainerStyled>
			</BoxNameStyled>
			<ContainerStyled>
				<DetailProduct />
			</ContainerStyled>
			<ContainerStyled>
				<FeaturedProduct>
					<HeaderFeaturedStyled>
						<h2>ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
					</HeaderFeaturedStyled>
					<ProductListStyled>
						<Card />
						<Card />
						<Card />
						<Card />
					</ProductListStyled>
				</FeaturedProduct>
			</ContainerStyled>
		</div>
	);
};

export default Detail;
