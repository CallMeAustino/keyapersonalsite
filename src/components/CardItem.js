import React from 'react';
import { Link }  from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <img className='card' src={props.src} alt='anime'></img>
        </>
    )
}

export default CardItem;