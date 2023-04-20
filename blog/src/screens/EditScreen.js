import React, {useState , useContext} from "react";
import { View,Text,StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";
// Edit screen 

const EditScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
        );
    const [title, setTitle] = useState(blogPost.title); 
    const [content, setContent] = useState(blogPost.content);     
    return (
    <View>
    <Text> Edit Screen123  </Text>
    <TextInput value={title} onChangeText={(newTitle) => setTitle(newTitle)} />
    </View>
    );
};

const style = StyleSheet.create({});

export default EditScreen;
