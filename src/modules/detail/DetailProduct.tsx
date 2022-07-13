import React from 'react';
import styled from 'styled-components';
import Button from '~/components/Button';

type Props = {};
const BoxDetailProductStyled = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 20px;
`;
const BoxDetailLeft = styled.div`
	overflow: hidden;
	.box-gallery {
		padding: 10px;
		margin-bottom: 10px;
	}
	.gallery-thumbs {
		display: flex;
		gap: 10px;
		.item-thumb {
			width: 60px;
			height: 60px;
			border-radius: 10px;
			border: 1px solid #cccc;
			padding: 5px;
		}
	}
`;
const BoxDetailCenter = styled.div`
	width: 420px;
`;
const BoxDetailRight = styled.div``;
const BoxInfoStyled = styled.div`
	display: flex;
	gap: 10px;
	.price {
		color: #d70018;
		font-weight: 400;
		font-size: 22px;
		line-height: 22px;
	}
	.old-price {
		font-weight: 400;
		font-size: 14px;
		line-height: 22px;
		color: #707070;
	}
`;
const BoxOptionsStyled = styled.div`
	.title {
		margin: 10px 0;
		font-weight: 400;
		font-size: 14px;
		line-height: 22px;
		color: #444444;
	}
	.options {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		font-weight: 400;
		font-size: 12px;
		line-height: 22px;
		.box {
			padding: 0.8em;
			border: 1px solid #d1d5d8;
			text-align: center;
			border-radius: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			:hover {
				background-color: #f8f9f9;
			}
			.sub-img {
				width: 26px;
				height: 26px;
			}
		}
		.active {
			border: 1px solid #d70018;
		}
	}
`;
const BoxPromotionStyled = styled.div`
	border-radius: 5px;
	border: 1px solid #fee2e2;
	margin-top: 20px;
	.header {
		background-color: #fee2e2;
		color: #d70018;
		padding: 10px;
		.title {
			display: flex;
		}
	}
	.content {
		padding: 15px 20px;
		font-weight: 400;
		font-size: 14px;
		line-height: 22px;
		a {
			font-weight: 400;
			font-size: 13px;
			line-height: 22px;
			color: #d70018;
		}
	}
`;
const BoxActions = styled.div`
	.group-button {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 20px;
		justify-content: space-between;
		div {
			flex: 1;
		}
	}
	.add-to-cart {
		width: 100%;
		padding: 0.8em;
		text-align: center;
		background-color: #e11b1e;
		border-radius: 8px;
		color: #fff;
		margin-top: 10px;
	}
`;

const DetailProduct = (props: Props) => {
	return (
		<BoxDetailProductStyled>
			<BoxDetailLeft>
				<div className='box-gallery'>
					<img
						src='https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/a/samsung-galaxy-a73-1-600x600.jpg'
						alt=''
					/>
				</div>
				<div className='gallery-thumbs'>
					<div className='item-thumb'>
						<img
							src='https://cdn2.cellphones.com.vn/48x/media/catalog/product/g/a/galaxy-a73-grey-001.jpg'
							alt=''
						/>
					</div>
					<div className='item-thumb'>
						<img
							src='https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/a/samsung-galaxy-a73-1-600x600.jpg'
							alt=''
						/>
					</div>
				</div>
			</BoxDetailLeft>
			<BoxDetailCenter>
				<BoxInfoStyled>
					<p className='price'>1.000.000đ</p>
					<p className='old-price'>2.000.000đ</p>
				</BoxInfoStyled>
				<BoxOptionsStyled>
					<div className='title'>Chọn màu để xem giá và chi nhánh có hàng</div>
					<div className='options'>
						<div className='box'>
							<div className='sub-img'>
								<img
									src='https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/a/samsung-galaxy-a73-1-600x600.jpg'
									alt=''
								/>
							</div>
							<div className='content'>
								<p>Trắng</p>
								<p>11.00.00đ</p>
							</div>
						</div>
						<div className='box active'>
							<div className='sub-img'>
								<img
									src='https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/a/samsung-galaxy-a73-1-600x600.jpg'
									alt=''
								/>
							</div>
							<div className='content'>
								<p>Trắng</p>
								<p>11.00.00đ</p>
							</div>
						</div>
					</div>
				</BoxOptionsStyled>
				<BoxPromotionStyled>
					<div className='header'>
						<div className='title'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
								/>
							</svg>
							<p>Khuyến Mãi</p>
						</div>
					</div>
					<div className='content'>
						<ul>
							<li>
								Combo 02 Mã ưu đãi CGV trị giá 200.000đ{' '}
								<a href='#'>(Xem chi tiết)</a>
							</li>
							<li>
								Tặng gói bảo hành Samsung Care+ 12 tháng trị giá 1.099.000đ (Từ
								01/06-15/06)<a href='#'>(Xem chi tiết)</a>
							</li>
							<li>
								Giảm thêm 1.500.000đ khi thu cũ đổi mới
								<a href='#'>(Xem chi tiết)</a>
							</li>
							<li>
								Nhận thêm khuyến mãi sau:
								<ul>
									<li>
										Thu cũ đổi mới - Trợ giá đến 300.000đ{' '}
										<a href='#'>(Xem chi tiết)</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</BoxPromotionStyled>
				<BoxActions>
					<button className='add-to-cart'>Mua ngay</button>
					<div className='group-button'>
						<Button
							color='#fff'
							bgColor='#277CEA'
							bgHover='#277CEA'
							className='text-center flex-1'
						>
							Trả góp <br />
							(Xét duyệt qua điện thoại)
						</Button>
						<Button
							color='#fff'
							bgColor='#277CEA'
							bgHover='#277CEA'
							className='text-center'
						>
							TRẢ GÓP QUA THẺ <br />
							(Visa, Master Card, JCB)
						</Button>
					</div>
				</BoxActions>
				<div className='box-promotion-more'></div>
			</BoxDetailCenter>
			<BoxDetailRight></BoxDetailRight>
		</BoxDetailProductStyled>
	);
};
export default DetailProduct;
