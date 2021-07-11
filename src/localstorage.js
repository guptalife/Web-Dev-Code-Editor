import { useState,useEffect } from "react";

export default function Usinglocalstorage(key,initvalue){
     
    const [Value,setValue]=useState(()=>{
         
        const jsonvalue=localStorage.getItem(key);
        if(jsonvalue!=null){
             return JSON.parse(jsonvalue);
        }
        if(typeof initvalue =='function'){
            return initvalue();
        }else{
            return initvalue;
        }
    })
    useEffect(()=>{
         localStorage.setItem(key,JSON.stringify(Value));
    },[key,Value]);
    return [Value,setValue];
}