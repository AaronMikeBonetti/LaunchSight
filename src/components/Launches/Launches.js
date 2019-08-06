import React, { Component } from 'react'
import './launches.css'
import LaunchCard from './LaunchCard'



export default class Launches extends Component {
    constructor(){
        super()
        this.state = {
            launchesURL: 'https://launchlibrary.net/1.4/launch/next/100',
            launches:[],
            campsites:[
                {'name':'Jetty Park',
                 'location':'9035 Campground Circle Cape Canaveral, Florida 32920',
                 'googleImg':''
                },
                {'name':'KSC Campground',
                 'location':'Audobon Rd, Merritt Island, FL 32953',
                 'googleImg':'./google-imgs/KSC.png'
                },
                {'name':'Manatee Hammock Park',
                 'location':'7275 S. US 1 Titusville, FL 32780',
                 'googleImg':''
                },
                {'name':'KOA Campground',
                 'location':'4513 West Main Street Mims, FL 32754',
                 'googleImg':''
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
        
        this.state.launches.forEach(launch=>{
            switch(launch.location.pads[0].id){
               case 84:
                  launch.campsite = this.state.campsites[1].name
                break 
               case 85:
                    launch.campsite = this.state.campsites[1].name
                break 
               case 62:
                    launch.campsite = this.state.campsites[1].name 
                break 
                default:
                    launch.campsite = "unknown"
            }   
        })
    }
    
    addCampsiteImg = () =>{
        this.state.launches.forEach(launch=>{
            switch(launch.location.pads[0].id){
               case 84:
                  launch.campsiteImg = this.state.campsites[1].googleImg
                break 
                default:
                    launch.campsiteImg = "unknown"
            }   
        })
    }


    async fetchLaunches(){
        try {
            let response = await fetch(this.state.launchesURL)
            let data = await response.json()
        
            await this.setState({
            //I filtered out all the launches that were not at Cape Canaveral and limited the results to 10
                launches: data.launches.filter(launch=>{
                    let launches = []
                    if(launch.location.id===16||launch.location.id===18){
                    return launches.push(launch)
                    }
                    else{
                        return null
                    }
                }).splice(0,9), 
        })

        }
        catch(e){
        console.error(e)
        } 
    }

    
    
flipCard = (launch) =>{
        
        this.state.launches.forEach(stateLaunch=>{
            if(stateLaunch.id === launch.id){
                this.setState(prevState=>{
                    launch.frontCardActive = !launch.frontCardActive
                })
                
            }
            this.setState({})
            
    }) 
}

    
   async componentDidMount(){
       await this.fetchLaunches()
       await this.addActiveState()
       await this.addCampsite()
       await this.addCampsiteImg() 
       await this.setState({})
    }


    render() {
        // this.addCampsite()
        console.log(this.state.launches)
       const frontCard = this.state.launches.map(launch=>{
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
            
        })
       
        
    
    
        return(
            <div className='launches__container'>
                <div className='launches__header__container'>
                    <h1>Launches</h1>
                    <p>This site will give you the run down on what's going up, when its going and where the best places to catch a glimpse are.</p>
                </div>
                {frontCard}
                

            </div>
        )
    
    


}
}
