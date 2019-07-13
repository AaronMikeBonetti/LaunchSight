import React from 'react'
import "./loader.scss"

export default function Loader() {
    return (
    
        <div className="loader__container">
                
                <div className="stars"></div>
                <div className="twinkling"></div>

                <div className="loader__rocket__container">
                <i className="fas fa-rocket"></i>
                </div>
                   
                <div className="loader__globe__container">
                    <div className="loader__globe__background"></div>
                    <div className="loader__globe"><i className="fas fa-globe-europe"></i></div>
                    
                </div>
            </div> 
        
    
    )
}
