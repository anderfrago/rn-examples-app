import React from 'react';
import { View, Text } from 'react-native';
import PositionAbsolute from './rn0408_components/PositionAbsolute';
import PositionRelative from './rn0408_components/PositionRelative';

export const RN0408_FlexPosition = () => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        {/* <View >
          <Text>'position-relative'</Text>
          <PositionRelative /> 
        </View>   */}
         <View >
           <Text >'position-absolute'</Text>
          <PositionAbsolute />
        </View>         
      </View>
    );
};