import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from './actions'

import {Rent, Header} from './components';

import './App.style.css';

class App extends Component {

  render() {
    return (
        <div className="grid-container">
          <Header/>
          <Rent />
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)