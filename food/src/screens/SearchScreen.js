import React, {useState} from "react";
import { View,Text,StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import yelp from "../api/yelp";
const SearchScreen = () => {
  const [term, setTerm] =  useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  async function searchApi(searchKeyword) {
    try {
      const response = await yelp.get('/search',{
        params: {
          location: 'san jose',
          term: searchKeyword,
          limit:50
        }
      })
      .then(function (response) {
        console.log(response.data.businesses);
        setResults(response.data.businesses);
      })
      .catch(function (error) {
        console.log(error);
        setErrorMessage("Some thing went wrong!!")
      })
      .finally(function () {
        console.log("Always executed!!")
      });
      
    } catch (error) {
      console.error(error);
      
    }
  }

  return (
    <View style={styles.background}>
      <SearchBar 
      term={term} 
      onTermChange={setTerm }
      onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text> {errorMessage}</Text> : null}
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