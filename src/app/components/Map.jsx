import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, Marker, MapMarkerIcons } from './GoogleMap'

import './Map.style.css'

/**
 * Starting location of the map is set to San Francisco
 */
const SAN_FRANCISCO_COORDINATES = {latitude: 37.772, longitude: -122.431};

const EXAMPLE_MARKER = {latitude: 37.774345, longitude: -122.42203};


class Map extends Component {

  static propTypes = {};

  static defaultProps = {};

  onMarkerClicked(marker, ad) {
    const lat = marker.latLng.lat();
    const lng = marker.latLng.lng();
    console.log(`clicked a map marker: `, lat, lng);

    // this.setState({isSelected: !this.state.isSelected});
    this.props.onClick(ad);
  }

  render() {
    const {ads, selected } = this.props;
    const { latitude=SAN_FRANCISCO_COORDINATES.latitude, longitude=SAN_FRANCISCO_COORDINATES.longitude } = selected || {};
    console.log('lat lng' ,latitude, longitude);
    return (
        <GoogleMap
          defaultZoom={13}
          // center={{
          //     lat: latitude,
          //     lng: longitude
          // }}
          defaultCenter={{
            lat: latitude,
            lng: longitude
        }}>
            {
                ads.map(ad => {
                  return ( <Marker key={ad.id}
                      position={{ lat: ad.latitude, lng: ad.longitude }}
                      onClick={(marker)=> this.onMarkerClicked(marker, ad)}
                      // Note, for hover effect use MapMarkerIcons.Hovered
                      icon={(selected && selected.id === ad.id) ? MapMarkerIcons.Selected : MapMarkerIcons.Regular}
                  />);
                })
            }

        </GoogleMap>
    );
  }

}

export default Map;
