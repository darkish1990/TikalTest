import React from "react";
import "./Table.css";
export default function Table({ data }) {
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
            <div className="table-body-container" key={dataItem.date}>
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
