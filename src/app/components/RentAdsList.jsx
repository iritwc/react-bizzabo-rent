import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './RentAdsList.style.css'

const mockListData = [
  { address: '78 Page St, San Francisco, CA 94102, USA', rentPrice: 7800 },
  { address: '1122 Broderick St, San Francisco, CA 94115', rentPrice: 8400 },
  { address: '1232 Washington St, San Francisco, CA 94108', rentPrice: 9100 },
  { address: '275-299 Brannan St, San Francisco, CA 94107, USA', rentPrice: 9300 },
];

/**
 * A list of rent ads grouped by number of rooms, in ascending order.
 * Each group is sorted by rent price also in ascending order.
 */
class RentAdsList extends Component {

  static propTypes = {};

  static defaultProps = {};

  renderGroup(key, group) {
      return (
          <div key={key} className="list-group">
              <a href="#" className="list-group-item group-title">
                  <span className="badge ads-count">{group.length} Ads</span>
                  <h4 className="list-group-item-heading">{key} Rooms</h4>
              </a>
              {group.map( (rentAd)=> (
                  <a key={rentAd.id}
                     className={'list-group-item' + (rentAd == this.props.selected ? ' active':'')}
                     onClick={() => this.props.onClick(rentAd) }>

                      <span className="badge price">${rentAd.rentPrice}</span>
                      {rentAd.address}
                  </a>
              ))}
          </div>
      );
  }

  render() {
    const {ads} = this.props;
    const groups = groupAds(ads);

    return (
      <div className="rent-ads-list">

          {Array.from(groups.keys()).map((key) => {
              const group = groups.get(key);
              return this.renderGroup(key, group);
          })}
      </div>
    );
  }

}

function groupAds(ads) {
    return ads.reduce(
        (prev, current) => prev.set(current.rooms, [...prev.get(current.rooms)||[], current]),
        new Map()
    );
}

export default RentAdsList
