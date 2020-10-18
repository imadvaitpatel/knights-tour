import React from 'react';
import styled from 'styled-components';
import knight from '../img/knight.png';

// const Knight = (props) => {
//      //starting square [column, row]
//      const position = props.position;
//      const clickHandler = props.clickHandler;
//      console.log(position);
//     return(
//         <Piece src={knight} pos={position} onClick={() => clickHandler(position)}/>
//     )
// }
const Knight = styled.img`
    grid-column: ${props => props.position[1]} / ${props => props.position[1] + 1};
    grid-row: ${props => props.position[0]} / ${props => props.position[0] + 1};
    height: 1.9em;
    justify-self: center;
    position: absolute; 
`
export default Knight;