import React, {useReducer} from 'react';
import { Text, StyleSheet, View, Button, TextInput } from "react-native";

const reducer = (state, action) => {
    switch(action.type){
        case'change_increase':
            return  {...state, count: state.count + action.payload}
        case'change_decrease':
            return state.count - action.payload === -1 ? state : {...state, count: state.count - action.payload}
        default: 
          return state
    }  
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0})
     const { count } = state;
   // const [count, setCount] = useState(0);

  //  const intervalId = useRef();


   // useEffect(() => {
   //   intervalId.current = setInterval(() => {
   //     setCount(prev => prev + 1);
   //   }, 1000);
   //   return () => clearInterval(intervalId.current);
   // }, []);


     return (
        <View style={styles.counter}> 
             <Text style={styles.text}> {count} </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

             <Button  title="Increse"
                   // reset (like a router)
                   onPress={() => dispatch({type: 'change_increase', payload: 1 })} />   
             <Button  title="Decrese"
                   
                   // pause interval (like a router)
                  onPress={() => dispatch({type: 'change_decrease', payload: 1 })} />   
            </View>          
        </View>
    );
 };
       
                      
                      
                    

 const styles = StyleSheet.create({
     text: {
         fontSize: 40,
     },
     counter: {
         justifyContent: 'center',
         alignItems: "center",
         flex: 1
     }
 
 })
 
 export default CounterScreen



      

    
       