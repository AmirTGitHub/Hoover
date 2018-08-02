import React from 'react';
import arrow from '../assets/arrow.png'

const HooverController = (props) => {
    return (
        <div className='hooverController'>
            <h1>Hoover Controller</h1>
            <button className='up btn-controller' onClick={props.goUp}>
                <img src={arrow} alt='arrow up' />
            </button>
            <div>
                <button className='btn-controller' onClick={props.goLeft}>
                    <img src={arrow} alt='arrow left' />
                </button>
                <button className='right btn-controller' onClick={props.goRight}>
                    <img src={arrow} alt='arrow right' />
                </button>
            </div>

            <button className='down btn-controller' onClick={props.goDown}>
                <img src={arrow} alt='arrow down' />
            </button>

        </div>
    )
}


export default HooverController