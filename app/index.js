import React, {useState,useEffect} from "react";
import { View,Text,SafeAreaView,TextInput,ScrollView,TouchableOpacity,Image,ActivityIndicator } from "react-native";
import { Stack,useRouter } from "expo-router";
import Login from "../components/Login";
import * as SecureStore from "expo-secure-store";
import {IndexStyle} from "../assets/styles/IndexStyle"
import Main from "../components/Main"
import {COLORS} from "../constants"
import { LoginStyle } from "../assets/styles/LoginStyle";
import menu from "../assets/icons/menu.png"
import getLoginUser from "../hook/getLogin"
import { Styles } from "../components/Cards/CardStyle";
import Nav from "../components/Nav"

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function remove(key){
  await SecureStore.deleteItemAsync(key);
}
const WholeSubject= [
  "All",
  "Maths",
  'Physics',
  'Amharic',
  "English",
  "Biology",
  "Chemistry",
  "Geogarphy",
  "Civic",
  "History",
  "Geez",
  "Ethics"
]
var AllGrade = [
  "9A","9B","10A","10B","11A","11B","12A","12B"
]

const Home = (props) => {
  const router = useRouter()
  const [Refatch,setRefatch] = useState(false)
  const [currentPage,setPage] = useState("main")
  const APICall = getLoginUser(true)

  const changePage = page => {
    setPage(prevData => page)
  }
  const renderSwitch=(prams)=>{
    switch(prams){
      case "main":
        return <Main Subjects={WholeSubject} Grades={AllGrade}/>
      case "create":
        return <Text>create</Text>
      case "settings":
        return <Text>settings</Text>

    }
  }
  const retriver = () =>{
    setRefatch(e => !e )
  }
useEffect(() =>{
  APICall.refatch()
},[Refatch])

    return (
      <>
        {   APICall.Error
        &&
            <View>
            <Text>Error</Text>
            </View>

        }
        {APICall.Loading
        ?
        <SafeAreaView style={IndexStyle.Loader}>
          <Stack.Screen options={{
            headerShown:false
          }}/>
        <ActivityIndicator size="large"/>
        </SafeAreaView>
        :
        APICall.Data
        ?
        <SafeAreaView style={IndexStyle.body}>
        <Stack.Screen options={{
        headerStyle:IndexStyle.headerStyle,
        headerShown:true,
        headerShadowVisible: false,
        headerTitle: "ScheduleProgram",
        headerTitleAlign:"center",
        headerLeft: () =>(
          <TouchableOpacity style={LoginStyle.NavBtn}>
            <Image source={menu} resizeMode="cover" style={IndexStyle.Img}/>
          </TouchableOpacity>
        ),
    }}/>
    <ScrollView  style={{width:"100%",height:"100%"}}>
      {renderSwitch(currentPage)}
    </ScrollView>
        <Nav  handle={changePage} />
        </SafeAreaView>
    :        
    <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:COLORS.lightWhite}}>
              <Stack.Screen options={{
                headerShown:false
    }}/>
    <Login save={save}  retriver={retriver}/> 
            </SafeAreaView>
    }
    </>       
    )

        }

export default Home