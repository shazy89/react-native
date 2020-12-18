import React from 'react'
import { Text, StyleSheet, View, FlatList } from "react-native";

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
              renderItem={({item, i}) => {
                  return <Text key={i} style={{fontSize: '20'}}>{item.name}</Text>
              }}        
    />
    )
};
export default ListScreen;