import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [search, setSearch] = useState("islamabad");
  const [city,setCity]=useState()

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a56b48b5142771070af070212c35f69d`
      );
      console.log("res======>", res.data.main); 
      setCity(res.data.main)
    } catch (error) {
      console.log("errror======>", error);  
    }
  };

  useEffect(() => {
    getData();
  }, [search]);
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center main_div">
        <div className=" text-center middele_div ">
          <input
            type="search"
            placeholder="Search here"
            className="mt-2 input_feild"
           value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
          />
          {!city ? (
            <p>data not found</p>
          ) : (
<div>
          <div className="d-flex justify-content-center mt-3 py-5">
            <i className="fas fa-street-view mt-5 pt-2 pe-4 icons"></i>
            <h3 className="mt-5 mb-3">{search}</h3>
          </div>

          <h4 className="mb-0 ">{city.temp}°C</h4>
          <span className="temp">Min {city.temp_min}°C / Max{city.temp_max}°C</span>
</div>
          )

          }
        </div>
      </div>
    </>
  );
};

export default Weather;
