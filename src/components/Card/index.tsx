import styled from 'styled-components';

const CardWrapper = styled.div`
	padding: 8px;
	border-radius: 10px;
	transition: all 0.2s linear;
	border: 1px solid #f1f1f1;
	:hover {
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
`;
const CardInnerStyled = styled.div`
	width: 250px;
`;
const ImageBoxStyled = styled.a`
	width: 160px;
	img {
		margin-left: auto;
		margin-right: auto;
	}
`;
const CardTitleStyed = styled.h2`
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
	word-break: break-word;
	margin-bottom: 15px;
`;
const CardContentStyled = styled.div`
	.price {
		display: flex;
		align-items: flex-end;
		font-weight: 600;
		line-height: 1.4;
		color: #333;
		column-gap: 5px;
		.show {
			color: red;
		}
		.through {
			text-decoration: line-through;
		}
	}
`;
const RatingStyled = styled.div`
	span {
		font-size: 12px;
	}
`;
const PromotionsStyled = styled.div`
	display: flex;
	column-gap: 5px;
	background: #f3f4f6;
	font-size: 12px;
	padding: 8px 16px 8px 8px;
	border-radius: 5px;
	.promo-list {
		text-align: center;
		color: #fff;
		font-size: 8px;
		line-height: 8px;
		.pmh-title {
			padding: 3px;
			background: #2e373e;
			border-radius: 2px;
		}
		.pmh-content {
			padding: 3px;
			background: #d70018;
			border-radius: 2px;
		}
	}
`;
const Card = () => {
	return (
		<CardWrapper>
			<CardInnerStyled>
				<ImageBoxStyled>
					<img
						src='https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-se-red-select-20220322.jpg'
						alt=''
					/>
				</ImageBoxStyled>
				<CardTitleStyed>iPhone 11 64GB I Chính hãng VN/A</CardTitleStyed>
				<CardContentStyled>
					<div className='price'>
						<p className='show'>10.000.000d</p>
						<p className='through'>10.000.000d</p>
					</div>
					<PromotionsStyled>
						<div className='promo-list'>
							<ul>
								<li className='pmh-title'>PMH</li>
								<li className='pmh-content'>600.00d</li>
							</ul>
						</div>
						[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
						1.000.000đ và
					</PromotionsStyled>
					<RatingStyled>
						⭐⭐⭐⭐⭐ <span>1 danh gia</span>
					</RatingStyled>
				</CardContentStyled>
			</CardInnerStyled>
		</CardWrapper>
	);
};

export default Card;
