import React, { Component } from 'react'
import './title.css'



export default class Title extends Component {
    constructor(){
        super()
        this.state = {
            isFaded:false
        }
        window.addEventListener('scroll',e=>{
            const cloudRight = document.querySelector('.clouds__img__right')
            const cloudLeft = document.querySelector('.clouds__img__left')
            const background = document.querySelector('.title__container')
        
            let scrolled = window.pageYOffset
            let rate1 = scrolled * - 1
            let rate2 = scrolled * -.7
            let rate3 = scrolled / 3

            //add cloud parallax effect
            if(scrolled<800){
                cloudRight.style.transform = `translate3d(0px ,${rate1}px, 0px)`
                cloudLeft.style.transform = `translate3d(0px ,${rate2}px, 0px)`
                background.style.transform = `translate3d(0px ,${rate3}px, 0px)`
                this.setState({
                    isFaded:false
                })
            }
            //Add jumbotron fade in and out
            if(scrolled>300 && scrolled < 1000){
                this.setState({
                    isFaded:true
                })
            }
            else{
                return
            }
        })
        
    }
    render() {
        return (
            <div id='title' className='title__container'>
                <div className='clouds__img__right'/>
                <div className='clouds__img__left'/>
                <div className={this.state.isFaded?'title__jumbotron__container fade_out':'title__jumbotron__container fade_in'}>
                    
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
