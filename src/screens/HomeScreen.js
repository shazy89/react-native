import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return (
    <View style={{flex:1, alignItems: "center", marginTop: 20}}>
      <Text style={styles.text} adjustsFontSizeToFit={true} numberOfLines={1}>Hi There</Text>
       <Button  title='Go to Components Demo'
                  // this is the way we navigate (like a router)
                 onPress={() => navigation.navigate('Components')}   />     
       <Button  title='Go to List Demo'
                  // this is the way we navigate (like a router)
                 onPress={() => navigation.navigate('List')}   />     
       <Button  title='Go to List Image-screen'
                  // this is the way we navigate (like a router)
                 onPress={() => navigation.navigate('Imagescrn')}   />     
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,
    backgroundColor: 'yellow',

    
  }
});

export default HomeScreen;
     

  



