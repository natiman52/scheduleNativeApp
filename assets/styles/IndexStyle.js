import {StyleSheet, Text, View} from 'react-native'
import { COLORS } from '../../constants'

export const IndexStyle = StyleSheet.create({
    headerStyle:{
        backgroundColor:'#29EA13',
    },
    body:{
        backgroundColor:COLORS.lightWhite,
        height:"100%"
    },
    NavBtn:{
        width:40,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
    },
    Img:{
        width:30,
        height:30,
    },
    Loader:{
        justifyContent:'center',
        alignItems:"center",
        width:"100%",
        height:"100%"
    }
})