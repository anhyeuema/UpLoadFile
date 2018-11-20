/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => UpLoadFile);
import React, {Component} from 'react';
import App from './Components/App';

export default class UpLoadFile extends Component {
  render() {
    return (
        <App />
    );
  }
}