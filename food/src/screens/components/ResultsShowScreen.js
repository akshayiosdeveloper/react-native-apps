import React,{useState,useEffect} from "react";
import { View,Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');
  const getResult = async(id) => {
   const response = yelp.get(`/${id}`);
   console.log(response.data);
   setResult(response.data);
   
  };
  console.log("<==========>",id);
  useEffect(() => {
    getResult(id);
  }, []);
return (
    <View>
        <Text>Results Show</Text>    
    </View>
);
};

const styles = StyleSheet.create({});

export default ResultShowScreen;