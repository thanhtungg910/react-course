import styled from 'styled-components';
import Square from '../Square/Square';
import styles from './Board.module.css';

const BoardStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 150px);
	grid-gap: 5px;
	place-content: center;
	position: relative;
	&:focus {
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
`;

const StrikeStyled = styled.div`
	position: absolute;
	background-color: #000;
	z-index: 5;
`;

function Board({ cells, onClick, className }) {
	return (
		<>
			<BoardStyled>
				{cells.length > 0 &&
					cells.map((item, index) => {
						return (
							<Square key={index} onClick={() => onClick(index)} value={item} />
						);
					})}
				<StrikeStyled className={styles[className]}></StrikeStyled>
			</BoardStyled>
		</>
	);
}

export default Board;
