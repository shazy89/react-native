import React, {useState} from 'react';
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const CounterScreen = () => {



          

   return (
       <View> 
          <ColorCounter color={'Red'}   onIncrese={() => {} } 
                                        onDecrese={() => {}}/>
          <ColorCounter color={'Blue'}  onIncrese={() => {} } 
                                        onDecrese={() => {}}/>
          <ColorCounter color={'Green'} onIncrese={() => {} } 
                                        onDecrese={() => {}}/>
          <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} /> 
       </View>
   );
};
         

const styles = StyleSheet.create({

})

export default CounterScreen

      
