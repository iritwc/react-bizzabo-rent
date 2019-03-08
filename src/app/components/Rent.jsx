import React, { Component } from 'react';
import RentAdsAPI from '../services/rent-ads-api';
import {
    Header,
    InfoPanel,
    Map,
    Summary,
    RentAdsList,
    Filter
} from '../components';

import RentAd from "../services/rent-ad";

class Rent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ads: [],
            selected: null,
            filter: { min: 500, max: 10000, value: '', isToggleFavorite: false }
        };
    }

    componentDidMount() {
        RentAdsAPI.fetchAds().then(ads => {
            this.setState({ads}); //: groupAds(ads)
        });
    }

    handleClick(ad) {
        this.setState({selected: ad});
    }

    handleFilter(f) {
        const filter = Object.assign({},this.state.filter, f);
        this.setState({filter});
    }

    filterAds() {
        const filter = this.state.filter;
        if (filter.value) {
            return this.state.ads.filter(ad => ad.rentPrice >= filter.min && ad.rentPrice <= filter.value);
        }
        return this.state.ads;
    }

    render() {
        const {selected, filter} = this.state;
        const ads = this.filterAds();

        return (
            <div className='grid-view-container'>
                <Summary total={this.state.ads.length} ads={ads} onToggleFavoritesClicked={(f) => {this.handleFilter(f);}} />
                <Filter filter={filter} onChange={(f) => this.handleFilter(f)} />
                <InfoPanel rentAd={selected}/>
                <Map ads={ads} selected={selected} onClick={(ad) => this.handleClick(ad)} />
                <RentAdsList ads={ads} selected={selected} onClick={(ad) => this.handleClick(ad)} />
            </div>);
    }
}

export default Rent;