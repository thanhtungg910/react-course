import styled from 'styled-components';
import { ContainerStyled } from '~/GlobalClasses';

const FooterBottomStyled = styled.div`
	width: 100%;
	background-color: #f8f8f8;
	padding: 10px 0;

	.company-information__address {
		padding: 10px 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
		@media screen and (max-width: 720px) {
			grid-template-columns: repeat(1, 1fr);
		}
		p {
			font-weight: 400;
			font-size: 10px;
			line-height: 20px;
		}
	}
`;
const ParagraphStyled = styled.p`
	font-size: 10px;
	line-height: 20px;
	text-align: center;
`;
const FooterBottom = () => {
	return (
		<FooterBottomStyled>
			<ContainerStyled>
				<div className='company-information__address'>
					<div>
						<p>
							Điện thoại iPhone 13 - Điện thoại iPhone 12 - Điện thoại iPhone 11
						</p>
						<p>Điện thoại iPhone 13 Pro Max Điện thoại iPhone 11 Pro Max</p>
						<p>iPhone cũ giá rẻ iPhone 13 cũ iPhone 12 cũ iPhone 11 cũ</p>
					</div>
					<div>
						<p>
							Điện thoại iPhone 13 - Điện thoại iPhone 12 - Điện thoại iPhone 11
						</p>
						<p>Điện thoại iPhone 13 Pro Max Điện thoại iPhone 11 Pro Max</p>
						<p>iPhone cũ giá rẻ iPhone 13 cũ iPhone 12 cũ iPhone 11 cũ</p>
					</div>
					<div>
						<p>
							Điện thoại iPhone 13 - Điện thoại iPhone 12 - Điện thoại iPhone 11
						</p>
						<p>Điện thoại iPhone 13 Pro Max Điện thoại iPhone 11 Pro Max</p>
						<p>iPhone cũ giá rẻ iPhone 13 cũ iPhone 12 cũ iPhone 11 cũ</p>
					</div>
				</div>
				<div className='company-information__certification'>
					<ParagraphStyled>
						Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD:
						0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ:
						350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh,
						Việt Nam. Điện thoại: 028.7108.9666.
					</ParagraphStyled>
				</div>
			</ContainerStyled>
		</FooterBottomStyled>
	);
};

export default FooterBottom;
