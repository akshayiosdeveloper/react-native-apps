import React from "react";
import { View,Text,StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";

const SearchScreen = () => {
  return (
    <View style={styles.background}>
      <SearchBar />
        <Text>hELLO SEARCH!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#FFFF00'
  }
});

export default SearchScreen;