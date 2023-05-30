import React from "react";
import { View,Text,SafeAreaView,TextInput,Button,Linking } from "react-native";
import { Stack,Link } from "expo-router";
import Login from "../components/Login";
const Home = (props) => {
    
    return (
        <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Stack.Screen options={{
                headerStyle:{backgroundColor:"white"},
                headerShadowVisible: false,
                headerTitle: "",
            }}/>
           <Login />
            </SafeAreaView>
    )
        }
export default Home