import { message } from 'antd';
import { memo } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import Button from '~/components/Button';
import { cartSelector } from '~/features/cart/cartSelector';
import { decrement, increment, removeItem } from '~/features/cart/cartSlice';
import { ContainerStyled, mixins } from '~/GlobalClasses';
import CartModule from '~/modules/cart/CartModule';
import { ProductType } from '~/types/product.type';

const InnerStyled = styled.div`
	max-width: 600px;
	min-height: 200px;
	margin: 0 auto;
	padding: 20px;
	margin-top: 20px;
	border-radius: 5px;
	border: 1px #ccc solid;
`;
const HeaderStyled = styled.div`
	${mixins.flexAlignCenter}
	justify-content: space-between;
	h2 {
		font-size: 20px;
		font-weight: 700;
	}
`;
const ContentStyled = styled.div``;
const quantity = (data: ProductType[] | any): number => {
	return data.reduce((pre: number, item: ProductType | any) => {
		let price = 0;
		if (item.saleOffPrice !== 0) {
			price = item.saleOffPrice * item?.quantity;
		} else {
			price = item.originalPrice * item?.quantity;
		}
		return price + pre;
	}, 0);
};

const Cart = () => {
	const dispatch = useAppDispatch();
	const productsInCart = useAppSelector((state) => cartSelector(state));
	const handleIncrement = (id: number) => {
		dispatch(increment(id));
		message.success('Tăng số lượng thành công');
	};
	const handleDecrement = (id: number) => {
		dispatch(decrement(id));
		message.success('Giảm số lượng thành công');
	};
	const handleRemoveItem = (id: number) => {
		dispatch(removeItem(id));
		message.success('Xóa thành công');
	};

	return (
		<ContainerStyled>
			<InnerStyled>
				<HeaderStyled>
					<h2>Giỏ hàng</h2>
				</HeaderStyled>
				<ContentStyled>
					{productsInCart.cart.length > 0 ? (
						<>
							<CartModule
								productsInCart={productsInCart}
								increment={handleIncrement}
								decrement={handleDecrement}
								removeItem={handleRemoveItem}
							/>
							<HeaderStyled>
								<h3>Tổng tiền tạm tính: </h3>
								<h2 className='text-[#D70018]'>
									{quantity(productsInCart.cart).toLocaleString('vi', {
										style: 'currency',
										currency: 'VND',
									})}
								</h2>
							</HeaderStyled>
						</>
					) : (
						<img
							src='https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=20&m=861576608&s=612x612&w=0&h=UgHaPYlYrsPTO6BKKTzizGQqFgqEnn7eYK9EOA16uDs='
							alt=''
						/>
					)}
				</ContentStyled>
				<Button
					color='white'
					bgColor='#DC3545'
					bgHover='#DC3545'
					padding='15px'
				>
					Tiến hành đặt hàng
				</Button>
				<Button color='#DC3545' padding='15px' border='1px solod #DC3545'>
					Chọn thêm sản phẩm khác
				</Button>
			</InnerStyled>
		</ContainerStyled>
	);
};

export default memo(Cart);
