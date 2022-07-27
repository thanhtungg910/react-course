import styled from 'styled-components';
import { ContainerStyled, mixins } from '~/GlobalClasses';
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
`;

const Cart = () => {
	return (
		<ContainerStyled>
			<InnerStyled>
				<HeaderStyled>
					<h2>Giỏ hàng</h2>
				</HeaderStyled>
				<ContentStyled>
					<BoxStyled>
						<HeaderStyled>
							<h3>apple</h3>
							<h3>1.000.000d</h3>
						</HeaderStyled>
						<ProductItem>
							<ImageItem>
								<img
									src='https://res.cloudinary.com/dv3vzmogk/image/upload/v1658126527/anhhtus/sjv4su3zjwyobfimnssl.jpg'
									alt=''
								/>
							</ImageItem>
							<ProductActions>
								<input type='text' value={1} />
							</ProductActions>
						</ProductItem>
					</BoxStyled>
					<BoxStyled>
						<HeaderStyled>
							<h3>apple</h3>
							<h3>1.000.000d</h3>
						</HeaderStyled>
						<ProductItem>
							<ImageItem>
								<img
									src='https://res.cloudinary.com/dv3vzmogk/image/upload/v1658126527/anhhtus/sjv4su3zjwyobfimnssl.jpg'
									alt=''
								/>
							</ImageItem>
							<ProductActions>
								<input type='text' value={1} />
							</ProductActions>
						</ProductItem>
					</BoxStyled>
					<HeaderStyled>
						<h3>Tổng tiền</h3>
						<h2 className='text-[#D70018]'>1.000.000d</h2>
					</HeaderStyled>
				</ContentStyled>
			</InnerStyled>
		</ContainerStyled>
	);
};

export default Cart;
