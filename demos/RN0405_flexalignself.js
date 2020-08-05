import React from 'react';
import { View, Text } from 'react-native';
import AlignSelfCenter from './rn0405_components/AlignSelfCenter';
import AlignSelfFlexEnd from './rn0405_components/AlignSelfFlexEnd';
import AlignSelfFlexStart from './rn0405_components/AlignSelfFlexStart';
import AlignSelfStretch from './rn0405_components/AlignSelfStretch';

export const RN0405_flexalignself = () => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{flex:1}}>
          <Text>alignSelf 'center'</Text>
          <AlignSelfCenter /> 
        </View>
        <View style={{flex:1 }}>
          <Text>alignSelf 'fex-start'</Text>
          <AlignSelfFlexStart /> 
        </View>
        <View style={{flex:1 }}>
          <Text>alignSelf 'fex-end'</Text>
          <AlignSelfFlexEnd /> 
        </View>
        <View style={{flex:1 }}>
          <Text>alignSelf 'stretch'</Text>
          <AlignSelfStretch /> 
        </View>
      </View>
    );
};
