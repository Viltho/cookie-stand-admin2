import React, { useState, useEffect } from "react";

const TableRowCalc = ({ object, name, summation }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    calculateObject(object);
    console.log(list);
  }, []);

  const calculateObject = (listOfLists) => {
    const sums = Array.from({ length: 14 }, () => 0);
    for (const list of listOfLists) {
      for (let i = 0; i < 15 && i < list.length; i++) {
        sums[i] += list[i];
      }
    }
    setList(sums);
  };

  return (
    <tr className="border border-black">
      <td>{name}</td>
      {list.map((item, index) => (
        <td key={index} className="border border-black px-1">
          {item}
        </td>
      ))}
      <td className="font-bold">{summation(list)}</td>
    </tr>
  );
};

export default TableRowCalc;
