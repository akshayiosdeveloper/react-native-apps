import React from "react";
import { View,TextInput,StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.background}>
        <Feather name="search" size={30} color="black" />
        <TextInput style={styles.inputStyle} placeholder="Search"/>
    </View>
  );
};

const styles = StyleSheet.create({
 background: {
    backgroundColor:'#F0EEEE',
    height:50,
    borderRadius:5,
    marginLeft:15,
    marginRight:15,
    flexDirection:'row'
   },
   inputStyle: {
    borderColor:'black',
    borderWidth:1,
    flex:1
   }
});

export default SearchBar;