import React, {useEffect, useState} from "react";

export default function City({upCard = "", name}) {
  const [cityInfo, setCityInfo] = useState("");
  const [nameCity, setNameCity] = useState("");
  console.log(cityInfo,"cityInfo")
  useEffect(() => {
    setCityInfo(upCard)
    setNameCity(name)
  }, [upCard]);
  return (<div className="CityFlex">
    <div className="imgup">
      {cityInfo  ? <img src={cityInfo.Photos[0].PortraitLink} className="cityImg"/>
        : "pic"}
    </div>
    <div className="divTextCity">
      <div>  {nameCity !== "" ? nameCity : "name"}</div>
      <div>
        {cityInfo !== "" ? cityInfo.Temperature.Metric.Value : "Temperature"} &#176;
      </div>
    </div>
  </div>);
}