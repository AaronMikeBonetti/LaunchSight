import React, { Component } from 'react'
import './navbar.css'
import './navbar-queries.css'



export default class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }
    getComponentHeights = () =>{
        this.setState({
            topOfLaunches: document.getElementById('launches'),
            topOfMap: document.getElementById('map'),
            topOfCampsites: document.getElementById('campsites')
        })
    }
    componentDidMount(){
        setTimeout(this.getComponentHeights,1000)
        
        
    }

    
    
    render() {
        
        return (
            <ul className='navbar__container'>
                    <i onClick={()=>window.scrollTo(0,0)} className='fas fa-rocket' ></i>
                    <i onClick={()=>window.scrollTo(0,0)} className='fas fa-fire'></i>
                    <li  onClick={()=>this.state.topOfLaunches.scrollIntoView()}>LAUNCHES</li>
                    <li onClick={()=>this.state.topOfMap.scrollIntoView()}>MAP</li>
                    <li onClick={()=>this.state.topOfCampsites.scrollIntoView()}>CAMPSITES</li>
                    <span className='navbar__sidebar-1'></span>
                    <span className='navbar__sidebar-2'></span>    
            </ul>
        )
    }
}

