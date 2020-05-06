import React, { memo, useState, useEffect } from "react";
import CountriesTable from "./CountriesTable";

import $ from "jquery";
import axios from "axios";

let FunctionBasedCounter = () => {
  const [countriesData, setCountriesData] = useState(null);

  //USe effect as componentDidMount
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountriesData(data);
      })
      .catch(console.error);

    /* $.getJSON("https://restcountries.eu/rest/v2/all", (data) => {
      console.log(data);
      setCountriesData(data);
    }); */

    /* axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(({ data }) => {
        console.log(data);
        setCountriesData(data);
      })
      .catch(console.error); */
  }, []);

  return countriesData ? <CountriesTable data={countriesData} /> : null;
};

FunctionBasedCounter = memo(FunctionBasedCounter);

export default FunctionBasedCounter;
