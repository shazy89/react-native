import React, {useState} from 'react';
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const CounterScreen = () => {
const [red, setRed] = useState(0)
const [blue, setBlue] = useState(0)
const [green, setGreen] = useState(0)

const setColor = (color, change) => {
    switch (color) {
        case 'red':
            red + change > 255 || red + change < 0 ? null :  setRed(red + change)
            return;
        case 'green':
            blue + change > 255 || blue + change < 0 ? null :  setBlue(blue + change)
            return;
        case 'blue':
            green + change > 255 || green + change < 0 ? null :  setGreen(green + change)
            return;
              default:
                  return; 
            }
        };
          

   return (
       <View> 
          <ColorCounter color={'Red'}   onIncrese={() => setColor('red', COLOR_INCREMENT) } 
                                        onDecrese={() => setColor('red', -1 * COLOR_INCREMENT)}/>
          <ColorCounter color={'Blue'}  onIncrese={() => setColor('blue', COLOR_INCREMENT) } 
                                        onDecrese={() => setColor('blue', -1 * COLOR_INCREMENT)}/>
          <ColorCounter color={'Green'} onIncrese={() => setColor('green', COLOR_INCREMENT) } 
                                        onDecrese={() => setColor('green', -1 * COLOR_INCREMENT)}/>
          <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} /> 
       </View>
   );
};
         


      

const styles = StyleSheet.create({

})

export default CounterScreen