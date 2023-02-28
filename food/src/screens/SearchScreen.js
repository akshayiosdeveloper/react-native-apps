import React, {useState} from "react";
import { View,Text,StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import yelp from "../api/yelp";
const SearchScreen = () => {
  const [keyword, setKeyword] =  useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const searchApi = async () => {
    try {
   const response = await yelp.get('', {
    // params: {
    //   limit:50,
    //   keyword,
    //   location: 'san jose'
    // }
   });
  setResults(response.data.businesses)
  console.log(response.data);
    } 
    catch (err) {
     console.log(err)
    }
  };
  return (
    <View style={styles.background}>
      <SearchBar 
      keyword={keyword} 
      onKeywordChange={ setKeyword }
      onTermSubmit={searchApi}
      />
        <Text>{errorMessage}</Text>
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