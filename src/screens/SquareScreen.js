import React, {useReducer} from 'react';
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;
     // how Im going to change that object
const reducer = (state, action) => {
        //state === {red: number, blue: number, green: number}
        // action === colortochange: red || green || blue, amount 15 || 15 
     // note: we cannot return null the best way to handle this is tho return the state<< x ? null : y is wrong << return x ? state : y >>
        switch (action.type) {
            case 'change_red':
                return  state.red + action.payload > 255 || state.red + action.payload < 0 ? 
                state : {...state, red: state.red + action.payload}
               
            case 'change_green':
                return    state.green + action.payload > 255 || state.green + action.payload < 0 ? 
                state : {...state, green: state.green + action.payload}
            case 'change_blue':
                return    state.blue + action.payload > 255 || state.blue + action.payload < 0 ? 
                state : {...state, blue: state.blue + action.payload}
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
          <ColorCounter color={'Red'}   onIncrese={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT }) } 
                                        onDecrese={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT }) }/> 
          <ColorCounter color={'Blue'}  onIncrese={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT }) } 
                                        onDecrese={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT })}/>
          <ColorCounter color={'Green'} onIncrese={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT }) } 
                                        onDecrese={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT })}/>
          <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} /> 
       </View>
   );
};
         

const styles = StyleSheet.create({

})

export default CounterScreen

      
