/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect, useState } from "react";

const usefetch = (url)=>{
    const [data,setdata] = useState([]);
    const [loading,setloading] = useState(false);
    const [error,seterror] = useState(false);


    useEffect(()=>{
        const fetchdata = async ()=>{
            setloading(true);
            try{
                const res =await axios.get(url);
                setdata(res.data);
            }catch{
                // eslint-disable-next-line no-undef
                seterror(error);
            }
            setloading(false);
        }
        fetchdata();
    },[error, url])

const refatch = async ()=>{
    setloading(true);
    try{
        const res =await axios.get(url);
        setdata(res.data);
    }catch{
        // eslint-disable-next-line no-undef
        seterror(error);
    }
    setloading(false);
    }
    return {data,loading,error,refatch}
};

export default usefetch;