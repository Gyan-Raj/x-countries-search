import React from "react";
import { useState } from "react";
import { fetchData } from "../api/Api";
import { useEffect } from "react";

const Countries = () => {
  const [countryList, setCountryList] = useState([]);
  let countriesData = async () => {
    try {
      let res = await fetchData();
      //   console.log(res);
      setCountryList(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    countriesData();
  }, []);
  return <div>Countries</div>;
};

export default Countries;
