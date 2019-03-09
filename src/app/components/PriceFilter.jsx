import React, {Component} from 'react';
import PropTypes from "prop-types";

class PriceFilter extends Component {


    static propTypes = {
        min: PropTypes.number,
        max: PropTypes.number,
        onChange: PropTypes.any
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            from : props.min | 0,
            to : props.max | 0,
            message: ''
        };
    }

    validate(e) {
        const target = e.target;
        const value = parseInt(target.value);
        let message = '';
        if (!Number.isSafeInteger(value)){
            message = "Un sanitized input was entered";
        }

        let newState = {};
        if (target.name === "from") {
            newState = { from: value};
        } else {// == "to"
            newState = { to: value};
        }
        this.setState(Object.assign({}, newState, {message}));
    }

    handleClick() {
        const {from:min, to:max} = this.state;
        console.log('handleclick', min, max)
        if (min < max) {

            this.props.onChange({ min, max });
        } else {
            let message = "cannot filter range " + min + " " + max;
            this.setState({message});
            console.info(message);
        }
    }

    render() {
        const {from, to, message} = this.state || {};
        const { min, max} = this.props;

        return (<div className="price-filter">
            <div className="price-filter-row">
                <label htmlFor="from">From</label>
                <input type="number" id="from" step="100" name="from" min={min} max={max} value={from} onChange={(e)=> this.validate(e)} />
                <label htmlFor="to">To</label>
                <input type="number" id="to" step="100" name="to" min={min} max={max} value={to} onChange={(e)=> this.validate(e)}/>
                <button className="btn btn-default" onClick={()=>this.handleClick()}>Filter</button>
            </div>
            <div className="message">{message}</div>
        </div>);
    }
}

export default PriceFilter;

