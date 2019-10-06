import React from 'react'
import "./main_launch_card.css"

export default function LaunchCardFront(props){
    return (
        <div onClick={()=>{props.flipCard(props.value)}} className='launch__card__container'>
            <div className={props.frontCardClass}>
            <img className='launch__img' src={props.img} alt={props.name}/>
            <div className='launch__details__front'>
            <div className='launch__card__background__front'></div>
            <div className='launch__card__corner__tl__front'></div>
            <div className='launch__card__corner__tr__front'></div>
            <div className='launch__card__corner__bl__front'></div>
            <div className='launch__card__corner__br__front'></div>
            <h1 className='launch__header'>+ {props.name} +</h1>
                <h2 className='launch__location__front'>{props.location}</h2>
                <h2 className='launch__date__front'>{props.date}</h2>
                <h2 className='launch__button'>Learn More <i className='fas fa-arrow-right'></i></h2>
            </div>
            
            </div>
            <div className={props.backCardClass}>
            <h1 className='launch__header'>{props.name}</h1>
            <div className='launch__card__background__back'></div>
            <div className='launch__card__corner__tl__back'></div>
            <div className='launch__card__corner__tr__back'></div>
            <div className='launch__card__corner__bl__back'></div>
            <div className='launch__card__corner__br__back'></div>
            <ul className='launch__details__back'>
            
            <li className='launch__location__back'><span>Location: </span> {props.location}</li>
            <li className='launch__mission-description__back'><span>Description: </span> {props.description}</li>
            <li className='launch__mission-status__back'><span>Status: </span> {props.status}</li>
            <li className='launch__date__back'><span>Launch Date: </span>{props.date}</li>
            <li className='launch__campsite-name__back'><span>Closest Campsite:</span> {props.campsite}</li>
            
            </ul>
            <div className='launch__campsite-info__back'>
            <h2 className='launch__campsite-name__back'>{props.campsite}</h2>
            <img className='launch__campsite-img__back' src={props.campsiteImg}  alt={props.campsite}/>
            </div>
           
            </div>
            
        </div>
    )
}
