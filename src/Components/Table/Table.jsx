import React from "react";
import "./Table.css";

const Table = ({ data }) => {
    // console.log(data.header.length)
  return (
    <table className="custom-table">
      <thead>
        <tr className="header-row">
          {data.header.map((value, index) => (
            <th 
              key={index} 
              className={index === 0 ? "first-column" : "other-columns"}
            >
              {value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={cellIndex === 0 ? "first-column" : "other-columns"}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
