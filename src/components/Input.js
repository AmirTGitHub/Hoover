import React from 'react';

const Input = (props) => {
    return (
        <form style={{ padding: 50 }}>
            <h3>{props.title}</h3>
            <label >{props.placeholder}</label>
            <input type='number'
                name={props.name}
                value={props.value}
                disabled={props.disabled}
                onChange={props.name === 'row' ? props.getRow : props.name === 'column' ? props.getColumn : props.name === 'dirt' ? props.getDirt : null}
                placeholder='number'
                data-test="input"

            />

        </form>
    )
}

export default Input