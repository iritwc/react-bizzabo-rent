import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Summary.style.css';

class Summary extends Component {

  static propTypes = {};

  static defaultProps = {};

  // state = {
  //   isToggleFavorite: false,
  // };

  onToggleFavoritesClicked = () => {
    console.log('Toggle favorites');
    // this.setState({isToggleFavorite: !this.state.isToggleFavorite});
    this.onToggleFavoritesClicked({ isToggleFavorite: !this.state.isToggleFavorite});
  };

  render() {
    const {total, ads} = this.props;

    const sum = ads.map(ad=>ad.rentPrice).reduce((prev, current) => {return prev+current; }, 0);
    const avg = (((ads.length>0) ? sum/ads.length : 0)).toFixed(2);

    return (
      <div className="panel panel-default summary">
        <div className="favorites-action text-center">
          <a role="button" aria-label="Toggle"
             className={`btn btn-default btn-lg toggle-favorites ${this.toggleFavoritesActiveClass}`}
             onClick={this.onToggleFavoritesClicked} >
            <span aria-hidden="true" className={`glyphicon ${this.toggleFavoritesIconClass}`}>
            </span> Toggle Favorites <span className="badge favorites-counter">3</span>
          </a>
        </div>
        <dl className="dl-horizontal pull-left">
          <dt>Total Ads:</dt>
          <dd className="total_ads_counter">{total}</dd>
          <dt>Displayed Ads:</dt>
          <dd className="displayed_ads_counter">{ads.length}</dd>
          <dt>Average price:</dt>
          <dd className="average_price">${avg}</dd>
        </dl>
      </div>
    );
  }

  get toggleFavoritesActiveClass() {
    return this.props.isToggleFavorite ? 'active' : '';
  }

  get toggleFavoritesIconClass() {
    return this.props.isToggleFavorite ? 'glyphicon-star' : 'glyphicon-star-empty';
  }

}


export default Summary