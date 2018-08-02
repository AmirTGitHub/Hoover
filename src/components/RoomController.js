import React from 'react';
import Input from './Input'

const RoomController = (props) => {

    return (
        <div>
            <div className='centre'>
                <Input title='Row' name='row' getRow={props.getRow} disabled={props.disabled} />
                <Input title='Column' name='column' getColumn={props.getColumn} disabled={props.disabled} />
            </div>
            <div className='centre' >
                {props.display ?
                    <Input title='Dirt position' name='dirt' getDirt={props.getDirt} placeholder={`please write a number between 0 and ${props.maxNumber}`} />
                    : null}
                <button className='btn' onClick={props.createRoom} > Create the room </button>

            </div>

        </div>
    )
}
export default RoomController