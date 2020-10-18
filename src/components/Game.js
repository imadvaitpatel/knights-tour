import React, { Component } from 'react';
import styled from 'styled-components';
import Knight from './Knight';
import Board from './Board';
import knight from '../img/knight.png';

class ChessBoard extends Component {
	constructor() {
		super();
		this.state = {
			knightPosition: [5, 4],
			squareProps: [
				[
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
				],
				[
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
				],
				[
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
				],
				[
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
				],
				[
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
				],
				[
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
				],
				[
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
				],
				[
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
					{
						color: 'black',
						highlighted: false,
					},
					{
						color: 'white',
						highlighted: false,
					},
				],
			],
		};
	}

	highlightSquares = currSquare => {
		var r = currSquare[0]; // row and column
		var c = currSquare[1];
		const newSquares = [
			[r - 2, c - 1],
			[r - 2, c + 1],
			[r - 1, c - 2],
			[r - 1, c + 2], //squares knight can move to
			[r + 1, c - 2],
			[r + 1, c + 2],
			[r + 2, c - 1],
			[r + 2, c + 1],
		]; //newSquares works!

		this.setState(prevState => {
			const squareProps = prevState.squareProps.map((arr, row) =>
				arr.map((item, col) => {
					console.log([row, col]);
					if (
						(Math.abs(currSquare[0] - (row + 1)) == 1 &&
							Math.abs(currSquare[1] - (col + 1)) == 2) ||
						(Math.abs(currSquare[0] - (row + 1)) == 2 && // almost correct squares (index wrong) but not updating state
							Math.abs(currSquare[1] - (col + 1)) == 1) //knight position also not updating
					) {
						return {
							...item,
							highlighted: true,
						};
					} else {
						return {
							...item,
						};
					}
				})
			); //debug this!
			console.log(squareProps);
			return { squareProps: squareProps };
		});
		console.log('CLICKED!!!');
	};

	render() {
		return (
			<Board squareProps={this.state.squareProps}>
				<Knight
					src={knight}
					position={this.state.knightPosition}
					onClick={() => this.highlightSquares(this.state.knightPosition)}
				/>
			</Board>
		);
	}
}
export default ChessBoard;
