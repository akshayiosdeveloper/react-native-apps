import React, {useState , useContext} from "react";
import { View,Text,StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
// Edit screen 


const EditScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
        );
    return (
    <View>
    <Text> Edit Screen - {navigation.getParam('id')} </Text>
    </View>
    );
};

const style = StyleSheet.create({});

export default EditScreen;
