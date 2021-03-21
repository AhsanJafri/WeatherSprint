import React from 'react';
import {View, Text} from 'react-native';

const Card = ({type, val, item}) => {
  if (type) {
    return (
      <View
        style={{
          width: '90%',
          elevation: 3,
          borderRadius: 30,
          height: 120,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: 'monospace',
              fontWeight: 'bold',
            }}>
            {val}
          </Text>

          <Text
            style={{
              fontSize: 24,
              fontFamily: 'monospace',
            }}>
            {item}
          </Text>
        </View>
      </View>
    );
  }
  return (
    <View
      style={{
        width: '100%',
        elevation: 3,
        borderRadius: 30,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          fontFamily: 'monospace',
          overflow: 'hidden',
        }}>
        {val}
      </Text>
    </View>
  );
};

export default Card;
