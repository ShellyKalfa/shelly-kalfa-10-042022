import React, {useEffect, useState} from "react";
import "../../asset/Search.css"
import AutoFill from "../../components/AutoFill/AutoFill";
import {FcSearch} from "react-icons/fc";
import useFetch from "../../api/useFetch/useFetch";

export default function Search({onclick, keyFetch}) {
  const [text, setText] = useState("");
  const [listOfCity, setListOfCity] = useState([]);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(null)

  function show() {
    const classN = text ? ` SearchAutoFill ` : `SearchAutoFillHide`;
    return classN;
  }

  const onChange = (e) => {
    const {value} = e.target;
    if ((!/[^a-zA-Z]/.test(value))) {
      setText(value);
    }
  }

  function handelClick(cityCode, nameCity) {
    setText("");
    onclick(cityCode, nameCity)
  }

  async function getCityCode(city) {
    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
    const qwery = `?apikey=${keyFetch}&q=${city}`;
    fetch(baseUrl + qwery)
      .then(res => res.json())
      .then(json => {
        setListOfCity(json)
        setLoding(false)
      })
      .catch(error => {
        setError(error)
        setListOfCity(null)
      })
      .finally(() => setLoding(false))
  }

  useEffect(() => {
    setLoding(true)
    getCityCode(text)
  }, [text])

  return (<div className="SearchFlex">
    <div>
      <div className="divSearch">
        <input className="searchInput"
               id="search"
               value={text}
               type="text"
               placeholder="new City..."
               onChange={(e) => onChange(e)}/>

          <label className="openSearchInput" htmlFor="search"><FcSearch/> </label>

        <div className={show()}>
          {text !== "" &&
          loding || !listOfCity ? (
              <div>lodding </div>
            )
            : listOfCity.map((citys, index) => (
              <div key={index}>
                <AutoFill citys={citys} onclick={handelClick}/>
              </div>))
          }

        </div>



      </div>
    </div>
  </div>);
}