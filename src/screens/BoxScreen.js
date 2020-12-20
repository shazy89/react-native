import React, {useState} from 'react';
import { Text, StyleSheet, View } from "react-native";


const BoxScreen = () => {


   return (
       <View style={styles.viewStyle}> 
            <Text style={styles.text1Style}> Child #1</Text>
            <Text style={styles.text2Style}> Child #2</Text>
            <Text style={styles.text3Style}> Child #3</Text>
            <Text style={styles.text3Style}> Child #1</Text>
            <Text style={styles.text3Style}> Child #2</Text>

       </View>
   );
};

      

const styles = StyleSheet.create({
  viewStyle: {

      borderWidth: 3,
      borderColor: 'black',
  //  alignItems: 'flex-end' 'center' 
      flexDirection: 'row', // remember always we have to place on parent element to set up the view
      // flex direction will change the view horizontaly and verticaly
      height: 200,
      alignItems: 'center', // remember always we have to place on parent element to set up the view
      justifyContent: 'space-between' // remember always we have to place on parent element to set up the view
  },

  text1Style: {
      borderWidth: 3,
      borderColor: 'red',
      flex: 1,
    },
  text2Style: {
      borderWidth: 3,
      borderColor: 'red',
      flex: 1,
    },
  text3Style: {
      borderWidth: 3,
      borderColor: 'red',
      flex: 1,
    },
  
  })
      

export default BoxScreen