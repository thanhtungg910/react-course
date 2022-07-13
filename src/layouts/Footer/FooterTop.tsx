import styled from 'styled-components';
import images from '~/assets/logo';
import { mixins } from '~/GlobalClasses';

const FooterTopStyled = styled.div`
	${mixins.gridColumns}
	min-height: 50px;
	margin-top: 40px;
	padding: 10px 0;
	li {
		font-weight: 400;
		font-size: 14px;
		line-height: 22px;
	}
	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
`;
const H3Styled = styled.h3`
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
`;

const FooterTop = () => {
	return (
		<FooterTopStyled>
			<div>
				<H3Styled>Tìm cửa hàng</H3Styled>
				<ul>
					<li>
						<a href='#'>Tìm cửa hàng gần nhất</a>
					</li>
					<li>
						<a href='#'>Mua hàng từ xa</a>
					</li>
					<li>
						<a href='#' className='text-[#D70018]'>
							Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)
						</a>
					</li>
				</ul>
				<H3Styled>Phương thức thanh toán</H3Styled>
			</div>
			<div>
				<ul>
					<li>
						<a href='#'>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</a>
					</li>
					<li>
						<a href='#'>Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</a>
					</li>
					<li>
						<a href='#'>Gọi bảo hành: (8h00 - 21h00)</a>
					</li>
				</ul>
				<H3Styled>Đối tác dịch vụ bảo hành</H3Styled>
				<p>Điện Thoại - Máy tính</p>
				<H3Styled>Trung tâm bảo hành uỷ quyền Apple</H3Styled>
				<div>
					<img src={images.dienthoaivui} alt='dienthoaivui' />
				</div>
			</div>
			<div>
				<ul>
					<li>
						<a href='#'>Mua hàng và thanh toán Online</a>
					</li>
					<li>
						<a href='#'>Mua hàng trả góp Online</a>
					</li>
					<li>
						<a href='#'>Tra thông tin đơn hàng</a>
					</li>
					<li>
						<a href='#'>Tra điểm Smember</a>
					</li>
					<li>
						<a href='#'>Tra thông tin bảo hành</a>
					</li>
					<li>
						<a href='#'>Tra cứu hoá đơn VAT điện tử</a>
					</li>
					<li>
						<a href='#'>Trung tâm bảo hành chính hãng</a>
					</li>
					<li>
						<a href='#'>Quy định về việc sao lưu dữ liệu</a>
					</li>
					<li>
						<a href='#' className='text-[#D70018]'>
							Dịch vụ bảo hành điện thoại
						</a>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<a href='#'>Quy chế hoạt động</a>
					</li>
					<li>
						<a href='#'>Chính sách Bảo hành</a>
					</li>
					<li>
						<a href='#'>Liên hệ hợp tác kinh doanh</a>
					</li>
					<li>
						<a href='#'>Khách hàng doanh nghiệp (B2B)</a>
					</li>
					<li>
						<a href='#' className='text-[#D70018]'>
							Ưu đãi thanh toán
						</a>
					</li>
					<li>
						<a href='#'>Tuyển dụng</a>
					</li>
				</ul>
			</div>
		</FooterTopStyled>
	);
};

export default FooterTop;
