import React, {useState} from 'react';
import { Text, StyleSheet, View, Image, TextInput } from "react-native";

const ComponentsScreen = () => {
const me = {
    name: 'Ed',
    lastName: 'Shaziman',
    email: 'erdo,shazy123@gmail.com'
}
const introduce = <Text style={styles.textStyle}>Hi. My name is {me.name} {me.lastname} and my email adress is: {me.email}</Text>
   return (
       <View> 
            {introduce}
       </View>
   );
};
      
    // Styling
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'red'
    },
    container: {
        paddingTop: 50,
      },
      tinyLogo: {
        width: 50,
        height: 50,
      },
      logo: {
        width: 66,
        height: 58,
      },
})

export default ComponentsScreen