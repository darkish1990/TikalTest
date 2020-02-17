import React, { useState, useEffect } from "react";
import "./Table.css";
export default function Table({ data, addsPlusCords }) {
  const [maxAdd, setMaxAdd] = useState();
  const [minAdd, setMinAdd] = useState();
  useEffect(() => {
    if (addsPlusCords > 0) {
      setMaxAdd(addsPlusCords[addsPlusCords.length - 1]);
      setMinAdd(addsPlusCords[0]);
    }
  }, [addsPlusCords]);

  return (
    <>
      <div className="table-container">
        <div className="table-header-container">
          <div className="table-header">Agent ID</div>
          <div className="table-header">Country</div>
          <div className="table-header">Address</div>
          <div className="table-header">Date</div>
        </div>
        {data.map(dataItem => {
          return (
            <div
              className={`table-body-container ${
                dataItem.address == maxAdd ? "red" : ""
              } ${dataItem.address == minAdd ? "green" : ""}${console.log(
                dataItem.address,
                maxAdd,
                minAdd
              )}`}
              key={dataItem.date}
            >
              <div className="table-body">{dataItem.agent}</div>
              <div className="table-body">{dataItem.country}</div>
              <div className="table-body">{dataItem.address}</div>
              <div className="table-body">{dataItem.date}</div>
            </div>
          );
        })}
        <div className="table-footer">{data.length} missions</div>
      </div>
    </>
  );
}
