import React,{useContext} from "react";
import { View,Text,StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

// this screen show the single post when click on list of post
const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const blogPost = state.find((blogPost) =>blogPost.id === navigation.getParam('id') )
   return (
    <View>
        <Text> {blogPost.title} </Text>
    </View>
   );
};

const styles = StyleSheet.create({});

export default ShowScreen;
