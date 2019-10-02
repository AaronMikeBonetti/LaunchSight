import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component} from 'react';
import './map.css'
import bonfireIcon from '../../assets/imgs/map-icons/bonfire.png'
import rocketIcon from '../../assets/imgs/map-icons/rocket.png'
export class MapContainer extends Component {
  constructor(){
    super()
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      locations: [{
        name: `Jetty Park Campground`,
        address: `400 Jetty Park Rd, Cape Canaveral,FL 32920`,
        link:`https://www.google.com/maps/place/Jetty+Park+Campground/@28.4066247,-80.5966515,17z/data=!3m1!4b1!4m8!3m7!1s0x88e0a65ab4e711e9:0x6e317a25e092d2fb!5m2!4m1!1i2!8m2!3d28.40662!4d-80.5944575`,
        lat: 28.406522,
        lng: -80.59632,
        icon: bonfireIcon
    },
    {
        name: `KSC Campground`,
        address: `Audobon Rd, Merritt Island, FL 32953`,
        link:`https://www.google.com/maps/place/KSC+Campground/@28.4376887,-80.6614487,17z/data=!3m1!4b1!4m5!3m4!1s0x88e0a8c93f7021d3:0xc5923429f4d397f5!8m2!3d28.4376887!4d-80.6592654`,
        lat: 28.4379131,
        lng: -80.6629852,
        icon: bonfireIcon
    },
    {
        name: `Manatee Hammock Campground`,
        address: `7275 S., US-1 Titusville, FL 32780`,
        link:`https://www.google.com/maps/place/Manatee+Hammock+Campground/@28.5042909,-80.785199,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xfefa750110ee0478!8m2!3d28.5042986!4d-80.7829857`,
        lat: 28.4820741,
        lng:-80.8038945 ,
        icon: bonfireIcon
    },
    {
        name: `Kennedy Space Center KOA`,
        address: `4513 W Main St Mims, FL 32754`,
        link:`https://www.google.com/maps/place/Titusville+%2F+Kennedy+Space+Center+KOA/@28.6651356,-80.877193,17z/data=!3m1!4b1!4m5!3m4!1s0x88e74b9517d6229d:0x19c0562c7c5f01f1!8m2!3d28.6651356!4d-80.8750097`,
        lat: 28.6651356,
        lng: -80.877193,
        icon: bonfireIcon
    },
    {
        name: `SpaceX Launch Complex 40`,
        address: `Cape Canaveral, FL`,
        link:`https://www.google.com/maps/place/SpaceX+Launch+Complex+40/@28.5583416,-80.6502184,11.96z/data=!4m5!3m4!1s0x88e0bb1a0a9edd77:0x983d6a01a54ad7e5!8m2!3d28.5619795!4d-80.5771904`,
        lat: 28.5619795,
        lng: -80.5773218,
        icon: rocketIcon
    },
    {
        name: `Launch Complex 34`,
        address: `Cape Canaveral Air Force Station, FL`,
        link:`https://www.google.com/maps/place/Launch+Complex+34/@28.5217992,-80.563318,17z/data=!3m1!4b1!4m5!3m4!1s0x88e0a4b72f4ad02b:0x2e65414601c6bab1!8m2!3d28.5217945!4d-80.561124`,
        lat: 28.5218925,
        lng: -80.5613055,
        icon: rocketIcon
    },
    {
        name: `Launch Complex 14`,
        address: `Cape Canaveral Air Force Station, FL`,
        link:`https://www.google.com/maps/place/Launch+Complex+14/@28.4911538,-80.5490654,17z/data=!3m1!4b1!4m5!3m4!1s0x88e0a4824b668a7d:0x1bf3ffb945312456!8m2!3d28.4911491!4d-80.5468714`,
        lat:28.4911491,
        lng: -80.5490547,
        icon: rocketIcon
    },
    {
        name: `Launch Complex 41`,
        address: `Cape Canaveral Air Force Station, FL`,
        link:`https://www.google.com/maps/place/CCAFS+Space+Launch+Complex+41/@28.5832241,-80.5833146,18z/data=!4m5!3m4!1s0x0:0x8fa7b529b39d5f65!8m2!3d28.5834713!4d-80.5828359`,
        lat:28.5834313,
        lng: -80.5829366,
        icon: rocketIcon
    },
    {
        name: `Launch Complex 37`,
        address: `Cape Canaveral Air Force Station, FL`,
        link:`https://www.google.com/maps/place/Launch+Complex+37/@28.532205,-80.5671016,19.25z/data=!4m8!1m2!2m1!1sLaunch+Complex+39A!3m4!1s0x88e0bb4acba483e3:0xd2ffb5e35b875464!8m2!3d28.5323018!4d-80.5666711`,
        lat: 28.532205,
        lng: -80.5671016,
        icon: rocketIcon
    },
    {
        name: `Launch Complex 39A`,
        address: `Cape Canaveral Air Force Station, FL`,
        link:`https://www.google.com/maps/place/Launch+Pad+39A+-+Kennedy+Space+Center/@28.607819,-80.6043207,19.54z/data=!4m8!1m2!2m1!1s39A!3m4!1s0x88e0bb35c3e49421:0xa9e1bb92ccf32340!8m2!3d28.6079105!4d-80.6040429`,
        lat: 28.607819,
        lng: -80.6043207,
        icon: rocketIcon
    }]
  };
}
  
 
  onMarkerClick = (props, marker, e) =>{
    console.log(props)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  
render() {
  
  let markers =  this.state.locations.map(location=>{ 
  return <Marker key={location.lat} 
  name={location.name}
  address={location.address}
  link={location.link}
  onClick={this.onMarkerClick}
  position={{lat: location.lat, lng: location.lng}}
  icon={{
    url: location.icon,
  }}
  />
})

let mapStyles = {
  width: '70vw',
  height: '600px',
  margin: '50px auto 0px auto',
}

  return (
    <div className='map__container' id='map'>
      <h1 className='component__header'>Map</h1>
      <Map google={this.props.google} 
    initialCenter={{
      lat: 28.556522,
      lng: -80.6629852,
      }} 
      zoom={11}
      style={mapStyles}
      >
    {markers}
      <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
              <h2>{this.state.selectedPlace.address}</h2>
              <a href={this.state.selectedPlace.link}>Get Directions</a>
            </div>
        </InfoWindow>
  </Map>
  
  </div>
    
 );
 }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDQGdQXtRFwyoaz7_QIK_GLRH2X47PRwSA'
})(MapContainer)

