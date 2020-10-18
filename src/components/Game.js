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
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
				],
				[
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
				],
				[
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
				],
				[
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
				],
				[
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
				],
				[
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
				],
				[
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
				],
				[
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'black',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
					{
						color: 'white',
						highlighted: false,
						clickHandler: this.moveKnight,
					},
				],
			],
		};
	}

	highlightSquares = currSquare => {
		this.setState(prevState => {
			const squareProps = prevState.squareProps.map((arr, row) =>
				arr.map((item, col) => {
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
			);
			return { squareProps: squareProps };
		});
		console.log('CLICKED!!!');
	};

	moveKnight = newSquare => {
		this.setState(prevState => {
			const squareProps = prevState.squareProps.map((arr, row) =>
				arr.map((item, col) => {
                    console.log([row, col]);
                    console.log(prevState.knightPosition);
					if (row+1 == prevState.knightPosition[0] && col+1 == prevState.knightPosition[1]) {
						console.log('LAST KNIGHT POSITION');
						return {
							...item,
							color: 'green',
							highlighted: false,
						};
					} else if (item.highlighted) {
						console.log('NEED TO STOP HIGHLIGHTING');
						return {
							...item,
							highlighted: false,
						};
                    }
                    else {
                        return {
                            ...item,
                        }
                    }
				})
			);
			console.log(squareProps);
			return {
				knightPosition: [newSquare[0] + 1, newSquare[1] + 1],
				squareProps: squareProps,
			};
		});
		console.log('CLICKED SQUARE!!!');
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
