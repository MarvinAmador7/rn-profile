import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import Profile from './scenes/Profile';

const RouterWithRedux = connect()(Router);

export default class RouterApp extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <RouterWithRedux>
        <Scene key="root" hideNavBar>
          <Scene key="Profile" component={Profile} title="Profile" />
        </Scene>
      </RouterWithRedux>
    );
  }
}
