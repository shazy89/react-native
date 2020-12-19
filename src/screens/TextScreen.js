import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput, Button } from "react-native";


const TextScreen = () => {
const [name, setName] = useState('') 
const [password, setPassword] = useState('')

   return (
       <View> 
           <Text style={{fontSize: 30}}>Enter Name:</Text>
            <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            value={name}
            placeholder='name'
            style={styles.textStyle} 
            onChangeText={newValue => setName(newValue)}/>
           <Text>Your name is:{name}</Text> 
           <Text style={{fontSize: 30}}>Enter Password:</Text>
           <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            placeholder='password'
            style={styles.textStyle} 
            onChangeText={password => setPassword(password)}/>
             { password.length < 5 ? <Text style={{marginLeft: 10}}>Password must be longer than 5 characters</Text> : null}
       </View>
            
   );
};

const styles = StyleSheet.create({
   textStyle: {
     height: 40,
     margin: 15,
     borderColor: 'gray', 
     borderWidth: 1
   }
})

export default TextScreen