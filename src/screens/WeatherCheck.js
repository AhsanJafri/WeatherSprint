import {Button} from 'native-base';
import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {Card} from '../components';
import axios from 'axios';
var {height, width} = Dimensions.get('window');
const HEADER = height / 8;
const CONTENT = height - HEADER - 10;
const WeatherCheck = props => {
  const [datum, setDatum] = useState([]);
  const [loading, setloading] = useState(false);
  const [query, setQuery] = useState('');

  const handleValues = async () => {
    setloading(true);
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=b6a61c26428343bb8a953458211803&q=${query}&aqi=no`,
      )
      .then(response => setDatum(response.data))
      .then(() => {
        console.log(datum);
        setloading(false);
      })
      .catch(e => {
        console.log(e);
        setloading(false);
      });

    console.log(datum);
  };
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={35} color={'red'} />
      </View>
    );
  }
  return (
    <>
      <StatusBar backgroundColor="tomato" />
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>
        <View
          style={{
            height: HEADER,
            width: '95%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              borderRadius: 20,
              width: '90%',
              backgroundColor: '#dff2e4',
            }}>
            <TextInput
              placeholder="Search for city"
              style={{
                paddingLeft: 15,
                width: '100%',
                fontSize: 16,
                fontFamily: 'monospace',
              }}
              onChangeText={val => setQuery(val)}
            />
          </View>
          <TouchableOpacity onPress={() => handleValues()}>
            <Image
              source={{
                uri:
                  'https://pics.freeicons.io/uploads/icons/png/9100343321560147104-512.png',
              }}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>
        {datum.length <= 0 ? (
          <View
            style={{
              width: '100%',
              height: CONTENT - 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 28,
                fontFamily: 'serif',
                fontWeight: 'bold',
                fontStyle: 'italic',
                textAlign: 'center',
              }}>
              SEARCH FOR ANY PLACES PLACES
            </Text>
          </View>
        ) : (
          <View style={{width: '100%', height: CONTENT - 20}}>
            <View
              style={{
                height: CONTENT / 2 - 30,
                width: '90%',
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '50%',
                  height: CONTENT / 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {datum.current.is_day ? (
                  <Image
                    source={require('../assests/images/sun.jpg')}
                    style={{height: 150, width: 150}}
                  />
                ) : (
                  <Image
                    source={require('../assests/images/moon.png')}
                    style={{height: 150, width: 150}}
                  />
                )}
              </View>

              <View
                style={{
                  width: '50%',
                  height: CONTENT / 2,
                  justifyContent: 'space-evenly',
                }}>
                <Card val={datum.location.name} />
                <Card val={datum.location.region} />
                <Card val={datum.location.country} />
              </View>
            </View>

            <View
              style={{
                height: CONTENT / 2,
                width: '90%',
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '50%',
                  height: CONTENT / 2,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <Card val={datum.current.temp_c} item={'Temp C'} type />
                <Card val={datum.current.temp_f} item={'Temp F'} type />
              </View>

              <View
                style={{
                  width: '50%',
                  height: CONTENT / 2,
                  justifyContent: 'space-evenly',
                }}>
                <Card val={datum.current.wind_mph} item={'Wind Mph'} type />
                <Card val={datum.current.wind_kph} item={'Wind Kph'} type />
              </View>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default WeatherCheck;

{
  /* <Text
style={{
  fontSize: 34,
  fontFamily: 'serif',
  fontWeight: 'bold',
  fontStyle: 'italic',
}}>
WEATHER SPRINT
</Text> */
}
