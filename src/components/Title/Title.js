import React, { Component } from 'react'
import './title.css'

export default class Title extends Component {
    render() {
        return (
            <div className='title__container'>
                <div className='title__jumbotron__container'>
                    <h1 className='title__jumbotron__header'>Launch-Sight</h1>
                    <hr/>
                    <p className='title__jumbotron__paragraph-1'>Seeing rocket science doesn't have to be rocket science.</p>
                   
                    <ul className='title__jumbotron__icons'>
                        <li><i className='fas fa-campground'></i></li>
                        <li><i className='fas fa-rocket'></i></li>
                        <li><i className='fas fa-cloud'></i></li>
                        
                    </ul>
                </div>
                
            </div>
        )
    }
}
