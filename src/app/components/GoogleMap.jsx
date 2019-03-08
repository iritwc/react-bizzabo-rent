import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  Marker,
  GoogleMap as ReactGoogleMap
} from 'react-google-maps'

import MapMarkerIcons from './MapMarkerIcons.js'

import config from '../../config';
const googleApiKey = config.google.apiKey;
const googleMapURL= `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}`;

/**
 * These 2 High Order Components, loads Google Maps JavaScript API v3 & initializes the map with a DOM component
 *
 * @see: https://tomchentw.github.io/react-google-maps/#usage--configuration
 */
const GoogleMapLoader = withScriptjs(withGoogleMap((props) =>
  props.children
));

/**
 * This component is a wrapper class for google-map-react -
 * A 3rd party React wrapper for Google Maps SDK.
 *
 * @see Docs:
 *  - https://tomchentw.github.io/react-google-maps/
 */
const GoogleMap = (props)=> ((
  <GoogleMapLoader
    googleMapURL={googleMapURL}
    loadingElement={<div className='map-loading' />}
    containerElement={<div className='map' />}
    mapElement={<div className='google-map' />}
  >
    <ReactGoogleMap{...props}>
      {props.children}
    </ReactGoogleMap>
  </GoogleMapLoader>
));

export {
  GoogleMap,
  Marker,
  MapMarkerIcons,
};