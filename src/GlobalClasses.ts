import styled, { css } from 'styled-components';

const GlobalClasses = css`
	.ant-btn-link {
		color: black;
		&:hover {
			color: inherit;
		}
	}
`;
const ContainerStyled = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: block;
	height: 100%;
`;
const flexCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const flexAlignCenter = css`
	display: flex;
	align-items: center;
`;
const mixins = { flexCenter, flexAlignCenter };
export { GlobalClasses, ContainerStyled, mixins };
