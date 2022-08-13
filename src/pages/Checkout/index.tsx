import { message } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
import { useCreateOrderMutation } from '~/api/order.api';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { cartSelector } from '~/features/cart/cartSelector';
import { removeCart } from '~/features/cart/cartSlice';
import userSelector from '~/features/user/userSelector';
import { ContainerStyled } from '~/GlobalClasses';
import FormCheckout from '~/modules/checkout/FormCheckout';
import { ProductType } from '~/types/product.type';
import { quantity } from '../Cart';

const Checkout = () => {
	const dispatch = useAppDispatch();
	const productsInCart = useAppSelector((state) => cartSelector(state));
	if (productsInCart?.cart.length <= 0) {
		return <Navigate to='/' />;
	}
	const navigate = useNavigate();
	const user = useAppSelector((state) => userSelector(state));
	const [createBrotliDecompress, { isSuccess }] = useCreateOrderMutation();

	const onFinish = (values: any) => {
		const productsOrder = productsInCart.cart.map((item: ProductType) => ({
			id: item.id,
			name: item.name,
			img: item.img,
			quantity: item.quantity,
			categoryId: item.categoryId,
			originalPrice: item.originalPrice,
			saleOffPrice: item.saleOffPrice,
		}));

		const payload = {
			userId: user?.user.id,
			productsOrder: [...productsOrder],
			createAt: new Date(),
			accessOrder: false,
			...values,
		};
		createBrotliDecompress(payload);
	};
	if (isSuccess) {
		message.success('Dăt hàng thành công');
		dispatch(removeCart());
		navigate('/');
	}
	return (
		<ContainerStyled>
			<section>
				<h1 className='sr-only'>Checkout</h1>
				<div className='relative mx-auto max-w-screen-2xl'>
					<div className='grid grid-cols-1 md:grid-cols-2'>
						<div className='py-12 bg-gray-50 md:py-24'>
							<div className='max-w-lg px-4 mx-auto lg:px-8'>
								<div className='flex items-center'>
									<span className='w-10 h-10 bg-blue-900 rounded-full' />
									<h2 className='ml-4 font-medium'>{user?.user.username}</h2>
								</div>
								<div className='mt-8'>
									<p className='text-2xl font-medium tracking-tight'>
										{productsInCart.cart.length > 0 &&
											quantity(productsInCart.cart).toLocaleString('vi', {
												style: 'currency',
												currency: 'VND',
											})}
									</p>
									<p className='mt-1 text-sm text-gray-500'>
										For the purchase of
									</p>
								</div>
								<div className='mt-12'>
									<div className='flow-root'>
										<ul className='-my-4 divide-y divide-gray-200'>
											{productsInCart.cart.length > 0 &&
												productsInCart.cart.map((item: ProductType) => (
													<li
														className='flex items-center justify-between py-4'
														key={item.id}
													>
														<div className='flex items-start'>
															<img
																className='flex-shrink-0 object-cover w-16 h-16 rounded-lg'
																src={item.img}
															/>
															<div className='ml-4'>
																<p className='text-sm'>{item.name}</p>
																<dl className='mt-1 space-y-1 text-xs text-gray-500'>
																	<div>
																		<dt className='inline'>Số lượng: </dt>
																		<dd className='inline'>{item.quantity}</dd>
																	</div>
																</dl>
															</div>
														</div>
														<div className='text-sm'>
															<p>
																<span className='line-through'>
																	{item.originalPrice &&
																		item.originalPrice.toLocaleString('vi', {
																			style: 'currency',
																			currency: 'VND',
																		})}
																</span>
																<span className='text-red-500'>
																	{' '}
																	{item.saleOffPrice &&
																		item.saleOffPrice.toLocaleString('vi', {
																			style: 'currency',
																			currency: 'VND',
																		})}
																</span>
																<small className='text-gray-500'>
																	x{item.quantity}
																</small>
															</p>
														</div>
													</li>
												))}
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className='py-12 bg-white md:py-24'>
							<div className='max-w-lg px-4 mx-auto lg:px-8'>
								<FormCheckout onFinish={onFinish} user={user} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</ContainerStyled>
	);
};

export default Checkout;
