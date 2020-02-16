import React, { useEffect, useState } from "react";
import "./App.css";
import { data } from "./mockData";
import Table from "./Table/Table";

function App() {
  let agents = {};
  const [mostIsolated, setMostIsolated] = useState({});
  const [countries, setcountries] = useState({});
  const getMax = countriesObj => {
    return Object.keys(countriesObj).filter(agentsFilter => {
      return (
        countriesObj[agentsFilter] ===
        Math.max.apply(null, Object.values(countriesObj))
      );
    });
  };
  useEffect(() => {
    if (data) {
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
      setcountries(countries);
      setMostIsolated(getMax(countries));
    }
  }, []);

  return (
    <div className="App">
      <h1>
        the most isolated country is {mostIsolated[0]} with{"  "}
        {countries[mostIsolated]} agents
      </h1>
      <Table data={data} />
    </div>
  );
}

export default App;
