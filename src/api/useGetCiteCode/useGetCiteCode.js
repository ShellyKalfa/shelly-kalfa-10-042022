import React, {useEffect,useState} from "react";

const key="78g8od8Gjh1zGzGM98eun5gzSTxG4en6";
export  default function useGetCiteCode(cityInfo=""){
  const [code,setCode]=useState(null)
  const [looding,setLoding]=useState(false)
  const [error,setError]=useState(null)
  const baseUrl='https://dataservice.accuweather.com/locations/v1/cities/search';
  const qwery=`?apikey=${key}&q=${cityInfo}`;

  useEffect(()=>{
    console.log("useGetCiteCode useEffect");
    let isMounted=true;
    setLoding(true);
    console.log(baseUrl+qwery,"baseUrl+qwery");
    fetch(baseUrl+qwery)
      .then(res=>res.json())
      .then(json=> {
          setCode(json[0].Key)
          console.log(json, "json")

      })
      .catch( error=> {
          setError(error)
          // setCode(null)
        console.log(error, "errosr")

      })
      .finally(()=> isMounted&&setLoding(false))
    return()=>(isMounted=false)
    // console.log(code,"weather use");
  },[cityInfo])
  console.log("useGetCiteCode ");

  return{code,error,looding}
}