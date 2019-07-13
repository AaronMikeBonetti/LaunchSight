import React from 'react'
import ("./launch.scss")

export default function Launch(props) {
    return (
        <div className="launch__container">
            <img className="launch__img" src={props.img} alt={props.name}/>
            <h1 className="launch__header">{props.name}</h1>
            <div className="launch__details"><h2 className="launch__location">{props.location}</h2>
            <h2 className="launch__date">{props.date}</h2>
            </div>
        </div>
    )
}
