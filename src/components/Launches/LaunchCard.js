import React from 'react'
import "./launch_card.css"

export default function LaunchCardFront(props){
    return (
        <div onClick={()=>{props.flipCard(props.value)}} className='launch__card__container'>
            <div className={props.frontCardClass}>
            <img className='launch__img' src={props.img} alt={props.name}/>
            <h1 className='launch__header'>{props.name}</h1>
            <div className='launch__details__front'>
                <h2 className='launch__location__front'>{props.location}</h2>
                <h2 className='launch__date__front'>{props.date}</h2>
            </div>
            <h2 className='launch__button'>Learn More <i className='fas fa-arrow-right'></i></h2>
            </div>
            <div className={props.backCardClass}>
            <h1 className='launch__header'>{props.name}</h1>
            <ul className='launch__details__back'>
            <li className='launch__location__back'><span>Location: </span> {props.location}</li>
            <li className='launch__date__back'><span>Launch Date: </span>{props.date}</li>
            <li className='launch__campsite__back'><span>Best Campsite: </span>{props.campsite}</li>
            </ul>
            <img className='launch__campsite-img__back' src={props.campsiteImg} alt={props.campsite}/>
            </div>
        </div>
    )
}
