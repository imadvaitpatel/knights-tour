import React, { Component } from 'react';
import styled from 'styled-components';
import Knight from './Knight';
import Squares from './Square';
import Board from './Board';
import knight from '../img/knight.png'

class ChessBoard extends Component {
	constructor() {
		super();
		this.state = {
			knightPosition: [3, 2],
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
		console.log('newSquares::');
		console.log(newSquares);

		this.setState(state => {
			const list = state.squareProps.map((arr, row) =>
				arr.map((item, col) => {
                    console.log([row, col]);
					if (
						(Math.abs(currSquare[0] - row) == 1 &&
						Math.abs(currSquare[1] - col) == 2) ||
						(Math.abs(currSquare[0] - row) == 2 &&      // almost correct squares (index wrong) but not updating state
						Math.abs(currSquare[1] - col) == 1)         //knight position also not updating
					) {
						var x = {
							...item,
							highlighted: true,
						};
						console.log('expected value IF::');
						console.log(x);
						return x;
					} else {
						var y = {
							...item,
						};
						console.log('expected value ELSE::');
						console.log(y);
						return y;
					}
				})
			); //debug this!
			return list;
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
