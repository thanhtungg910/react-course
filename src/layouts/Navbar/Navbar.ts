import { Link } from 'react-router-dom';
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
const LogoStyled = styled(Link)`
	width: 65px;
	height: 57px;
`;
const ActionsStyled = styled.div`
	${mixins.flexCenter}
	gap: 10px;
	span {
		color: white;
	}
`;
export { WrapperStyled, LogoStyled, ContentStyled, ActionsStyled };
