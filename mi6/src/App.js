import React, { useEffect, useState } from "react";
import "./App.css";
import { data } from "./mockData";

function App() {
  let agents = {};
  let countries = {};
  function getMyIsolatedCountry() {
    if (data) {
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
      console.log(agents);
      console.dir(countries);
    }
  }
  getMyIsolatedCountry(data);
  return <div className="App">

    
  </div>;
}

export default App;
