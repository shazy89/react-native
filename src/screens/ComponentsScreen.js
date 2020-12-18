import React from 'react';
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const greeting = "HEllo There whats going on?"
   return (
       <View> 
          <Text style={styles.textStyle}> This is the component screen</Text>
          <Text style={styles.textStyle}> {greeting}</Text>
       </View>
   )
};
      
    // Styling
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'red'
    }
})

export default ComponentsScreen