import React from 'react'
import { Text, StyleSheet, View, FlatList } from "react-native";

const styles = StyleSheet.create({
   textStyle: {
       marginVertical: 50,
       backgroundColor: 'blue'
   },
   textStyle1: {
       marginVertical: 50,
       backgroundColor: 'red'
   }
});


const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 23},
        {name: 'Friend #2', age: 13},
        {name: 'Friend #3', age: 25},
        {name: 'Friend #4', age: 32},
        {name: 'Friend #5', age: 73},
        {name: 'Friend #6', age: 96},
        {name: 'Friend #7', age: 100},
    ]              // this is how we can render multiple items
    return (                  
    <FlatList data={friends} 
           // you can scroll horizontally
            //  horizontal  // hide scrollbarr
            //  showsHorizontalScrollIndicator={false}
            //  key is ipmortant to be added
              keyExtractor={friends => friends.name}
              renderItem={({item}) => {
                  return (
                     <View>
                       <Text  style={styles.textStyle}>{item.name}</Text>
                       <Text  style={styles.textStyle1}>{item.age} years old</Text>
                     </View>
                    )
              }}        
    />
    )
};


                  
export default ListScreen;