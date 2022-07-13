import { ContainerStyled } from '~/GlobalClasses';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';
const Footer = () => {
	return (
		<footer>
			<ContainerStyled>
				<FooterTop />
			</ContainerStyled>
			<FooterBottom />
		</footer>
	);
};
export default Footer;
