import React from 'react';
import { View, Text } from 'react-native';
import AlignContentFlexStart from './rn0406_components/AlignContentFlexStart';
import AlignContentFlexEnd from './rn0406_components/AlignContentFlexEnd';
import AlignContentFlexCenter from './rn0406_components/AlignContentFlexCenter';
import AlignContentFlexSpaceAround from './rn0406_components/AlignContentFlexSpaceAround';
import AlignContentFlexSpaceBetween from './rn0406_components/AlignContentFlexSpaceBetween';
import AlignContentFlexSpaceStretch from './rn0406_components/AlignContentFlexSpaceStretch';


export const RN0406_flexaligncontent = () => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        {/* <View >
          <Text>alignContent 'flex-start'</Text>
          <AlignContentFlexStart /> 
        </View> */}
          {/* <View >
          <Text>alignContent 'flex-end'</Text>
          <AlignContentFlexEnd /> 
        </View>   */}
         {/* <View >
          <Text>alignContent 'flex-center'</Text>
          <AlignContentFlexCenter /> 
        </View>  */}
        {/* <View >
          <Text>alignContent 'space-around'</Text>
          <AlignContentFlexSpaceAround /> 
        </View> */}
        {/* <View >
          <Text>alignContent 'space-between'</Text>
          <AlignContentFlexSpaceBetween /> 
        </View> */}
        {/* <View >
          <Text>alignContent 'stretch'</Text>
          <AlignContentFlexSpaceStretch /> 
        </View> */}
        </View>
    );
};