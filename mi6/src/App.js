import React, { useEffect, useState } from "react";
import "./App.css";
import { data } from "./mockData";
import Table from "./Table/Table";
import {
  distanceValue,
  getDistanceData,
  getMax,
  SetTheAgentsAndCountries
} from "./utils/utils";

function App() {
  let agents = {};
  const [mostIsolated, setMostIsolated] = useState({});
  const [countries, setCountries] = useState({});
  const [downingSTAddData, setdowningSTAddData] = useState({});
  const [addresses, setAddresses] = useState([]);
  const [addsPlusCords, setAddsPlusCords] = useState([]);
  useEffect(() => {
    if (data) {
      SetTheAddData();
      data.sort((a, b) => new Date(a.date) - new Date(b.date));
      SetTheAgentsAndCountries(data, agents, countries);
      setCountries(countries);
      setMostIsolated(getMax(countries));
    }
  }, []);

  useEffect(() => {
    const temp = [];
    addresses.forEach(element => {
      let distance = distanceValue(
        downingSTAddData.lat,
        downingSTAddData.lon,
        element.lat,
        element.lon
      );
      temp.push({ address: element.address, distance: distance });
    });
    temp.sort((a, b) => new Number(a.distance) - new Number(b.distance));
    setAddsPlusCords(temp);
  }, [downingSTAddData]);

  function SetTheAddData() {
    data.forEach((element, index) => {
      setTimeout(async () => {
        const t = await getDistanceData(element.address);
        t["address"] = element.address;
        addresses.push(t);
        setAddresses(addresses);
      }, 800 * index);
    });
    setTimeout(async () => {
      const t = await getDistanceData("10 Downing st. London");
      setdowningSTAddData(t);
    }, 805 * data.length);
  }

  return (
    <div className="App">
      <h1>
        the most isolated country is {mostIsolated[0]} with{"  "}
        {countries[mostIsolated]} agents
      </h1>
      <Table data={data} addsPlusCords={addsPlusCords} />
      <h4>*wait for the data i use a very slow api for it</h4>
      <h4>you can watch the data comes on chrome dev tools console</h4>
    </div>
  );
}

export default App;
