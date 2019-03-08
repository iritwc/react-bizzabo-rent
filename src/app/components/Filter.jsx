import React, { Component } from 'react';

function Filter(props) {
    const {filter} = props;

    return (
        <div className='price-filter'>
            <label htmlFor="price">Price $ {filter.value}</label>
            <input type="range"
                   id="price"
                   name="price"
                   step={100}
                   min={filter.min}
                   max={filter.max}
                   defaultValue={filter.max}
                   onChange={(e)=>props.onChange({value: e.target.value})} />

        </div>
    );
}

export default Filter;