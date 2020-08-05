import React from 'react';
import { Text, View } from 'react-native';

function Greeting(props) {
  return (
    <View >
      <Text>Hola {props.name}!</Text>
    </View>
  );
}

export default Greeting;