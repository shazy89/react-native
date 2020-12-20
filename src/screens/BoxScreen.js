import React, {useState} from 'react';
import { Text, StyleSheet, View } from "react-native";


const BoxScreen = () => {


   return (
       <View style={styles.parentStyle}> 
            <View style={styles.view4Style} /> 
            <View style={styles.view5Style} /> 
            <View style={styles.view6Style} /> 

       </View>
   );
};

      

const styles = StyleSheet.create({
  parentStyle: {

      borderWidth: 3,
      borderColor: 'black',
  //  alignItems: 'flex-end' 'center'  
      flexDirection: 'row', // remember always we have to place on parent element to set up the view
 //   flex direction will change the view horizontaly and verticaly
      height: 100,
      alignItems: 'flex-start', // remember always we have to place on parent element to set up the view
      justifyContent: 'space-between' // remember always we have to place on parent element to set up the view
  },

  text1Style: {
      borderWidth: 3,
      borderColor: 'red',
      left: 10
    //alignSelf: 'center'
    //  flex: 4,
    },
  text2Style: {
      borderWidth: 3,
      borderColor: 'red',
     // left: 10,
     // top: 0,
     // left: 0,
     // right: 0,
     // position: 'absolute' //will ignore to its siblings
       // this is the shortcut
     ...StyleSheet.absoluteFillObject //same as the values commented aut left right top  bottom and position 
    //alignSelf: 'flex-end'
    //  flex: 4,
    },
  text3Style: {

      borderWidth: 3,
      borderColor: 'red',
      alignSelf: 'flex-start'
    //  flex: 2,
    },
    view4Style: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',  
    borderWidth: 3,
    borderColor: 'red',
 
    },
    view5Style: {
    borderWidth: 3,
    height: 50,
    width: 50,
    borderColor: 'red',
    backgroundColor: 'green', 
    alignSelf: 'flex-end'
    },
    view6Style: {
    borderWidth: 3,
    height: 50,
    width: 50,
    borderColor: 'red',
    backgroundColor: 'black', 
    }
  
  });
      

export default BoxScreen