import styled from 'styled-components';

const SquareStyles = styled.div`
	height: 128px;
	padding: 10px;
	font-size: 2rem;
	font-weight: 900;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	border: 1px solid #ccc;
	position: relative;
	user-select: none;

	display: flex;
	justify-content: center;
	align-items: center;
	&:focus {
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

function Square({ onClick, value }) {
	return <SquareStyles onClick={onClick}>{value}</SquareStyles>;
}

export default Square;
