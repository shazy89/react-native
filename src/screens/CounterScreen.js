import React, {useState, useEffect, useRef, useCallback, Fragment} from 'react';
import { Text, StyleSheet, View, Button, TextInput } from "react-native";


const CounterScreen = () => {
    const [count, setCount] = useState(0);

    const intervalId = useRef();


    useEffect(() => {
      intervalId.current = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
      return () => clearInterval(intervalId.current);
    }, []);


     return (
        <View style={styles.counter}> 
             <Text style={styles.text}> {count} </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

             <Button  title="Reset"
                   // reset (like a router)
                  onPress={() => {
                      setCount(0)
                      clearInterval(intervalId.current)
                      }}   />   
             <Button  title="Pause"
                   
                   // pause interval (like a router)
                  onPress={() => {
                      clearInterval(intervalId.current)
                      }} />   
                      
                   
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