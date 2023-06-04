import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

export const Styles = StyleSheet.create({
    CardContainer:{
        paddingTop:20,
        paddingBottom:0,
        paddingLeft:10,
        paddingRight:15,

        width:"100%",
    },
    SubjectText:{
        fontSize:SIZES.medium,
        fontFamily:"GeologicaMD"
    },
    GradeText:{
        fontFamily:"GeologicaMD",   
    }
}) 