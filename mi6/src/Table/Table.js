import React, { useState } from "react";
import "./Table.css";
import { getMax, getMin } from "./../utils/utils";
export default function Table({ data, addresses }) {
  let maxAdd = getMax(addresses);
  let minAdd = getMin(addresses);

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
              } 
              ${dataItem.address == minAdd ? "green" : ""}`}
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
