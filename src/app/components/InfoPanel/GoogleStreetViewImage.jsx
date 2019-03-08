import React, { Component } from 'react';
import PropTypes from 'prop-types';

import config from '../../../config';
const googleApiKey = config.google.apiKey;

export const StreetViewImageSize = {
  width: 300,
  height: 555,
};

/**
 * The Google Street View Image API lets you embed a static image into your web page.
 * The viewport is defined with URL parameters sent through a standard HTTP request, and is returned as a static image.
 *
 * See:
 *  https://developers.google.com/maps/documentation/streetview/intro
 */
class GoogleStreetViewImage extends Component {

  static propTypes = {
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  static defaultProps = {
    width: StreetViewImageSize.width,
    height: StreetViewImageSize.height,
  };

  get googleStreetViewImageUrl() {
    const {latitude, longitude, width, height } = this.props;
    let rootURL = `https://maps.googleapis.com/maps/api/streetview?size=${width}x${height}&key=${googleApiKey}`;
    return `${rootURL}&location=${latitude},${longitude}`;
  }

  render() {
    return (
      <img
        className="street-view-image img-responsive"
        src={this.googleStreetViewImageUrl}
      />
    );
  }

}


export default GoogleStreetViewImage