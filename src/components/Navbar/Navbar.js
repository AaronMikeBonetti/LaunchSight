import React, { Component } from 'react'
import './navbar.css'

export default class Navbar extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render() {
        return (
            <ul className='navbar__container'>
                    <i className='fas fa-rocket'></i>
                    <i className='fas fa-fire'></i>
                    <li>LAUNCHES</li>
                    <li>MAP</li>
                    <li>CAMPSITES</li>
                    <span className='navbar__sidebar-1'></span>
                    <span className='navbar__sidebar-2'></span>
                    
            </ul>
        )
    }
}

