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
        const selected = Object.assign({}, this.state.selected, ad);
        const _ads = this.state.ads;
        let i = this.state.ads.findIndex(ad=> ad.id === selected.id);
        const ads = _ads.slice(0, i).concat([selected , ..._ads.slice(i+1)]);
        this.setState({ads, selected});
    }

    handleFilter(f) {
        const filter = Object.assign({},this.state.filter, f);
        this.setState({filter});
    }

    filterAds() {
        const filter = this.state.filter;

        return this.state.ads
            .filter(ad => ad.rentPrice >= filter.min &&
                    (filter.value? ad.rentPrice <= filter.value : true) &&
                    ((filter.isToggleFavorite) ? ad.favorite : true));
    }

    render() {
        const {selected, filter} = this.state;
        const ads = this.filterAds();

        return (
            <div className='grid-view-container'>
                <Summary total={this.state.ads.length} ads={ads} filter={filter} onToggleFavorite={(f) => this.handleFilter(f)} />
                <Filter filter={filter} onChange={(f) => this.handleFilter(f)} />
                <InfoPanel rentAd={selected} onToggleFavorite={(ad) => this.handleClick(ad)} />
                <Map ads={ads} selected={selected} onClick={(ad) => this.handleClick(ad)} />
                <RentAdsList ads={ads} selected={selected} onClick={(ad) => this.handleClick(ad)} />
            </div>);
    }
}

export default Rent;