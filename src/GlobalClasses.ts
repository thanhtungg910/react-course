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
	padding: 0 20px;
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
const gridColumns = css`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 8px;
	@media screen and (max-width: 720px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const mixins = { flexCenter, flexAlignCenter, gridColumns };
export { GlobalClasses, ContainerStyled, mixins };
