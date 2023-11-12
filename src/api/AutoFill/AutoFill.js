import {useState,useEffect} from "react";

const key="HYllqZmwHbFgRcToRj7QiNqTiFr2keMr";


export  default function useGetCityCode(city){
  const [listOfCity,setlistOfCity]=useState("");
  const baseUrl='https://dataservice.accuweather.com/locations/v1/cities/autocomplete';
  const qwery=`?apikey=${key}&q=${city}`;

  useEffect(()=>{
    fetch(baseUrl+qwery)
      .then(res=>res.json())
      .then(json=> {setlistOfCity(json)})

  },[city])
return{listOfCity}

};
