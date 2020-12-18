import React from 'react';
import { Text, StyleSheet, View, Image, TextInput } from "react-native";


const ImageScreenjs = ({img}) => {

   return (
       <View style={styles.container}> 
      <Image
        style={styles.tinyLogo}
        // source={require('../../assets/icon.png')} from assets
        source={{
          uri: img,
        }}
      />
      <Text>HEY</Text>
       </View>
   );
};
      

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: 'center',
        
      },
      tinyLogo: {
        width: 150,
        height: 150,
      },
      logo: {
        width: 100,
        height: 100,
      },
})

export default ImageScreenjs