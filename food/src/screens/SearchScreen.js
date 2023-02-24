import React, {useState} from "react";
import { View,Text,StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";

const SearchScreen = () => {
  const [keyword, setKeyword] =  useState('')
  return (
    <View style={styles.background}>
      <SearchBar keyword={keyword} onKeywordChange={ (newKeyword) => setKeyword(newKeyword)} />
        <Text>hELLO SEARCH!!</Text>
        <Text>{keyword}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#FFFF00'
  }
});

export default SearchScreen;