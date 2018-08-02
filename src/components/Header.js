import React from 'react';

const Header = (props) =>{
    return(
        <div className='header'>
            <h1 className='header--title' >{props.headerTitle}</h1>
        </div>
    )
}

export default Header