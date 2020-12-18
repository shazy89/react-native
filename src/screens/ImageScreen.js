import React, {useState} from 'react';
import { Text, StyleSheet, View, Image, TextInput, ImageBackground } from "react-native";
import ImageDetail from '../components/ImageDetail'

const ImageScreenjs = () => {

const images = ["https://res.cloudinary.com/dytheecsk/image/upload/v1607092844/portfolio/Screen_Shot_2020-12-02_at_2.16.17_PM_i3zicb.png",
                "https://res.cloudinary.com/dytheecsk/image/upload/v1605120248/portfolio/ot3_vjnp1a.png",
                 "https://res.cloudinary.com/dytheecsk/image/upload/v1605120182/portfolio/fm3_jo6kqj.png"].map(img => <ImageDetail key={img} img={img} />)     
   return (
       <View> 
            {images}
       </View>
   );
};

      

const styles = StyleSheet.create({

})

export default ImageScreenjs