import React from 'react';
import { Text, StyleSheet, View, Button } from "react-native";


const ColourCounter = ({color, onIncrese, onDecrese }) => {

    return (
     <View> 
         <Text> {color}</Text>
            <Button  title={`Increse ${color}`}
                      onPress={() =>  onIncrese()  } />  
             <Button    title={`Decrese ${color}`}
                        onPress={() => onDecrese() } />  
        </View>
       );
    };
                     
               
                      
                        
               
                   
                 
       
          
 

         
      

      

const styles = StyleSheet.create({
    counter: {
        justifyContent: 'center',
        alignItems: "center",
        flex: 1
    }
})

export default ColourCounter;