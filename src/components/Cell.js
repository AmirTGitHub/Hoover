import React from 'react';
import Hoover from '../assets/Hoover_01png'
import Dirt from '../assets/Dirt_01.png'

const Cell = (props) => {
    return (
        props.hoover !== props.position && props.dirt !== props.position ?
            <div className='cell' id={props.position} ></div>
            : props.hoover === props.position ? <img src={Hoover} className='cell' alt='a robotic hoover' />
                : props.dirt === props.position ? <img src={Dirt} className='cell' alt='an imaginary dirt' /> : null

    )
}

export default Cell