import React,{useContext} from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from '@expo/vector-icons';

// this screen show the single post when click on list of post
const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const blogPost = state.find((blogPost) =>blogPost.id === navigation.getParam('id') )
   return (
    <View>
        <Text> {blogPost.title} </Text>
        <Text> {blogPost.content} </Text>
    </View>
   );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
              <EvilIcons name="pencil" size={35} color="black" />
            </TouchableOpacity>
          )
    };
};


const styles = StyleSheet.create({});

export default ShowScreen;
