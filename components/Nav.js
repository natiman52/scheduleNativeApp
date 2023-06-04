import React from "react";
import { SafeAreaView,View,Text,TouchableOpacity,Image } from "react-native";
import NavStyle from "../assets/styles/NavStyle";
import settings from "../assets/icons/settings.png"
const Nav = (props) =>{
    return(
        <SafeAreaView style={NavStyle.navContainer}>
            <View style={NavStyle.Wrapper}>
            <TouchableOpacity onPress={event => props.handle("main") }>
                    <View style={NavStyle.button}>
                        <Text style={{color:"black",fontSize:16}}>main</Text>
                    </View>
                </TouchableOpacity>                
                <TouchableOpacity onPress={event => props.handle("create") }>
                    <View style={NavStyle.button}>
                        <Text style={{color:"black",fontSize:16}}>create</Text>
                    </View>
                </TouchableOpacity>                
                <TouchableOpacity onPress={event => props.handle('settings') }>
                    <View style={NavStyle.button}>
                        <Image source={settings}  style={{width:30,height:30}}/>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Nav