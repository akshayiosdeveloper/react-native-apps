import React, {useState} from "react";
import { View,Text,StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import yelp from "../api/yelp";
const SearchScreen = () => {
  const [keyword, setKeyword] =  useState('');
  const [results, setResults] = useState([]);
  const searchApi = async () => {
   const response = await yelp.get('/search', {
    params: {
      limit:50,
      term,
      location: 'san jose'
    }
   });
  setResults(response.data.businessess)
  };
  return (
    <View style={styles.background}>
      <SearchBar 
      keyword={keyword} 
      onKeywordChange={ setKeyword}
      onTermSubmit={searchApi}
      />
        <Text>hELLO SEARCH!!</Text>
        <Text>We have found {results.length} results</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  background:{
    backgroundColor:'#FFFF00'
  }
});

export default SearchScreen;