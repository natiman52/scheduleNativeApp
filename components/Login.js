import React from "react";
import { View,Text,TextInput,Button,SafeAreaView } from "react-native";

const Login = () =>{
     return (
        <SafeAreaView>
        <View style={{borderStyle:"solid",borderWidth: 1 ,borderColor:"black",padding:12,borderRadius:5,backgroundColor:"white"}}>
        <View style={{flexDirection:"row",alignItems:"center", marginBottom:10}}>
        <Text>username: </Text>
        <TextInput style={{borderWidth:1,borderStyle:"solid",padding:3}} placeholder="username"/>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",marginBottom:10}}>
        <Text>password: </Text>
        <TextInput style={{borderWidth:1,borderStyle:"solid",padding:3}} placeholder="password"/>
        </View>
        <Button
title="submit"
color="#841584"
accessibilityLabel="Learn more about this purple button"
/>

        </View>
        </SafeAreaView>
     )
}

export default Login