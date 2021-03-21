import React, {Component} from 'react';
import {Text, View, YellowBox} from 'react-native';
import StackRoute from './src/navigation/StackRoute';
console.disableYellowBox = true;

export class App extends Component {
  render() {
    return <StackRoute />;
  }
}

export default App;
