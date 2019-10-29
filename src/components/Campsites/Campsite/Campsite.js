import React from 'react';
import './campsite.css'
import './campsite-queries.scss'

const Campsite = (props) => {
    return (
        <div className={`campsite__container ${props.campsiteClass}`} >

            <h1 className='campsite__name'>{props.name}</h1>
            <div className='campsite__details__container'>
            <h2>{props.location}</h2>
            <a href={props.link} rel='noopener noreferrer' target='_blank'>Website <i className='fas fa-arrow-right'></i></a>
            </div>
            
        </div>
    );
}

export default Campsite;
