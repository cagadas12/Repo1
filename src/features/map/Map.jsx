import React, { Component } from 'react';
import {Map as GoogleMap, GoogleApiWrapper, Marker, Circle, InfoWindow} from 'google-maps-react';  
   
import './map.scss';

class Map extends Component {
    state = {
        selectedPlace: {},
        activeMarker: {},
    }
    onMarketClick(props, marker, e) {
        this.setState({           
            activeMarker: marker,
            showingInfoWindow: true,
            selectedPlace: props,
        });
    }
    render() {
        const { distance, stores } = this.props;
        const distanceInKM = parseFloat(distance) * 1000;
        return (        
            <div className='map-component'>
                {this.props.currentPosition && (
                    <GoogleMap 
                        google={this.props.google} 
                        onGoogleApi
                        initialCenter={this.props.currentPosition}
                    >
                        <Marker positioon={this.props.currentPosition} />
                        <Circle
                            center={this.props.currentPosition}
                            radius={distanceInKM}
                            strokeOpacity={0.3}
                            strokeWeight={1}
                            fillColor='#017ac7'
                            fillOpacity={0.1}
                       />
                       {stores &&
                         stores.map((stores) => (
                           <Marker
                                key={stores.id}
                                title={stores.name}
                                name={stores.name}
                                position={{ lat: stores.latitude, lng: stores.longitude }}
                                onClick={(props, marker, e) =>
                                   this.onMarketClick(props, marker, e)
                                }
                            />    
                        ))}
                        <InfoWindow
                          marker={this.state.activeMarker}
                          visible={this.state.shoingInfoWindow}
                        >
                           <div>
                               <h1>{this.state.selectedPlace.name}</h1>
                           </div>
                        </InfoWindow>
                    </GoogleMap>
                )};    
            </div>
        );
    }
}
export default  GoogleApiWrapper({
    apikey: 'AIzaSyCa10pZUKTxS2ra_x_axyJw4uyAITmjnnY',
})(Map);