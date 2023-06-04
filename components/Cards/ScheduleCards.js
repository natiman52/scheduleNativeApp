import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import {Styles} from "./CardStyle"

const ScheduleCards = ({pk,owner,grade,subject,work}) => {
    return (
        <TouchableOpacity style={Styles.CardContainer}>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:10}}>
                <Text style={Styles.SubjectText}>{subject}</Text>
                <Text style={Styles.GradeText}>{grade}</Text>
                </View>
                <Text>{work}</Text>

        </TouchableOpacity>
    )
}
export default ScheduleCards