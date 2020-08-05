import * as React from 'react';

import { View, Text, Button } from 'react-native';

export function DetailsScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
            onPress={() => props.navigation.goBack()}
                title="Go Back"
          />
      </View>
    );
  }