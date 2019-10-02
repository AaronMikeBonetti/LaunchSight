import React, { Component } from 'react'
import Campsite from './Campsite/Campsite'
import './campsites.css'

export default class Campsites extends Component {
    constructor(){
        super()
        this.state={
            campsites:[
                {name:'Jetty Park',
                 location:'9035 Campground Circle Cape Canaveral, Florida 32920',
                 campsiteClass:'Jetty',
                 link:'https://www.portcanaveral.com/Recreation/Jetty-Park-Beach-Pier'
                },
                {name:'KSC Campground',
                 location:'Audobon Rd, Merritt Island, FL 32953',
                 campsiteClass:'KSC',
                 link:'https://nasaexchange.ksc.nasa.gov/KARSParkInformation/AboutKARS#'
                },
                {name:'Manatee Hammock Park',
                 location:'7275 S. US 1 Titusville, FL 32780',
                 campsiteClass:'Manatee',
                 link:'https://www.campflorida.com/Campground/224/Manatee-Hammock-Park,Titusville,FL/'
                },
                {name:'KOA Campground',
                 location:'4513 West Main Street Mims, FL 32754',
                 campsiteClass:'KOA',
                 link:'https://koa.com/campgrounds/titusville/'
                }
            ],   
        }
    }
    render() {

        let campsites = this.state.campsites.map(campsite=>{
            
                return <Campsite
                key={campsite.name}
                name={campsite.name}
                location={campsite.location}
                link={campsite.link}
                campsiteClass={campsite.campsiteClass}
                />
                
        })
        
        return (
            <div className='campsites__container' id='campsites'>
                <h1 className='component__header'>Campsites</h1>
                {campsites}
            </div>
        )
    }
}


