import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [search, setSearch] = useState("islamabad");
  const [weather,setWeather]=useState()

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a56b48b5142771070af070212c35f69d`
      );
      console.log("res======>", res.data.main); 
      setWeather(res.data.main.temp)
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
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div className="d-flex justify-content-center mt-3 py-5">
            <i className="fas fa-street-view mt-2 icons"></i>
            <h3 className="">{search}</h3>
          </div>

          <h4 className="mb-0 ">{weather}°C</h4>
          <span>asim</span>
        </div>
      </div>
    </>
  );
};

export default Test;
