import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { RN0201_holaclase } from '../demos/RN0201_holaclase';
import { RN0202_holahola } from '../demos/RN0202_holahola';
import { RN0203_cntreactnative } from '../demos/RN0203_cntreactnative';
import { RN0301_estilos } from '../demos/RN0301_estilos';
import { RN0302_altura_anchura } from '../demos/RN0302_altura_anchura';
import { RN0303_flex } from '../demos/RN0303_flex';
import { RN0401_flexlayouts } from '../demos/RN0401_flexlayouts';
import { RN0402_flexdirections } from '../demos/RN0402_flexdirections';
import { RN0403_flexjustifycontent } from '../demos/RN0403_flexjustifycontent';
import { RN0404_flexalignitems } from '../demos/RN0404_flexalignitems';
import { RN0405_flexalignself } from '../demos/RN0405_flexalignself';
import { RN0406_flexaligncontent } from '../demos/RN0406_flexaligncontent';
import { RN0407_flexwrap } from '../demos/RN0407_flexwrap';
import { RN0408_FlexPosition } from '../demos/RN0408_FlexPosition';
import { RN0541_view } from '../demos/RN0541_view';
import { RN0542_text } from '../demos/RN0542_text';
import { RN0543_image } from '../demos/RN0543_image';
import { RN0544_scrollview } from '../demos/RN0544_scrollview';
import { RN0551_Button } from '../demos/RN0551_Button';
import { RN0552_picker } from '../demos/RN0552_picker';
import { RN0553_switch } from '../demos/RN0553_switch';
import { RN0561_flatlist } from '../demos/RN0561_flatlist';
import { RN0562_sectionlist } from '../demos/RN0562_sectionlist';
import { RN0581_BackHandler } from '../demos/RN0581_BackHandler';
import { RN0582_DrawerLayout } from '../demos/RN0582_DrawerLayout';
import { RN0583_Permissions } from '../demos/RN0583_Permissions';
import { RN0584_Toast } from '../demos/RN0584_Toast';
import { RN0591_ActivityIndicator } from '../demos/RN0591_ActivityIndicator';
import { RN0592_Alert } from '../demos/RN0592_Alert';
import { RN0593_Animated } from '../demos/RN0593_Animated';
import { RN0594_Dimensions } from '../demos/RN0594_Dimensions';
import { RN0595_KeyboardAvoidingView } from '../demos/RN0595_KeyboardAvoidingView';
import { RN0596_LinkingFunction } from '../demos/RN0596_LinkingFunction';
import { RN0597_Modal } from '../demos/RN0597_Modal';
import { RN0598_pixelratio } from '../demos/RN0598_pixelratio';
import { RN0700_navigation } from '../demos/RN0700_navigation';
import { RN0701_navparams } from '../demos/RN0701_navparams';
import { RN0702_navsidemenu } from '../demos/RN0702_navsidemenu';


const Drawer = createDrawerNavigator();

