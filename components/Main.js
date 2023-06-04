import React from "react";
import { Text,View,SafeAreaView,TextInput,FlatList,TouchableOpacity, ActivityIndicator } from "react-native";
import MainStyle from "../assets/styles/MainStyle"; 
import { SIZES } from "../constants";
import useSearch from "../hook/useSearch";
import ScheduleCards from "./Cards/ScheduleCards"
import { useRouter } from "expo-router";
const Main = (props) => {
    const [Activesubject,setActiveSubject] = React.useState('Maths')
    const APICall = useSearch(Activesubject)
    const router = useRouter()
    React.useEffect(() =>{
        APICall.refatch()
    },[Activesubject])
    return (
        <View>
        <View style={MainStyle.Container}>
            <Text style={MainStyle.WelcomeMessage}>Schedules</Text>
        </View>
        <View style={MainStyle.SubjectContainer}>
        <FlatList
        data={props.Subjects}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() =>{ 
                setActiveSubject(e => item )
                }} style={MainStyle.tab(Activesubject,item)}>
                <Text style={MainStyle.tabText(Activesubject,item)}>{item}</Text>
            </TouchableOpacity>
        )}
        keyExtractor={item => item}
        horizontal
        contentContainerStyle={{"columnGap":SIZES.medium}}
        showsHorizontalScrollIndicator={false}
        />
        </View>
        {
            APICall.Loading
            ?
            <View style={MainStyle.Loading}>
                <ActivityIndicator size="large"/>
            </View>
            : 
            APICall.Error ?

            <View>{Error}</View>
            :
            <SafeAreaView style={{flexDirection:"column",marginBottom:30}}>
                {
                    APICall.Data && APICall.Data.map( item =>(
                        <View>
                        <ScheduleCards onPress={e =>router.push(`/${item.id}`) } owner={item.owner} grade={item.grade} subject={item.subject} work={item.work}/>
                    </View>
                    ))
                }
            </SafeAreaView>

        }
        </View>
    )
}
export default Main