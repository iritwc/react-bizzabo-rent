import React, { Component } from 'react';

function Filter(props) {
    const {filter} = props;

    return (
        <div className='price-filter'>
            <label htmlFor="price">Price $ {filter.max}</label>
            <input type="range"
                   id="price"
                   name="price"
                   step={100}
                   min={props.min}
                   max={props.max}
                   defaultValue={props.max}
                   onChange={e=> props.onChange({max: e.target.value})} />

        </div>
    );
}

export default Filter;