import React, { useState,useEffect } from "react";
import { View,Text,TextInput,TouchableOpacity,SafeAreaView } from "react-native";
import axios from "axios";
import { LoginStyle } from "../assets/styles/LoginStyle";

const Login = (props) =>{
    const [Username,setUsername] = useState("")
    const [Password,setPassword] = useState(false)
    const [CsrfToken,setCsrfToken]=useState()
    const [GuestLog,setGuestLog] =useState(false)
    const submithandler = async () => {
        if(Password != "" && Username != ""){
            await axios.get("https://nahombrother.pythonanywhere.com/api/get_csrfToken/").then(res => {
                setCsrfToken(e => res.data.token)
            }).catch(e => {
                console.log("hello")
            })
            await axios.post("https://nahombrother.pythonanywhere.com/api/auth_ver/",{username:Username,password:Password},{headers:{
                "X-CSRFToken":CsrfToken
            }}).then(e => {
               props.save('token',e.data.token)
               props.setlogin(e => true)
            }).catch(err => {
                console.log('loginErr')
            })
        }else if(Username == ""){
            setEmptySend( e => [true,"username"])
        }else if(Password == ""){
            setEmptySend(e => [true,'password'])
        }else{
            setEmptySend(e=> [true,'all'])
        }
        
    }
     return (
        <>
        <SafeAreaView>
        <View style={LoginStyle.Container}>
        <View style={LoginStyle.TitleContainer}>
        <Text style={LoginStyle.TitleText}>Login</Text>
        </View>
        <View style={LoginStyle.InputContainer}>
        <TextInput onChangeText={ (username) => setUsername( e => username )} style={LoginStyle.InputStyle} placeholder="username"/>
        </View>
        <View style={LoginStyle.InputContainer}>
        <TextInput secureTextEntry={true} onChangeText={ (username) => setPassword( e => username )} style={LoginStyle.InputStyle} placeholder="password"/>
        </View>
        <View style={LoginStyle.InputBtnContainer}>
        <TouchableOpacity style={LoginStyle.InputBtn} onPress={submithandler}>
            <Text style={LoginStyle.InputBtnText}>submit</Text>
        </TouchableOpacity>
        </View>

<View style={LoginStyle.guestlogin}>
    <Text onPressIn={e => {
        setGuestLog( e => true )
    }} onPressOut={e => {
        setGuestLog(e => false)
    }} style={GuestLog ? LoginStyle.guestlogintextActive : LoginStyle.guestlogintext} onPress={e => {
        props.save('guest','true')
        props.retriver()
    }}>login as a student</Text>
</View>
        </View>
        </SafeAreaView>
        </>
     )
}

export default Login