/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchOutlined } from '@ant-design/icons';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductType } from '~/types/product.type';

const SearchStyled = styled.div`
	width: 500px;
	position: relative;
	span {
		position: absolute;
		top: 35%;
		bottom: 50%;
		margin-left: 10px;
	}
	input {
		width: 100%;
		height: 40px;
		border-radius: 5px;
		border: none;
		outline: none;
		padding: 0 40px;
	}
`;
const DataFilterStyled = styled.div`
	position: absolute;
	height: 200px;
	overflow-y: scroll;
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;
	top: 99%;
	left: 0;
	right: 0;
	min-height: 50px;
	background-color: #fff;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	padding: 20px;
	::-webkit-scrollbar-thumb {
		width: 2px;
	}
	.box {
		display: flex;
		gap: 10px;
		margin-top: 10px;
		.img {
			width: 90px;
		}
		.content {
			h2 {
				font-size: 18px;
				font-weight: 500;
			}
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
		}
	}
`;
interface Props {
	data?: any;
	className?: string;
	onChange?: React.Dispatch<React.SetStateAction<string>> | any;
	setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
	visibility?: boolean;
}

const SearchInput = ({
	className,
	onChange,
	data,
	visibility,
	setVisibility,
}: Props) => {
	let props = {};
	if (className) {
		props = {
			className: className,
		};
	}

	return (
		<>
			<SearchStyled {...props}>
				<SearchOutlined />
				<input type='search' onChange={(e) => onChange(e.target.value)} />
				{visibility && data && data.length > 0 && (
					<DataFilterStyled>
						{data.map((item: ProductType, index: React.Key) => (
							<Link
								to={`/detail/${item.id}`}
								className='box'
								key={index}
								onClick={() => setVisibility(false)}
							>
								<div className='img'>
									<img src={item.img} loading='lazy' alt={item.name} />
								</div>
								<div className='content'>
									<h2>{item.name}</h2>
									<div className='price'>
										<p className='show'>
											{item.originalPrice &&
												item.originalPrice.toLocaleString('vi', {
													style: 'currency',
													currency: 'VND',
												})}
										</p>
										<p className='through'>
											{item.saleOffPrice &&
												item.saleOffPrice.toLocaleString('vi', {
													style: 'currency',
													currency: 'VND',
												})}
										</p>
									</div>
								</div>
							</Link>
						))}
					</DataFilterStyled>
				)}
			</SearchStyled>
		</>
	);
};

export default memo(SearchInput);
