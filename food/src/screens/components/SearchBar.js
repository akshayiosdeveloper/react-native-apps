import React from "react";
import { View,TextInput,StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({keyword, onKeywordChange , onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
        <Feather style={styles.iconStyle} name="search" color="black" />
        <TextInput
        autoCapitalize='none'
        autoCorrect={false}
         style={styles.inputStyle} 
         placeholder="Search"
         value={keyword}
         onChangeText={onKeywordChange}
         onEndEditing={onTermSubmit }
         />
    </View>
  );
};

const styles = StyleSheet.create({
 backgroundStyle: {
  marginTop:15,
    backgroundColor:'#F0EEEE',
    height:50,
    borderRadius:5,
    marginLeft:15,
    marginRight:15,
    flexDirection:'row',
    marginBottom:10
   },
   inputStyle: {
    flex:1,
    fontSize: 18
   },
   iconStyle: {
    fontSize: 35,
    alignSelf:'center',
    marginHorizontal: 15
   }
});

export default SearchBar;