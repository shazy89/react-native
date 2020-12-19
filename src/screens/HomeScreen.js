import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  const image = "https://res.cloudinary.com/dytheecsk/image/upload/v1607014476/Friends/kr6yi24i5h9winscun8t.jpg"
  return (
    <View style={{flex:1, alignItems: "center"}}>
     
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
       <Button  title='Go to List Counter'
                  // this is the way we navigate (like a router)
                 onPress={() => navigation.navigate('Counter')}   />   
       <Button  title='Go to Color Screen'
                  // this is the way we navigate (like a router)
                 onPress={() => navigation.navigate('Color')}   />   
       <Button  title='Go to Square Screen'
                  // this is the way we navigate (like a router)
                 onPress={() => navigation.navigate('Square')}   />   
     
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
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

    
});

export default HomeScreen;
     

  