export function Sidebar() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="RN0201_holaclase"
                    component={RN0201_holaclase}
                    options={{ title: 'RN0201_holaclase' }}
                />
                <Drawer.Screen
                    name="RN0202_holahola"
                    component={RN0202_holahola}
                    options={{ title: 'RN0202_holahola' }}
                />
                <Drawer.Screen
                    name="RN0203_cntreactnative"
                    component={RN0203_cntreactnative}
                    options={{ title: 'RN0203_cntreactnative' }}
                />
                <Drawer.Screen
                    name="RN0301_estilos"
                    component={RN0301_estilos}
                    options={{ title: 'RN0301_estilos' }}
                />
                <Drawer.Screen
                    name="RN0302_altura_anchura"
                    component={RN0302_altura_anchura}
                    options={{ title: 'RN0302_altura_anchura' }}
                />
                <Drawer.Screen
                    name="RN0303_flex"
                    component={RN0303_flex}
                    options={{ title: 'RN0303_flex' }}
                />
                <Drawer.Screen
                    name="RN0401_flexlayouts"
                    component={RN0401_flexlayouts}
                    options={{ title: 'RN0401_flexlayouts' }}
                />
                <Drawer.Screen
                    name="RN0402_flexdirections"
                    component={RN0402_flexdirections}
                    options={{ title: 'RN0402_flexdirections' }}
                />
                <Drawer.Screen
                    name="RN0403_flexjustifycontent"
                    component={RN0403_flexjustifycontent}
                    options={{ title: 'RN0403_flexjustifycontent' }}
                />
                <Drawer.Screen
                    name="RN0404_flexalignitems"
                    component={RN0404_flexalignitems}
                    options={{ title: 'RN0404_flexalignitems' }}
                />
                <Drawer.Screen
                    name="RN0405_flexalignself"
                    component={RN0405_flexalignself}
                    options={{ title: 'RN0405_flexalignself' }}
                />
                <Drawer.Screen
                    name="RN0406_flexaligncontent"
                    component={RN0406_flexaligncontent}
                    options={{ title: 'RN0406_flexaligncontent' }}
                />
                <Drawer.Screen
                    name="RN0407_flexwrap"
                    component={RN0407_flexwrap}
                    options={{ title: 'RN0407_flexwrap' }}
                />
                <Drawer.Screen
                    name="RN0408_FlexPosition"
                    component={RN0408_FlexPosition}
                    options={{ title: 'RN0408_FlexPosition' }}
                />
                <Drawer.Screen
                    name="RN0541_view"
                    component={RN0541_view}
                    options={{ title: 'RN0541_view' }}
                />
                <Drawer.Screen
                    name="RN0542_text"
                    component={RN0542_text}
                    options={{ title: 'RN0542_text' }}
                />
                <Drawer.Screen
                    name="RN0543_image"
                    component={RN0543_image}
                    options={{ title: 'RN0543_image' }}
                />
                <Drawer.Screen
                    name="RN0544_scrollview"
                    component={RN0544_scrollview}
                    options={{ title: 'RN0544_scrollview' }}
                />
                <Drawer.Screen
                    name="RN0551_Button"
                    component={RN0551_Button}
                    options={{ title: 'RN0551_Button' }}
                />
                <Drawer.Screen
                    name="RN0552_picker"
                    component={RN0552_picker}
                    options={{ title: 'RN0552_picker' }}
                />
                <Drawer.Screen
                    name="RN0553_switch"
                    component={RN0553_switch}
                    options={{ title: 'RN0553_switch' }}
                />
                <Drawer.Screen
                    name="RN0561_flatlist"
                    component={RN0561_flatlist}
                    options={{ title: 'RN0561_flatlist' }}
                />
                <Drawer.Screen
                    name="RN0562_sectionlist"
                    component={RN0562_sectionlist}
                    options={{ title: 'RN0562_sectionlist' }}
                />
                <Drawer.Screen
                    name="RN0581_BackHandler"
                    component={RN0581_BackHandler}
                    options={{ title: 'RN0581_BackHandler' }}
                />
                <Drawer.Screen
                    name="RN0582_DrawerLayout"
                    component={RN0582_DrawerLayout}
                    options={{ title: 'RN0582_DrawerLayout' }}
                />
                <Drawer.Screen
                    name="RN0583_Permissions"
                    component={RN0583_Permissions}
                    options={{ title: 'RN0583_Permissions' }}
                />
                <Drawer.Screen
                    name="RN0584_Toast"
                    component={RN0584_Toast}
                    options={{ title: 'RN0584_Toast' }}
                />
                <Drawer.Screen
                    name="RN0591_ActivityIndicator"
                    component={RN0591_ActivityIndicator}
                    options={{ title: 'RN0591_ActivityIndicator' }}
                />
                <Drawer.Screen
                    name="RN0592_Alert"
                    component={RN0592_Alert}
                    options={{ title: 'RN0592_Alert' }}
                />
                <Drawer.Screen
                    name="RN0593_Animated"
                    component={RN0593_Animated}
                    options={{ title: 'RN0593_Animated' }}
                />
                <Drawer.Screen
                    name="RN0594_Dimensions"
                    component={RN0594_Dimensions}
                    options={{ title: 'RN0594_Dimensions' }}
                />
                <Drawer.Screen
                    name="RN0595_KeyboardAvoidingView"
                    component={RN0595_KeyboardAvoidingView}
                    options={{ title: 'RN0595_KeyboardAvoidingView' }}
                />
                <Drawer.Screen
                    name="RN0597_Modal"
                    component={RN0597_Modal}
                    options={{ title: 'RN0597_Modal' }}
                />
                {/* <Drawer.Screen
                    name="RN0598_pixelratio"
                    component={RN0598_pixelratio}
                    options={{ title: 'RN0598_pixelratio' }}
                /> */}
                {/*
                // No se puede dibujar una navegación dentro de otra.
                <Drawer.Screen
                    name="RN0700_navigation"
                    component={RN0700_navigation}
                    options={{ title: 'RN0700_navigation' }}
                /> 
                <Drawer.Screen
                    name="RN0701_navparams"
                    component={RN0701_navparams}
                    options={{ title: 'RN0701_navparams' }}
                />
                <Drawer.Screen
                    name="RN0702_navsidemenu"
                    component={RN0702_navsidemenu}
                    options={{ title: 'RN0702_navsidemenu' }}
                />
                */}

            </Drawer.Navigator>
        </NavigationContainer>


    )
}