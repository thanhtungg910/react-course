import styled from 'styled-components';
import { mixins } from '~/GlobalClasses';
const WrapperStyled = styled.nav<object>`
	background-color: ${(props) => props.theme.primary};
`;
const ContentStyled = styled.div`
	${mixins.flexCenter}
	justify-content: space-between;
	padding: 10px 0;
`;
const LogoStyled = styled.div`
	width: 65px;
	height: 57px;
`;
const SearchStyled = styled.div`
	max-width: 600px;
	position: relative;
	span {
		position: absolute;
		top: 38%;
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
const ActionsStyled = styled.div`
	${mixins.flexCenter}
	gap: 10px;
	span {
		color: white;
	}
`;
export {
	WrapperStyled,
	LogoStyled,
	ContentStyled,
	SearchStyled,
	ActionsStyled,
};
