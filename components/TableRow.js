import React from "react";

const TableRow = ({object, summation, name}) => {
  return (
    <tr className="border border-black">
      <td>{name}</td>
      {object.map((item) => (
        <td className="border border-black px-1">{item}</td>
      ))}
      <td className="font-bold">{summation(object)}</td>
    </tr>
  );
};

export default TableRow;
