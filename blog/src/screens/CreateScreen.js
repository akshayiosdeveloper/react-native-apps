import React,{useContext,useState} from "react";
import { View,Text,StyleSheet,TextInput } from "react-native";
import { Context } from "../context/BlogContext";

// Create Add Post Screen 
const CreateScreen = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
   return (
    <View>
        <Text style={styles.label}> Enter Title: </Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
        <Text style={styles.label}> Enter Content: </Text>
        <TextInput style={styles.input} value={content} onChangeText={(content) => setContent(content)} />
    </View>
   );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth:1,
        borderColor:'black',
        marginHorizontal:10,
        marginBottom:10,
        padding:5
    },
    label: {
     fontSize: 20,
     marginBottom:10 ,
     marginLeft:7  
    }
});

export default CreateScreen;
