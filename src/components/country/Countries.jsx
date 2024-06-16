import React from "react";
import { useState } from "react";
import { fetchData } from "../api/Api";
import { useEffect } from "react";
import Card from "../card/Card";
import "./Countries.css";

const Countries = () => {
  const [countryList, setCountryList] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
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

  const handleSearch = (e) => {
    let { value } = e.target;
    setSearchCountry(value);
  };

  const filterCountries = (countryList, searchCountry) => {
    return (
      countryList &&
      countryList.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(searchCountry.toLowerCase());
      })
    );
  };
  let filteredList = filterCountries(countryList, searchCountry);
  console.log(countryList);
  console.log(filteredList);
  return (
    <div className="countries">
      <div className="input">
        <input
          type="text"
          placeholder="Search for countries"
          name="searchCountry"
          value={searchCountry}
          onChange={handleSearch}
        />
      </div>
      <div className="container">
        {filteredList &&
          filteredList.map((country) => {
            return (
              <div className="countryCard" key={country.name.common}>
                <Card
                  src={country.flags.png}
                  alt={country.name.official}
                  countryName={country.name.common}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Countries;
