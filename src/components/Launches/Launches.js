import React, { Component } from 'react'
import "./launches.scss"
import Launch from "./Launch"


export default class Launches extends Component {
    constructor(){
        super()
        this.state = {
            launchesURL: "https://launchlibrary.net/1.4/launch/next/100",
            launches:[]
            
        }    
    }
    

    
    async componentDidMount(){
        try {
            let response = await fetch(this.state.launchesURL)
            let data = await response.json()
        
            await this.setState({
            //I filtered out all the launches that were not at Cape Canaveral and limited the results to 10
                launches: data.launches.filter(launch=>{
            
                    if(launch.location.id===16||launch.location.id===18){
                    return launch
                    }
                }).splice(0,9), 
        })

        }
        catch(e){
        console.error(e)
        } 
    }


    render() {
        
       const items = this.state.launches.map(launch=>{
            return <Launch 
            key={launch.id} 
            name={launch.rocket.name} 
            img={launch.rocket.imageURL}
            date={launch.net}
            location={launch.location.pads[0].name}> 
            </Launch>
            
        })
        
    
    
        return(
            <div className="launches__container">
                <div className="launches__header__container">
                    <h1>Launches</h1>
                    <p>This site will give you the run down on what's going up, when its going and where the best places to catch a glimpse are.</p>
                </div>
                {items}

            </div>
        )
    
    


}
}
