import React, { useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const getLoginUser = (user) => {
    const [Data,setData]=React.useState()
    const [Loading,setLoading]=React.useState()
    const [Error,setError] = React.useState()

    async function getGuestUser(){
        await SecureStore.getItemAsync('guest').then(e => {
            if(e){
                setData(prevData => true)
                console.log("test")
            }else{
                setData(prevData => false)
            }
            setLoading(res => false)

        }).catch(e => {
            setLoading(prevdata => false)
            
        }).finally(e => {
            setLoading(prevData => false)
        })
    }
    async function getData(){
        setLoading(prevData => true)
        await SecureStore.getItemAsync('token').then(e => {
            if(e){
                setData(prevData => e)
                setLoading(e => true)
            }else{
            getGuestUser()   
            }
        })
        }
    useEffect(()=>{
        getData()
    },[])
    function refatch(){
        getData()
    }
    return {Loading,Data,Error,refatch}
}

export default getLoginUser