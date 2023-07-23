import React from "react";
import { array, object, object2 } from "@/utils/Data";
import TableRow from "./TableRow";
import TableRowCalc from "./TableRowCalc";

const ReportTable = () => {
  const summation = (array) =>{
    let  sum=0
    array.forEach(element => {
      sum += element
    })
    return sum
  }
  return (
    <table className="w-1/2 mx-auto my-8 text-2xl text-center">
      <thead>
        <tr>
          <th className="border border-black">Location</th>
          {array.map((item) => (
            <th className="border border-black px-1">{item}</th>
          ))}
          <th className="border border-black">Totals</th>
        </tr>
      </thead>
      <tbody>
        <TableRow object={object.Calexico} name={"Calexico"} summation={summation}/>
        <TableRow object={object.Barcelona} name={"Barcelona"} summation={summation}/>
        <TableRow object={object.Vancouver} name={"Vancouver"} summation={summation}/>
        <TableRow object={object.Milano} name={"Milano"} summation={summation}/>
        <TableRow object={object.Detroit} name={"Detroit"} summation={summation}/>
        <TableRow object={object.AddisAbaba} name={"Addis Ababa"} summation={summation}/>
        <TableRow object={object.Dublin} name={"Dublin"} summation={summation}/>
        <TableRow object={object.Tacoma} name={"Tacoma"} summation={summation}/>
        <TableRowCalc object={object2} name={"Totals"} summation={summation}/>
      </tbody>
    </table>
  );
};

export default ReportTable;
