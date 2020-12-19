import React, {useReducer} from 'react';
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;
     // how Im going to change that object
const reducer = (state, action) => {
        //state === {red: number, blue: number, green: number}
        // action === colortochange: red || green || blue, amount 15 || 15 
     
        switch (action.colorToChange) {
            case 'red':
               return {...state, red: state.red + action.amount} 
            case 'green':
                return {...state, green: state.green + action.amount} 
            case 'blue':
                return {...state, blue: state.blue + action.amount} 
            default:
                return state;
        }
}

const CounterScreen = () => {
       // dispach is invoking the reducer 
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0 });
    const {red, green, blue} = state; 
           

   return (
       <View> 
          <ColorCounter color={'Red'}   onIncrese={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT }) } 
                                        onDecrese={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT }) }/> 
          <ColorCounter color={'Blue'}  onIncrese={() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT }) } 
                                        onDecrese={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}/>
          <ColorCounter color={'Green'} onIncrese={() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT }) } 
                                        onDecrese={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}/>
          <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} /> 
       </View>
   );
};
         

const styles = StyleSheet.create({

})

export default CounterScreen

      
