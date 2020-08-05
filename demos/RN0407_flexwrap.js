import React from 'react';
import { View, Text } from 'react-native';
import FlexNoWrap from './rn0407_components/FlexNoWrap';
import FlexWrap from './rn0407_components/FlexWrap';

export const RN0407_flexwrap = () => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
          <View >
          <Text>'flex-wrap'</Text>
          <FlexWrap /> 
        </View>  
        {/* <View >
           <Text >'flex-nowrap'</Text>
          <FlexNoWrap /> 
        </View>         */}
      </View>
    );
};