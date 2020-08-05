import React from 'react';
import { View, Text } from 'react-native';
import JustifyContentCenter from './rn0403_components/JustifyContentCenter';
import JustifyContentFlexEnd from './rn0403_components/JustifyContentFlexEnd';
import JustifyContentFlexStart from './rn0403_components/JustifyContentFlexStart';
import JustifyContentSpaceAround from './rn0403_components/JustifyContentSpaceAround';
import JustifyContentSpaceBetween from './rn0403_components/JustifyContentSpaceBetween';

export const RN0403_flexjustifycontent = () => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{flex:1}}>
          <Text>justifyContent 'center'</Text>
          <JustifyContentCenter /> 
        </View>
        <View style={{flex:1 }}>
          <Text>justifyContent 'fex-start'</Text>
          <JustifyContentFlexStart /> 
        </View>
        <View style={{flex:1 }}>
          <Text>justifyContent 'fex-end'</Text>
          <JustifyContentFlexEnd /> 
        </View>
        <View style={{flex:1 }}>
          <Text>justifyContent 'space-around'</Text>
          <JustifyContentSpaceAround /> 
        </View>
        <View style={{flex: 1}}>
          <Text>justifyContent 'space-between'</Text>
          <JustifyContentSpaceBetween /> 
        </View>
      </View>
    );
};
