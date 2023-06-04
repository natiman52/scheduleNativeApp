import  axios  from "axios";
import React, { useEffect } from "react";


const useSearch = (subject,grade) => {
    const [Data,setData]=React.useState()
    const [Loading,setLoading]=React.useState()
    const [Error,setError] = React.useState()

    async function getData(){
        setLoading( e => true)
        if(grade != undefined){
            await axios.get(`https://nahombrother.pythonanywhere.com/api/get_schedule/?grade=${grade}&subject=${subject}`).then(res =>{
                setLoading(e => false)
                console.log(res.data)
                setData(e => res.data)
            }).catch(e => {
                console.log("hrr")
            }).finally(e => {
                setLoading(e => false)
            })
        }else{
            if(subject == "All"){
                await axios.get(`https://nahombrother.pythonanywhere.com/api/get_schedule/?grade=9A`).then(res =>{
                    setLoading(e=> false)
                    setData(e => res.data)
                }).catch(e => {
                    setError(e => e.response.data)
                }).finally(e => {
                    setLoading(e => false)
                })
            }else{
                await axios.get(`https://nahombrother.pythonanywhere.com/api/get_schedule/?grade=9A&subject=${subject}`).then(res =>{
                    setLoading(e=> false)
                    setData(e => res.data)
                }).catch(e => {
                    setError(e => e)
                }).finally(e => {
                    setLoading(e => false)
                })
            }
        }
    }
    useEffect(()=>{
        getData()
    },[])
    function refatch(){
        getData()
    }
    return {Loading,Data,Error,refatch}
}

export default useSearch