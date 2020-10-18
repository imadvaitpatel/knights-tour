import React from 'react';
import styled from 'styled-components';

export const Board = ({ squareProps, children }) => {
	const squares = squareProps.map(arr =>
		arr.map(item => {
			return <Square {...item} />;
		})
	);
	return (
		<Grid>
			{squares}
			{children}
		</Grid>
	);
};

export default Board;

const Grid = styled.div`
	display: grid;
	grid-template-rows: repeat(8, auto);
	grid-template-columns: repeat(8, auto);
	position: absolute;
`;

const Square = styled.div`
	height: 2.5em;
	width: 2.5em;
	background-color: ${props => props.color};
	${props =>
		props.highlighted
			? `border-style: solid; border-color: red; background-color: pink;`
			: ``}
`;
