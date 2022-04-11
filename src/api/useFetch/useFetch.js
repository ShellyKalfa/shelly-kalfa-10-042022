import {useState, useEffect} from "react";


const baseUrl = 'http://dataservice.accuweather.com/';
export default function useFetch(haseQwery = "") {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [error, setError] = useState(null);
  const [qwery, setQwery] = useState(haseQwery);

  useEffect(() => {
    fetch(baseUrl + qwery)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setData(json)
        setIsLoggedIn(false)
      })
      .catch((error) => {
        setError(error)
        setData(null)
      })
      .finally()

  }, [qwery])
  return {data, isLoggedIn, error, setQwery};
}