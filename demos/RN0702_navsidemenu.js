import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from './rn0702_navsidemenupages/HomeScreen';
import { NotificationsScreen } from './rn0702_navsidemenupages/NotificationsScreen';

const Drawer = createDrawerNavigator();

export function RN0702_navsidemenu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}