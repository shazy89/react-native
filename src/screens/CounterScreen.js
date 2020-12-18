import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, TextInput } from "react-native";


const CounterScreen = () => {
const [number, setNumber] = useState(0)

   return (
       <View style={styles.counter}> 
            <Text style={styles.text}> {number} </Text>
           <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button  title='+'
            style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}
                  // this is the way we navigate (like a router)
                 onPress={() => setNumber(number + 1)}   />   
            <Button  title='-' 
            style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}
                  // this is the way we navigate (like a router)
                 onPress={() => setNumber(number - 1)}   />
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