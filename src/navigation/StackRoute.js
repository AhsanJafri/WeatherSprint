import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash';
import Weather from '../screens/Weather';
import WeatherCheck from '../screens/WeatherCheck';
import {navOptionHandler} from '../constants/functions';

const Stack = createStackNavigator();

function StackRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="WeatherCheck"
          component={WeatherCheck}
          options={navOptionHandler}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackRoute;
