import React, {useEffect, useState} from "react";

export default function Days({weatherForFiveDays = []}) {
  const d = new Date();
  const [today, setToday] = useState(d.getDay());
  const [weather, setWeather] = useState(weatherForFiveDays);
  const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  useEffect(() => {
    setWeather(weatherForFiveDays)
  }, [weatherForFiveDays]);

  function getdays(str) {
    let tempStr = str;
    let year = tempStr.substring(0, 4);
    let mount = tempStr.substring(5, 7);
    let day = tempStr.substring(8, 10);
    return `${day}.${mount}.${year}`
  }

  return (<div className="DaysFlex">
    {
      weather.length !== 0 &&
      weather.map((day, index) => (
        <div key={day.Date} className="daysStyle">
          <div className="dayFlex">
            <div>
              {getdays(day.Date)}
            </div>
            <div>{today + index + 1 < days.length ? days[today + index + 1] : days[today + index - 6]}</div>
          </div>
          <div className="dayFlex">
            <div className="minimax">
              <div>{day.Temperature.Maximum.Value}&#176;/</div>
              <div>{day.Temperature.Minimum.Value}&#176;</div>
            </div>
            <div>{day.Day.IconPhrase}</div>
          </div>
        </div>))

    }
  </div>);
}
