import React, {useState, useEffect} from "react";
import useGetCityWeather from "../../api/useGetCityWeather/useGetCityWeather";
import useGetCiteCode from "../../api/useGetCiteCode/useGetCiteCode";

export default function FaveritesCitys({cityInfo = "", openFaveritesCitys, keyFetch, clickForRemove}) {
  const [weatherReturn, setWeatherReturn] = useState("")
  const [looding, setLoding] = useState(false)
  const [error, setError] = useState(null)
  const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const qwery = `${cityInfo.code}?apikey=${keyFetch}&getPhotos=true`;

  useEffect(() => {
    fetch(baseUrl + qwery)
      .then(res => res.json())
      .then(json => {
        setWeatherReturn(json[0])

      })
      .catch(error => {
        setError(error)
        setWeatherReturn("")
        console.log(error, "error");
      })
      .finally(() => setLoding(false))
  }, [cityInfo])
  return (
    <div className="FaveritesCity">
      <div className="down" onClick={() => clickForRemove(cityInfo.code)}>x</div>
      <div className="img" onClick={() => openFaveritesCitys(cityInfo)}>  {weatherReturn !== "" ?
        <img src={weatherReturn.Photos[0].PortraitLink} className="cityImg"/> : "pic"}</div>
      <div className="TitleFaverites"
           onClick={() => openFaveritesCitys(cityInfo)}> {cityInfo.name !== "" ? cityInfo.name : "name"}</div>
      <div className="down">
        {weatherReturn !== "" ? weatherReturn.Temperature.Metric.Value : "Temperature"} &#176;
      </div>
      <div>  {weatherReturn !== "" ? weatherReturn.Temperature.WeatherText : "Temperature"}</div>
    </div>
  );

}
