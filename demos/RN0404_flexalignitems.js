import React from 'react';
import { View, Text } from 'react-native';
import AlignItemsCenter from './rn0404_components/AlignItemsCenter';
import AlignItemsFlexEnd from './rn0404_components/AlignItemsFlexEnd';
import AlignItemsFlexStart from './rn0404_components/AlignItemsFlexStart';
import AlignItemsStretch from './rn0404_components/AlignItemsStretch';
import AlignItemsBaseline from './rn0404_components/AlignItemsBaseline';

export const RN0404_flexalignitems = () => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{flex:1}}>
          <Text>alignItems 'center'</Text>
          <AlignItemsCenter /> 
        </View>
        <View style={{flex:1 }}>
          <Text>alignItems 'flex-start'</Text>
          <AlignItemsFlexStart /> 
        </View>
        <View style={{flex:1 }}>
          <Text>alignItems 'flex-end'</Text>
          <AlignItemsFlexEnd /> 
        </View>
        <View style={{flex:1 }}>
          <Text>alignItems 'stretch'</Text>
          <AlignItemsStretch /> 
        </View>
        <View style={{flex: 1}}>
          <Text>alignItems 'baseline'</Text>
          <AlignItemsBaseline /> 
        </View>
      </View>
    );
};
