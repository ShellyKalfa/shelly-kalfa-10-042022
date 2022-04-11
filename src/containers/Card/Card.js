import React, {useEffect, useState} from "react";
import "../../asset/Card.css"
import City from "../../components/City/City";
import Faverites from "../../components/Faverites/Faverites";
import Days from "../../components/Days/Days";
import useGetCityWeather from "../../api/useGetCityWeather/useGetCityWeather";

export default function Card({city = 0, weathr = [], name = "", onClickAddFaveritesF, isInFaveriteskey, keyFetch}) {
  const [weather, setCode] = useGetCityWeather(city, keyFetch)
  const [upCard, setUpCard] = useState("");
  useEffect(() => {
    setCode(city)
  }, [city])
  return (<div className="CardFlex">
    <div className="CardBodyFlex">
      <div className="upCardBody">
        {weathr?  <City upCard={weather} name={name}/>:<City  name={name}/>}
        <Faverites onClickAddFaveritesF={onClickAddFaveritesF}
                   isInFaverites={isInFaveriteskey}/>
      </div>
      <div className="CardText"> Scatterd Clouds</div>
      <div className="downCardBody">
        {weathr?<Days weatherForFiveDays={weathr.DailyForecasts}/>:<div>your out of reqwest</div>}
      </div>
    </div>
  </div>);
}