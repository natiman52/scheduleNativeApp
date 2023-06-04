import { StyleSheet } from "react-native";
import {COLORS, SIZES} from "../../constants"
const MainStyle= StyleSheet.create({
    Container:{
        flexDirection:"row",
        margin:20,
        marginBottom:8,
        alignItems:"center"
    },
    WelcomeMessage:{
        fontSize:SIZES.large,
        fontWeight:500
    },
    SubjectContainer:{
        margin:8,
    },
    tab: (activeJobType, item) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.medium,
        borderWidth: 1,
        borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
      }),
      tabText: (activeJobType, item) => ({
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
      }),
      Loading:{
        justifyContent:"center",
        alignContent:"center",
        margin:20
      },
      ScheduleContainer:{
        width:"100%",
        backgroundColor:COLORS.lightWhite,
        padding:5,
      }
})
export default MainStyle