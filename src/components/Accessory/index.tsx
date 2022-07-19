import styled from 'styled-components';
export interface Props {
	bgColor?: string;
	img?: string;
	title?: string;
}
const AccessoryStyled = styled.div`
	width: 111px;
	height: 125px;
	border-radius: 5px;
`;
const ContentStyled = styled.a<Props>`
	width: 100%;
	display: block;
	overflow: hidden;
	color: #fff;
	text-decoration: none;
	position: relative;
	border-radius: 10px;
	background-repeat: no-repeat;
	background-position: 100% 100%;
	background-size: cover;
	box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%);
	min-height: 125px;
	padding: 5px;
	background-color: ${(props) => props.bgColor};
	background-image: url(${(props) => props.img});
`;

const Accessory = ({ bgColor, img, title }: Props) => {
	return (
		<AccessoryStyled>
			<ContentStyled img={img} bgColor={bgColor}>
				{title}
			</ContentStyled>
		</AccessoryStyled>
	);
};

export default Accessory;
