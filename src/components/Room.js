import React from 'react';
import Cell from './Cell'


const Room = (props) => {
    return (
        <div style={{ width: `${props.width ? props.width * 51 : 100}px` }} className='roomFloor' >
            {props.grid ? props.grid.map((item, index) => {
                return (

                    <Cell key={index} position={index + 1} hoover={props.hoover} dirt={props.dirt} />

                )
            }) : null}
        </div>
    )
}

export default Room