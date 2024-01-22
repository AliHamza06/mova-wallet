import React from "react";

export default function DetailTable() {
  const tableArray = [
    {
      name01: "Etherem",
      amount01: "$3,245.03",
      rate01: "0.12543 ETH",
      value01: "-13.40%",
    },
    {
      name01: "Etherem",
      amount01: "$3,245.03",
      rate01: "0.12543 ETH",
      value01: "-13.40%",
    },
    {
      name01: "Etherem",
      amount01: "$3,245.03",
      rate01: "0.12543 ETH",
      value01: "-13.40%",
    },
    {
      name01: "Etherem",
      amount01: "$3,245.03",
      rate01: "0.12543 ETH",
      value01: "-13.40%",
    },
  ];

  return (
    <>
      <table className="table tableMainDiv01">
        <thead className="theadDiv01">
          <tr className="theadTr01">
            <th scope="col" className="theadTr01Th01">
              <p className="bussinesNameP01">Name/ Business</p>
            </th>
            <th scope="col">
            <p className="amountNameP01">Amount</p>
            </th>
            <th scope="col">
            <p className="rateNameP01">Rate</p>
            </th>
            <th scope="col" className="theadTr01Th04">
            <p className="valueNameP01">Value</p>
              
            </th>
          </tr>
        </thead>
        <tbody>
          {tableArray.map((tableData, index) => (
            <tr key={index} className="tbodyTr01">
              <td className="nameTd01">{tableData.name01}</td>
              <td className="ammoutTd01">{tableData.amount01}</td>
              <td className="rateTd01">{tableData.rate01}</td>
              <td className="valueTd01">{tableData.value01}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
