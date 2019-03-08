import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleStreetViewImage from './GoogleStreetViewImage';
import { SaveFavoriteButton, RemoveFavoriteButton } from './ActionButtons';


import './InfoPanel.style.css'


const RENT_AD_EXAMPLE = {
  "id": 321,
  "status": "active",
  "rentPrice": 7700,
  "latitude": 37.774345,
  "longitude": -122.42203,
  "rooms": 4,
  "squareMetersSize": 95,
  "floor": 7,
  "numberOfFloors": 9,
  "hasParking": true,
  "owner": "Wayne Russell",
  "phone": "1-(862)153-3335",
  "address": "78 Page St, San Francisco, CA 94102, USA",
  "message": "Amazing apartment, call now! Amazing apartment, call now! Amazing apartment, call now!",
  "createdAt": "2016-09-22T20:00:14Z",
};



class InfoPanel extends Component {

  static propTypes = {
    isActive: PropTypes.bool,
    rentAd: PropTypes.object,
    onToggleFavorite: PropTypes.any
  };

  static defaultProps = {
    isActive: true,
    rentAd: RENT_AD_EXAMPLE,
  };

  // state = {
  //   isFavorite: false,
  // };

  /**
   * When no rent ad is selected we hide the info bar
   */
  get isActive() {
    return !!this.rentAd;
  }

  get rentAd () {
    return this.props.rentAd;
  }

  onSaveFavoriteClicked() {
    console.log('Save favorite');
    // this.setState({isFavorite: true})
    this.props.onToggleFavorite({favorite: true});
  };

  onRemoveFavoriteClicked() {
    console.log('Remove favorite');
    // this.setState({isFavorite: false})
    this.props.onToggleFavorite({favorite: false});
  };

  render() {
    const { rentAd } = this.props;

    if (!this.isActive) {

      return (
        <div className="info-panel info-panel-empty">
            <h2>Choose an ad...</h2>
        </div>
      );
    }

    return (
      <div className="info-panel">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h5 className="panel-title address-title text-ellipsis">{rentAd.address}</h5>
          </div>
          <div className="panel-body">

            <ul className="list-unstyled address-info">
              <li>Price: <b>${rentAd.rentPrice}</b></li>
              <li>Floor: <b>{rentAd.floor}</b></li>
              <li>Rooms: <b>{rentAd.rooms}</b></li>
              <li className="owner-name">Owner: <b>{rentAd.owner}</b></li>
            </ul>

            <div className="actions">
              {this.renderActionButton()}
            </div>

          </div>
        </div>
        <GoogleStreetViewImage
          latitude={rentAd.latitude}
          longitude={rentAd.longitude}
        />
      </div>
    );
  }

  renderActionButton() {
    const { rentAd } = this.props;

    if (rentAd.favorite) {
      return (
        <RemoveFavoriteButton onClick={()=> this.onRemoveFavoriteClicked()} />
      );
    } else {
      return (
        <SaveFavoriteButton onClick={()=> this.onSaveFavoriteClicked()} />
      );
    }
  }

}



export default InfoPanel
