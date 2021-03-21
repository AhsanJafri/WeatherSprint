import {Button} from 'native-base';
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
var {height, width} = Dimensions.get('window');
const StartNow = props => {
  return (
    <>
      <StatusBar backgroundColor="tomato" />
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>
        <View
          style={{
            height: height / 1.2,
            width: '80%',
            marginTop: '15%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '2%',
              height: '50%',
            }}>
            <Text
              style={{
                fontSize: 34,
                fontFamily: 'serif',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}>
              WEATHER SPRINT
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: '15%',
            }}>
            <Image
              source={require('../assests/images/sun.jpg')}
              style={{height: 110, width: 110}}
            />
            <Image
              source={require('../assests/images/moon.png')}
              style={{height: 100, width: 100}}
            />
          </View>
          <View
            style={{
              height: '10%',
              width: '100%',
              borderRadius: 100,
              backgroundColor: '#2D2926',
            }}>
            <TouchableOpacity
              style={{
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => props.navigation.navigate('WeatherCheck')}>
              <Text
                style={{
                  color: '#FFFF',
                  fontSize: 16,
                  fontFamily: 'serif',
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default StartNow;
