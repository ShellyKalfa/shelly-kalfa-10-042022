import React, {useEffect, useState} from "react";
import NativeBar from "../NativeBar/NativeBar";
import Search from "../Search/Search";
import Card from "../Card/Card";
import "../../asset/AppBody.css"
import PageFaverites from "../PageFaverites/PageFaverites";
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from '../../redux/index'

export default function Page({data = {}}) {
  const dispatch = useDispatch();
  const {add, remove, update} = bindActionCreators(actionCreators, dispatch);
  const {FaveritesChose, currentCity, key} = data;
  const [city, setCity] = useState(currentCity.cityCode);
  const [nameCity, setNameCity] = useState(currentCity.nameCity);
  const [weeklyWeather, setWeeklyWeather] = useState([]);
  const [switchPage, setSwitchPage] = useState("Home");
  const [isInFaverites, setIsInFaverites] = useState(true);
  const [looding, setLoding] = useState(false)
  const [error, setError] = useState(null)
  const baseUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
  const qwery = `${city}?apikey=${key}&metric=true`;

  function onclickf(cityInfo) {
    setNameCity(cityInfo.name);
    setCity(cityInfo.code);
    update({
      nameCity: cityInfo.name,
      cityCode: cityInfo.code
    })
    onClickFunction("Home")
    onIsInFaverites()
  }

  function onClickFunction(homeOrFaveritesChose) {
    homeOrFaveritesChose === "Home" ? setSwitchPage("Home") : setSwitchPage("Faverites")
  }

  function onIsInFaverites() {
    const index = FaveritesChose.findIndex((code) => code.code === city);
    if (index > -1) {
      setIsInFaverites(true);
    } else {
      setIsInFaverites(false)
    }
  }

  function clickForRemove(code) {
    remove(code)
  }

  const onClickAddFaveritesF = () => {
    if (!isInFaverites) {
      add({name: nameCity, code: city})
      setIsInFaverites(true)
    } else {
      clickForRemove(city)
      onIsInFaverites()
    }
  }
  useEffect(() => {
    let isMounted = true;
    setLoding(true);
    fetch(baseUrl + qwery)
      .then(res => res.json())
      .then(json => {
        if (isMounted) {
          setWeeklyWeather(json)
        }
      })
      .catch(error => {
        if (isMounted) {
          setError(error)
          setWeeklyWeather(null)
          console.log(error, "error")
        }
      })
      .finally(() => isMounted && setLoding(false))
    return () => (isMounted = false)
    onIsInFaverites()

  }, [city])

  return (
    <div className="AppBody">
      <NativeBar clickFunction={onClickFunction}/>
      {switchPage == "Home" ?
        (<>
          <Search onclick={onclickf} keyFetch={key}/>
          <Card keyFetch={key}
                weathr={weeklyWeather}
                city={city}
                name={nameCity}
                isInFaveriteskey={isInFaverites}
                onClickAddFaveritesF={() => onClickAddFaveritesF()}/>
        </>)
        :
        (<> <PageFaverites data={FaveritesChose}
                           openFaveritesCitys={onclickf}
                           keyFetch={key}
                           clickForRemove={clickForRemove}/></>)
      }

    </div>);

}
//