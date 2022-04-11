import React, {useEffect,useState} from "react";

export  default function useGetCityWeather(codeCity,key){
  const [code,setCode]=useState(codeCity)
  const [weather,setWeather]=useState("")
  const [looding, setLoding] = useState(false)
  const [error, setError] = useState(null)
  const baseUrl='http://dataservice.accuweather.com/currentconditions/v1/';
  const qwery=`${code}?apikey=${key}&getPhotos=true`;
  useEffect(()=>{
    setLoding(true)

      fetch(baseUrl + qwery)
        .then(res => res.json())
        .then(json => {
          setWeather(json[0])
        })
        .catch(error => {

          setError(error)
          setWeather(null)
          console.log(error, "error")

      })
        .finally(() =>   setLoding(false))
  },[code])
  return[weather,setCode]
}