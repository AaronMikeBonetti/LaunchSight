//A simple way to Redux App 

import React, {Component} from 'react';
// import { createStore, applyMiddleware } from 'redux'
import './app.css'
import Loader from './components/Loader/Loader'
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title';
import Launches from './components/Launches/Launches';
import GoogleApiWrapper from './components/Map/Map'
import Campsites from './components/Campsites/Campsites'


export default class App extends Component{

  constructor(){
    super()
    this.state = {
      loaderActive:true
    }
    
    setInterval(()=>{
      this.setState({loaderActive:false})
    },3000)
  }


 render(){
   if(this.state.loaderActive===true){
 return <div>  
        {/* <Loader/> */}
        <Title/>
        <Launches/>
        <Launches/>
        <GoogleApiWrapper/>
        <Campsites/>
        </div>
   }
   
   else{
 return <div>  
        <Navbar/>
        <Title/>
        <Launches/>
        <GoogleApiWrapper/>
        <Campsites/>
</div>
 
}
}
}












