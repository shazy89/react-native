import React from 'react'
import { Text, StyleSheet, View, FlatList } from "react-native";

const styles = StyleSheet.create({
   textStyle: {
       marginVertical: 50
   }
});


const ListScreen = () => {
    const friends = [
        {name: 'Friend #1'},
        {name: 'Friend #2'},
        {name: 'Friend #3'},
        {name: 'Friend #4'},
        {name: 'Friend #5'},
        {name: 'Friend #6'},
        {name: 'Friend #7'},
    ]              // this is how we can render multiple items
    return (                  
    <FlatList data={friends} 
           // you can scroll horizontally
              horizontal  // hide scrollbarr
              showsHorizontalScrollIndicator={false}
            //  key is ipmortant to be added
              keyExtractor={friends => friends.name}
              renderItem={({item}) => {
                  return <Text  style={styles.textStyle}>{item.name}</Text>
              }}        
    />
    )
};


                  
export default ListScreen;