import React, { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = "489d3c3436cf5868c9a3c901003e36ba";
import { TbTemperatureCelsius } from "react-icons/tb";
import { BiWind } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";

function Weather() {
  const [country, setCountry] = useState("Vietnam");
  const [city, setCity] = useState("Hanoi");
  const [weather, setWeather] = useState({});
  const [searchContent, setSearchContent] = useState("");
  const currentWeather = {};
  console.log("weather", weather);

  const changeToCelsius = (fahrenheit) => {
    console.log(fahrenheit);
    let result = fahrenheit - 273.15;
    return result.toFixed(0);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setCity(e.target.value);
    }
  };

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        currentWeather.temp = changeToCelsius(res.data.main.temp);
        currentWeather.humidity = res.data.main.humidity;
        currentWeather.description = res.data.weather[0].description;
        currentWeather.icon = res.data.weather[0].icon;
        currentWeather.wind = res.data.wind.speed;
        currentWeather.country = res.data.sys.country;
        currentWeather.city = res.data.name;
        currentWeather.visibility = res.data.visibility;
        currentWeather.tempMin = changeToCelsius(res.data.main.temp_min);
        currentWeather.tempMax = changeToCelsius(res.data.main.temp_max);

        setWeather(currentWeather);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [country, city]);
  return (
    <>
      <div className="infor-container ">
        <div
          class="form-group d-flex justify-content-center mx-auto search-bar  mb-3"
          style={{ maxWidth: "250px" }}
        >
          <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="Enter city"
            onChange={(event) => setSearchContent(event.target.value)}
            onKeyDown={(event) => handleEnter(event)}
            style={{
              width: "200px",
              backgroundColor: "rgba(250, 247, 251, 0.5)",
              height: "30px",
              color: "black",
              border: "none",
              outline: "none",
              borderRadius: "5px 0 0 5px",
            }}
          />

          <BiSearchAlt
            size={"30"}
            onClick={() => {
              setCity(searchContent);
            }}
            style={{
              backgroundColor: "rgba(250, 247, 251, 0.5)",
              borderRadius: "0 5px 5px 0",
              cursor: "pointer",
            }}
          />
        </div>

        <h1>{weather.city}</h1>
        <h5 className="">{weather.description}</h5>
        <div className="temp d-flex justify-content-around">
          <div className="temp-min">
            <h5>Min</h5>
            <div className="d-flex">
              <h5>{weather.tempMin}</h5>
              <TbTemperatureCelsius size={""} />
            </div>
          </div>
          <div className="d-flex">
            <h1>{weather.temp}</h1>
            <TbTemperatureCelsius size={""} />
          </div>

          <div className="temp-max">
            <h5>Max</h5>
            <div className="d-flex">
              <h5>{weather.tempMax}</h5> <TbTemperatureCelsius size={""} />
            </div>
          </div>
        </div>

        <div className="more-infor d-flex  justify-content-between mt-2">
          <h5>
            {" "}
            <BiWind /> {weather.wind} km/h
          </h5>
          <h5>
            {" "}
            <WiHumidity size={"30px"} /> {weather.humidity}%
          </h5>
          <h5>
            {" "}
            <MdVisibility /> {weather.visibility / 1000}km
          </h5>
        </div>
      </div>
    </>
  );
}

export default Weather;
