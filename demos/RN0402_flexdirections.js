import React from 'react';
import { View, Text } from 'react-native';
import FlexDirectionRow from './rn0402_components/FlexDirectionRow';
import FlexDirectionColumn from './rn0402_components/FlexDirectionColumn';
import FlexDirectionRowReverse from './rn0402_components/FlexDirectionRowReverse';
import FlexDirectionColumnReverse from './rn0402_components/FlexDirectionColumnReverse';
export function RN0402_flexdirections() {
    return (

    <View style={{flex: 1}} >
        <View style={{flex: 1}} >
             <Text>Flex Direction Row</Text>
            <FlexDirectionRow ></FlexDirectionRow >
        </View>
        <View style={{flex: 1}} >
            <Text>Flex Direction Column</Text>
            <FlexDirectionColumn ></FlexDirectionColumn >
        </View>
        <View style={{flex: 1}} >
            <Text style={{textAlign: "right"}} >Flex Direction Row-Reverse</Text>
            <FlexDirectionRowReverse ></FlexDirectionRowReverse >
        </View>
        <View style={{flex: 1}} >
            <Text style={{textAlign: "center"}}>Flex Direction Column-Reverse</Text>
            <FlexDirectionColumnReverse ></FlexDirectionColumnReverse >
        </View>
    </View>
    );
}

