import React, { Component } from 'react'
import './launches.css'
import './launches-queries.scss'

import LaunchCard from './LaunchCard'
import MainLaunchCard from './Main Launch Card/MainLaunchCard'
import KSCImg from '../../assets/imgs/google-imgs/KSC.png'
import KOAImg from '../../assets/imgs/google-imgs/KOA.png'
import ManateeImg from '../../assets/imgs/google-imgs/Manatee.png'



export default class Launches extends Component {
    constructor(){
        super()
        this.state = {
            launchesURL: 'https://launchlibrary.net/1.4/launch/next/100',
            launches:[],
            campsites:[
                {'name':'Jetty Park',
                 'location':'9035 Campground Circle Cape Canaveral, Florida 32920',
                 'campsiteImg':KSCImg
                },
                {'name':'KSC Campground',
                 'location':'Audobon Rd, Merritt Island, FL 32953',
                 'campsiteImg':KSCImg
                },
                {'name':'Manatee Hammock Park',
                 'location':'7275 S. US 1 Titusville, FL 32780',
                 'campsiteImg':ManateeImg
                },
                {'name':'KOA Campground',
                 'location':'4513 West Main Street Mims, FL 32754',
                 'campsiteImg':KOAImg
                }
            ],   
               
        }
           
    }

    addActiveState = () =>{
        this.state.launches.forEach(launch=>{
            launch.frontCardActive = true
        })
        
    }

    
    addCampsite = () =>{
        
        let launches = this.state.launches

        launches.forEach(launch=>{
            switch(launch.location.pads[0].id){
               case 84:
                  launch.campsite = this.state.campsites[1].name
                  launch.campsiteImg = this.state.campsites[1].campsiteImg
                  
                break 
               case 85:
                launch.campsite = this.state.campsites[2].name
                launch.campsiteImg = this.state.campsites[2].campsiteImg
                break 
               case 62:
                launch.campsite = this.state.campsites[3].name
                launch.campsiteImg = this.state.campsites[3].campsiteImg 
                break 
                default:
                    launch.campsite = "unknown"
            }   
        })
       
        this.setState({launches})
    }

    
    
    async fetchLaunches(){
        try {
            let response = await fetch(this.state.launchesURL)
            let data = await response.json()
        
            this.setState({
                launches: data.launches.filter(launch=>{
                    let launches = []
                    if(launch.location.id===16||launch.location.id===18){
                    return launches.push(launch)
                    }
                    else{
                        return null
                    }
                }).splice(0,7), 
        })

        }
        catch(e){
        console.error(e)
        } 
    }

    
    
flipCard = (launch) =>{
        let launches = this.state.launches
        launches.forEach(stateLaunch=>{
            if(stateLaunch.id === launch.id){
                return  launch.frontCardActive = !launch.frontCardActive 
            }
            else{
                return
            }
    }) 
        this.setState({launches})
}

async updateData(){
    await this.fetchLaunches()
     this.addActiveState()
     this.addCampsite()
}

    componentDidMount(){
       this.updateData()
       
    }
    

    

    render() {
        
       const launchCard = this.state.launches.map(launch=>{
           if(this.state.launches[0].id===launch.id){
            return <MainLaunchCard
            frontCardClass={launch.frontCardActive?'main__launch__card__front active':'main__launch__card__front hidden'}
            backCardClass={!launch.frontCardActive?'main__launch__card__back active':'main__launch__card__back hidden'}
            value={launch} 
            flipCard={this.flipCard}
            key={launch.id} 
            name={launch.rocket.name} 
            img={launch.rocket.imageURL}
            date={launch.net}
            location={launch.location.pads[0].name}
            description={launch.missions===undefined?launch.missions[0].description:'No Info'}
            status={launch.status===1?`Green`:`Red`}
            campsite={launch.campsite} 
            campsiteImg={launch.campsiteImg}
            
            />
                
            
           }
           else{
            return <LaunchCard
            frontCardClass={launch.frontCardActive?'launch__card__front active':'launch__card__front hidden'}
            backCardClass={!launch.frontCardActive?'launch__card__back active':'launch__card__back hidden'}
            value={launch} 
            flipCard={this.flipCard}
            key={launch.id} 
            name={launch.rocket.name} 
            img={launch.rocket.imageURL}
            date={launch.net}
            location={launch.location.pads[0].name}
            campsite={launch.campsite} 
            campsiteImg={launch.campsiteImg}

            >
            
            </LaunchCard>
            
            }
        })
    
       
        
    
    
        return(
            <div className='launches__container' id='launches'>
                
                <div className='launches__header__container'>
                    <h1 className='component__header'>Launches</h1>
                </div>
                
                {launchCard}
                

            </div>
        )
    
    


}
}
