import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const NavStyle = StyleSheet.create({
    navContainer:{
        height:100,
        justifyContent:"flex-end",
        shadowColor:"black",
        shadowOffset:{
            width:100,
            height:100},
        shadowOpacity:0.8,
        shadowRadius:1,
    },
    Wrapper:{
        borderTopWidth:1,
        padding:20,
        borderTopColor:COLORS.gray,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },

})

export default NavStyle