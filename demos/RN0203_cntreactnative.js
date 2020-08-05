// Ejemplo de contador en React Native con Hooks
import React, { useState } from 'react';
import {
  View, Text, Button, StyleSheet
} from 'react-native';

export function RN0203_cntreactnative() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Has pulsado {count} veces</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="Púlsame"
      ></Button>
    </View>
  )
}

// Estilos con ReactNative
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
