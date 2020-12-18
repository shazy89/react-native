import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props.navigation)
  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
       <Button  title='Go to Components Demo'
                  // this is the way we navigate (like a router)
                 onPress={() => props.navigation.navigate('Components')}      
       />
       <TouchableOpacity
       //       route names in app.js
                onPress={() => props.navigation.navigate('List') }
       >
         <Text>Go to List Demo</Text>

       </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


