import React, { useEffect, useState } from "react";
import "./App.css";
import { data } from "./mockData";
import Table from "./Table/Table";
import { distanceValue, getDistanceData, getMax } from "./utils/utils";

function App() {
  let agents = {};
  const [mostIsolated, setMostIsolated] = useState({});
  const [countries, setCountries] = useState({});
  const [addresses, setAddresses] = useState({});

  useEffect(() => {
    if (data) {
      data.forEach((element, index) => {
        setTimeout(() => {
          setAddresses(
            addresses,
            distanceValue(getDistanceData(element.address))
          );
        }, 600 * index);
      });
      data.sort((a, b) => new Date(a.date) - new Date(b.date));
      data.forEach(element => {
        if (agents[element.agent]) {
          agents[element.agent]++;
        } else {
          agents[element.agent] = 1;
        }
      });
      data.forEach(element => {
        if (agents[element.agent] === 1) {
          if (countries[element.country]) {
            countries[element.country]++;
          } else {
            countries[element.country] = 1;
          }
        }
      });
      setCountries(countries);
      setMostIsolated(getMax(countries));
    }
  }, []);

  return (
    <div className="App">
      <h1>
        the most isolated country is {mostIsolated[0]} with{"  "}
        {countries[mostIsolated]} agents
      </h1>
      <Table data={data} addresses={addresses} />
    </div>
  );
}

export default App;
