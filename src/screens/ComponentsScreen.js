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
            <Text style={styles.text2}>Got it</Text>
       </View>
   );
};
      
    // Styling
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'red'
    },
    text2: {
       fontSize: 20,
       color: 'blue'
     }
})

export default ComponentsScreen