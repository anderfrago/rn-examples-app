import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './rn0700_navigationpages/HomeScreen';
import { DetailsScreen } from './rn0700_navigationpages/DetailsScreen';

const Stack = createStackNavigator();

export function RN0700_navigation() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Details" component={ DetailsScreen } />
      </Stack.Navigator>

    </NavigationContainer>
  );
}