import React, {useState,useEffect} from "react";
import { View,Text,StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "./components/ResultsList";


const SearchScreen = () => {
  const [term, setTerm] =  useState('');
  const [searchApi,results,errorMessage] = useResults();
  console.log("---->",results);

const filterResultByPrice = (price) => {
    // price === '$' || price === '$$' || price === '$$$'
   return results.filter( result => {
      return result.price === price;

    });
};

  return (
    <View style={styles.background}>
      <SearchBar 
      term={term} 
      onTermChange={setTerm }
      onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text> {errorMessage}</Text> : null}
        <Text>We have found {results.length} results</Text>
        <ResultList results={filterResultByPrice('$')} title="Cost Effective" />
        <ResultList results={filterResultByPrice('$$')} title="Bit Pricer" />
        <ResultList results={filterResultByPrice('$$$')} title="Big Spender"/>
    </View>
  );
};
const styles = StyleSheet.create({
  background:{
    backgroundColor:'#FFFF00'
  }
});

export default SearchScreen;