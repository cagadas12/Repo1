import React, { Component } from 'react';
import {Map as GoogleMap, GoogleApiWrapper, Marker, Circle } from 'google-maps-react';  
   
import './map.scss';

class Map extends Component {
    render() {
        const { currentPosition, distance } = this.props;
        const distanceInKM = parseFloat(distance) * 1000;
        return (        
            <div className='map-component'>
                <GoogleMap google={this.props.google} onGoogleApi>;
                  <Marker/>
                  <Circle
                  center={this.props.currentPosition}
                  radius={distanceInKM}
                  strokeOpacity={0.3}
                  strokeWeight={1}
                  fillColor='#017ac7'
                  fillOpacity={0.1}
                  />
                </GoogleMap>
            </div>
        );
    }
}
export default  GoogleApiWrapper({
    apikey: 'AIzaSyCa10pZUKTxS2ra_x_axyJw4uyAITmjnnY',
})(Map);