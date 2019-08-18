import React, { Component } from 'react'
import bonfireIcon from '../../assets/imgs/bonfireIcon_icon.png'

export default class Map extends Component {
    constructor(){
        super()
        this.state = {
            campsites: [{
                info: '<strong>Jetty Park Campground</strong><br>\
                400 Jetty Park Rd<br> Cape Canaveral,FL 32920<br>\
                            <a href="https://www.google.com/maps/dir//cape+canaveral+camping/@28.4700728,-81.5644413,9z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e0a65ab4e711e9:0x6e317a25e092d2fb!2m2!1d-80.5941313!2d28.406522">Get Directions</a>',
                lat: 28.406522,
                lng: -80.59632,
                icon: bonfireIcon
            },
            {
                info: '<strong>KSC Campground</strong><br>\
                Audobon Rd<br> Merritt Island, FL 32953<br>\
                            <a href="https://www.google.com/maps/place/KSC+Campground/@28.4376887,-80.6614487,17z/data=!3m1!4b1!4m5!3m4!1s0x88e0a8c93f7021d3:0xc5923429f4d397f5!8m2!3d28.4376887!4d-80.6592654">Get Directions</a>',
                lat: 28.4379131,
                lng: -80.6629852,
                icon: bonfireIcon
            },
            {
                info: '<strong>Manatee Hammock Campground</strong><br>\
                7275 S. , US-1<br> Titusville, FL 32780<br>\
                            <a href="https://www.google.com/maps/place/Manatee+Hammock+Campground/@28.5042909,-80.785199,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xfefa750110ee0478!8m2!3d28.5042986!4d-80.7829857">Get Directions</a>',
                lat: 28.4820741,
                lng: -80.8038945,
                icon: bonfireIcon
            },
            {
                info: '<strong>Titusville / Kennedy Space Center KOA</strong><br>\
                4513 W Main St<br> Mims, FL 32754<br>\
                            <a href="https://www.google.com/maps/place/Titusville+%2F+Kennedy+Space+Center+KOA/@28.6651356,-80.877193,17z/data=!3m1!4b1!4m5!3m4!1s0x88e74b9517d6229d:0x19c0562c7c5f01f1!8m2!3d28.6651356!4d-80.8750097">Get Directions</a>',
                lat: 28.6651356,
                lng: -80.877193,
                icon: bonfireIcon
            }
        ],


        launchSites:[{
            info: '<strong>SpaceX Launch Complex 40</strong><br>\
            Cape Canaveral, FL<br>\
                        <a href="https://www.google.com/maps/place/SpaceX+Launch+Complex+40/@28.5583416,-80.6502184,11.96z/data=!4m5!3m4!1s0x88e0bb1a0a9edd77:0x983d6a01a54ad7e5!8m2!3d28.5619795!4d-80.5771904">Get Directions</a>',
            lat: 28.5619795,
            lng: -80.5773218,
            icon: rocketIcon
        },{
            info: '<strong>Launch Complex 34</strong><br>\
            Cape Canaveral Air Force Station, FL<br>\
                        <a href="https://www.google.com/maps/place/Launch+Complex+34/@28.5743247,-80.7290562,11z/data=!4m8!1m2!2m1!1sLaunch+Complex+39A!3m4!1s0x88e0a4b72f4ad02b:0x2e65414601c6bab1!8m2!3d28.5217945!4d-80.561124">Get Directions</a>',
            lat: 28.5218925,
            lng: -80.5613055,
            icon: rocketIcon
        },
        {
            info: '<strong>Launch Complex 14</strong><br>\
            Cape Canaveral Air Force Station, FL<br>\
                        <a href="https://www.google.com/maps/place/Launch+Complex+34/@28.5743247,-80.7290562,11z/data=!4m8!1m2!2m1!1sLaunch+Complex+39A!3m4!1s0x88e0a4b72f4ad02b:0x2e65414601c6bab1!8m2!3d28.5217945!4d-80.561124">Get Directions</a>',
            lat: 28.4911491,
            lng: -80.5490547,
            icon: rocketIcon
        },
        {
            info: '<strong>Launch Complex 41</strong><br>\
            Cape Canaveral Air Force Station, FL<br>\
                        <a href="https://www.google.com/maps/place/CCAFS+Space+Launch+Complex+41/@28.5832241,-80.5833146,18z/data=!4m5!3m4!1s0x0:0x8fa7b529b39d5f65!8m2!3d28.5834713!4d-80.5828359">Get Directions</a>',
            lat: 28.5834313,
            lng: -80.5829366,
            icon: rocketIcon
        },
        {
            info: '<strong>Launch Complex 37</strong><br>\
            Cape Canaveral Air Force Station, FL<br>\
                        <a href="https://www.google.com/maps/place/Launch+Complex+37/@28.532205,-80.5671016,19.25z/data=!4m8!1m2!2m1!1sLaunch+Complex+39A!3m4!1s0x88e0bb4acba483e3:0xd2ffb5e35b875464!8m2!3d28.5323018!4d-80.5666711">Get Directions</a>',
            lat: 28.532205,
            lng: -80.5671016,
            icon:   rocketIcon
        },
        {
            info: '<strong>Launch Complex 39A</strong><br>\
            Cape Canaveral Air Force Station, FL<br>\
                        <a href=""https://www.google.com/maps/place/Launch+Pad+39A+-+Kennedy+Space+Center/@28.607819,-80.6043207,19.54z/data=!4m8!1m2!2m1!1s39A!3m4!1s0x88e0bb35c3e49421:0xa9e1bb92ccf32340!8m2!3d28.6079105!4d-80.6040429">Get Directions</a>',
            lat: 28.607819,
            lng:-80.6043207,
            icon: rocketIcon
        }
    ]

        }

        this.handleChange = e =>{
            let {name,value} = e.target
            this.setState({
                [name]: value
            })
        }
    }

    render() {
        // this.state.campsites.forEach(campsite=>{
        //     marker = new google.maps.Marker({
        //         position: new google.maps.LatLng(campsite.lat, campsite.lng),
        //         map: map,
        //         icon: campsite.icon
        //     })
    
        //     google.maps.event.addListener(marker, 'click', (function (marker, i) {
        //         return function () {
        //             infoWindow.setContent(campsite.info);
        //             infoWindow.open(map, marker);
        //         }
        //     })(marker, i))
        // }
        return (
            <div>
                
            </div>
        )
    }
}

	
	
    
    //Launch Sites 




	
	

	let map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10.5,
		center: new google.maps.LatLng(28.5722, -80.6077),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	let infoWindow = new google.maps.InfoWindow({});


	
        
    
    

		

