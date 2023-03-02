import React, {useState,useEffect} from "react";
import { View,Text,StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "./components/ResultsList";


const SearchScreen = () => {
  const [term, setTerm] =  useState('');
  const [searchApi,results,errorMessage] = useResults();
  return (
    <View style={styles.background}>
      <SearchBar 
      term={term} 
      onTermChange={setTerm }
      onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text> {errorMessage}</Text> : null}
        <Text>We have found {results.length} results</Text>
        <ResultList title="Cost Effective" />
        <ResultList title="Bit Pricer" />
        <ResultList title="Big Spender"/>
    </View>
  );
};
const styles = StyleSheet.create({
  background:{
    backgroundColor:'#FFFF00'
  }
});

export default SearchScreen;