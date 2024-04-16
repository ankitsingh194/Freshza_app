import {View, Text} from 'react-native'
import { useState,useEffect } from 'react'
import axios from 'axios';



const useFetch = () => {
    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError]= useState(null)


    const fetchdata = async ()=> {
        setIsLoading(true)

        try {
            const resposne = await axios.get('http://192.168.1.40:3000/v1/api/products/');
            setData(resposne.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)

            
        }finally{
            setIsLoading(false)
        }
    }


    useEffect(()=> {
        fetchdata()
    },[]);


    const refetch = () => {
        setIsLoading(true)
        fetchdata();
    }



    return {
        data,isLoading,error,refetch

    }
}

export default  useFetch;