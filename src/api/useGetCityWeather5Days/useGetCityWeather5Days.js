import React, {useEffect,useState} from "react";

export  default function useGetCityWeather5Days(cityInfo="",key){
  const [data,setData]=useState(cityInfo)
  const [list,setList]=useState(null)
  const [looding,setLoding]=useState(false)
  const [error,setError]=useState(null)
  const baseUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
  const qwery = `${data}?apikey=${key}&metric=true`;
  console.log(qwery,"qwery");
  console.log(data,"data");

  useEffect(()=>{
    console.log("jkjk")
    let isMounted=true;
    setLoding(true);
    console.log( "useGetCiteCode 1:",data)
    console.log(qwery,"qwery");
    fetch(baseUrl+qwery)
      .then(res=>res.json())
      .then(json=> {
        if(isMounted) {
          setList(json)
          console.log(json, "json")
        }
      })
      .catch( error=> {
        if(isMounted) {
          setError(error)
          setList(null)
        }
      })
      .finally(()=> isMounted&&setLoding(false))
    return()=>(isMounted=false)
    // console.log(code,"weather use");
  },[setData])
  console.log(list,"weather use 2");
  return{list,error,looding,setData}
}