/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input, Popconfirm } from 'antd';
import { memo } from 'react';
import styled from 'styled-components';

import { mixins } from '~/GlobalClasses';
import { ProductType } from '~/types/product.type';

const BoxStyled = styled.div`
	margin: 20px 0;
`;
const ProductItem = styled.div`
	display: flex;
`;
const ImageItem = styled.div`
	width: 30%;
`;
const ProductActions = styled.div`
	margin-left: 20px;
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

const HeaderStyled = styled.div`
	${mixins.flexAlignCenter}
	justify-content: space-between;
	h2 {
		font-size: 20px;
		font-weight: 700;
	}
`;

type Props = {
	productsInCart: any;
	increment: (id: number) => void;
	decrement: (id: number) => void;
	removeItem: (id: number) => void;
};
const handlePrice = (data: ProductType | any): number => {
	if (data.saleOffPrice !== 0) {
		return data.saleOffPrice * data?.quantity;
	}
	return data.originalPrice * data?.quantity;
};

const CartModule = ({
	productsInCart,
	increment,
	decrement,
	removeItem,
}: Props) => {
	return productsInCart.cart.map((item: ProductType) => (
		<BoxStyled key={item.id}>
			<ProductItem>
				<ImageItem>
					<img src={item.img} alt={item.name} />
				</ImageItem>
				<ProductActions>
					<HeaderStyled>
						<h3>{item.name}</h3>
						<Popconfirm
							title='Bạn có chắc muốn xóa?'
							onConfirm={() => removeItem(item.id)}
							okText='Yes'
							cancelText='No'
						>
							<span className='cursor-pointer'>X</span>
						</Popconfirm>
					</HeaderStyled>
					<div className='price'>
						<p className='show'>
							{item.saleOffPrice &&
								item.saleOffPrice.toLocaleString('vi', {
									style: 'currency',
									currency: 'VND',
								})}
						</p>
						<p className='through'>
							{item.originalPrice &&
								item.originalPrice.toLocaleString('vi', {
									style: 'currency',
									currency: 'VND',
								})}
						</p>
					</div>

					<Input.Group compact className='w-1/2'>
						Chọn số lượng:
						<Button onClick={() => increment(item.id)}>+</Button>
						<Input style={{ width: '50%' }} value={item.quantity} />
						<Button onClick={() => decrement(item.id)}>-</Button>
					</Input.Group>
				</ProductActions>
			</ProductItem>
		</BoxStyled>
	));
};

export default memo(CartModule);
