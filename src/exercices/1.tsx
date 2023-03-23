/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

// 🦁 Supprime ce commentaire et définit correctement les types pour ce composant
type SquareProps = {
	isWinningSquare: boolean;
} & ComponentPropsWithoutRef<'button'>;

const Square = ({ isWinningSquare, children, ...props }: SquareProps) => {
	return (
		<button
			className={clsx('square', {
				'winning-square': { isWinningSquare },
			})}
			{...props}>
			{children}
		</button>
	);
};

const Game = () => {
	return (
		<div className='game'>
			<Square isWinningSquare={true}>X</Square>
			<Square isWinningSquare={false}>X</Square>
			<Square isWinningSquare={true}>O</Square>
		</div>
	);
};

export default function App() {
	return (
		<div>
			<h2>TicTacToe</h2>
			<Game />
		</div>
	);
}
