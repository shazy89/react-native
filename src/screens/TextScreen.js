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
            placeholder="Type here!"
            style={styles.textStyle} 
            onChangeText={newValue => setName(newValue)}/>

           <Text style={{textAlign: 'center'}}>Your name is:{name}</Text> 
            
           <Text style={{fontSize: 30}}>Enter Password:</Text>
           <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            placeholder='password'
            style={styles.textStyle} 
            onChangeText={password => setPassword(password)}/>
                <Text >{checkLength(password)}</Text>
       </View>
            
   );
};

const checkLength = (word) => {
 
if(word.length < 5) return 'Password must be longer than 5 characters'
if(word.length > 5 && word.length < 10) return 'low strength'
if(word.length > 9 && word.length < 12) return 'medium strength'
if(word.length > 11 ) return 'strong strength'
   }


const styles = StyleSheet.create({
   textStyle: {
     height: 40,
     margin: 15,
     borderColor: 'gray', 
     borderWidth: 1
   }
})

export default TextScreen