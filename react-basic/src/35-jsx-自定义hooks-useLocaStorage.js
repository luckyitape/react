import { useEffect, useState } from "react";

export function useLocalStorage(key,defaultValue) {
    const [message,setMessage] = useState(defaultValue)
    //  只要message变化  就会同步到本地存储ls
    useEffect(()=>{
        window.localStorage.setItem(key,message)
    },[message,key])
    return [message,setMessage]
}