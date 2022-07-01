import { useEffect, useMemo, useRef, useState } from 'react';
import Confetti from 'react-confetti';
import styled from 'styled-components';
import Board from '../Board/Board';

const BoxListStyles = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
`;
const Button = styled.button`
	display: inline-block;
	padding: 10px 12px;
	text-align: center;
	font-family: 'Courier New', Courier, monospace;
	background-color: #0ea5e9;
	cursor: pointer;
	color: white;
	border: none;
	outline: none;
	border-radius: 2px;
	user-select: none;
	&:focus {
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
`;
const H3Styled = styled.h3`
	font-family: 'Courier New', Courier, monospace;
	user-select: none;
`;

function Game() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const [height, setHeight] = useState(null);
	const [width, setWidth] = useState(null);
	const confettiRef = useRef(null);

	const { cells: winner, className } = useMemo(
		() => calculateWinner(board),
		[board]
	);
	const handleClick = (index) => {
		const boardCopy = [...board];
		if (winner || boardCopy[index]) return;
		boardCopy[index] = xIsNext ? 'X' : 'O';
		setBoard(boardCopy);
		setXIsNext(!xIsNext);
	};
	const handleResetGame = () => {
		setBoard(Array(9).fill(null));
		setXIsNext(true);
	};

	useEffect(() => {
		setHeight(confettiRef.current.clientHeight);
		setWidth(confettiRef.current.clientWidth);
	}, []);
	return (
		<>
			<BoxListStyles ref={confettiRef}>
				<Board cells={board} onClick={handleClick} className={className} />
				{winner && <H3Styled>Winner is {winner}</H3Styled>}
				<Button onClick={handleResetGame}>Reset</Button>
				{winner && (
					<Confetti
						recycle={winner}
						numberOfPieces={200}
						width={width}
						height={height}
					/>
				)}
			</BoxListStyles>
		</>
	);
}

export default Game;

export function calculateWinner(cells) {
	const lines = [
		{ combo: [0, 1, 2], strikeClass: 'strikeRow1' },
		{ combo: [3, 4, 5], strikeClass: 'strikeRow2' },
		{ combo: [6, 7, 8], strikeClass: 'strikeRow3' },
		{ combo: [0, 3, 6], strikeClass: 'strikeColumn1' },
		{ combo: [1, 4, 7], strikeClass: 'strikeColumn2' },
		{ combo: [2, 5, 8], strikeClass: 'strikeColumn3' },
		{ combo: [0, 4, 8], strikeClass: 'strikeDiagonal1' },
		{ combo: [2, 4, 6], strikeClass: 'strikeDiagonal2' },
	];
	for (let index = 0; index < lines.length; index++) {
		const [a, b, c] = lines[index].combo;
		if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
			return { cells: cells[a], className: lines[index].strikeClass };
		}
	}
	return { cells: null };
}
