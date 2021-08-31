/**
 * React Native examples
 * Author: Frago, A. for Cuatrovientos ITC
 * 08/2020
 */

 import * as React from 'react';

 import { StyleSheet, View, Text } from 'react-native';
 
 import { Sidebar } from './components/Sidebar';
 
 const App = () => {
   return (
       <Sidebar/>
   );
 };
 
 export default App;
 
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: 0,
   },
   item: {
     backgroundColor: '#f9c2ff',
     padding: 20,
     marginVertical: 8,
     marginHorizontal: 16,
   },
   title: {
     fontSize: 32,
   },
 });
 