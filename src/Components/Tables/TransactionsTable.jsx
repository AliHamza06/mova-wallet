import React from "react";

const transactionsData = [
  {
    name: "Bangkok Bank",
    description: "Withdraw to bank account",
    username: "Shijrahassan@",
    date: "10 Mar 2022",
    status: "In Progress",
    transactionFee: "-$20",
    amount: "-$520",
    progressColor: "#49C96D",
  },
  {
    name: "Bangkok Bank",
    description: "Withdraw to bank account",
    username: "Shijrahassan@",
    date: "10 Mar 2022",
    status: "Completed",
    transactionFee: "-$20",
    amount: "-$520",
    progressColor: "#49C96D",
  },
  {
    name: "Bangkok Bank",
    description: "Withdraw to bank account",
    username: "Shijrahassan@",
    date: "10 Mar 2022",
    status: "Cancelled",
    transactionFee: "-$20",
    amount: "-$520",
    progressColor: "#49C96D",
  },
  {
    name: "Bangkok Bank",
    description: "Withdraw to bank account",
    username: "Shijrahassan@",
    date: "10 Mar 2022",
    status: "In Progress",
    transactionFee: "-$20",
    amount: "-$520",
    progressColor: "#49C96D",
  },
  {
    name: "Bangkok Bank",
    description: "Withdraw to bank account",
    username: "Shijrahassan@",
    date: "10 Mar 2022",
    status: "Pending",
    transactionFee: "-$20",
    amount: "-$520",
    progressColor: "#49C96D",
  },
  {
    name: "Bangkok Bank",
    description: "Withdraw to bank account",
    username: "Shijrahassan@",
    date: "10 Mar 2022",
    status: "In Progress",
    transactionFee: "-$20",
    amount: "-$520",
    progressColor: "#49C96D",
  },
];

export default function TransactionsTable() {
  return (
    <>
      <table className="table tableMainDiv01">
        <thead className="theadDiv01">
          <tr className="theadTr01">
            <th scope="col" className="theadTr01Th01">
             <p className="bussinesNameP01">Name/ Business</p>
            </th>
            <th scope="col"><p className="userNameCol">Username</p></th>
            <th scope="col"><p className="dateCol">Date</p></th>
            <th scope="col"><p className="statusCol">Status</p></th>
            <th scope="col"><p className="transactionCol">Transaction Fee</p></th>
            <th scope="col" className="theadTr01Th04">
              <p className="amountCol">Amount</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {transactionsData.map((transaction, index) => (
            <tr key={index} className="tbodyTr02">
              <td className="nameTd01">
                <div className="businesTxtDiv01">
                  <h2 className="tableTitle01">{transaction.name}</h2>
                  <p>{transaction.description}</p>
                </div>
              </td>
              <td className="userNameTd01">
                <div className="businesTxtDiv01">
                  <p>{transaction.username}</p>
                </div>
              </td>
              <td>
                <div className="businesTxtDiv01">
                  <h2 className="tableTitle01">{transaction.date}</h2>
                  <p>{transaction.date}</p>
                </div>
              </td>
              <td>
                <div className="businesTxtDiv01">
                  <p
                    className={`progressTxt01 ${
                      transaction.status === "In Progress"
                        ? "progressTxtYellow02"
                        : transaction.status === "Completed"
                        ? "progressTxtGreen02"
                        : transaction.status === "Cancelled"
                        ? "progressTxtRed03"
                        : transaction.status === "Pending"
                        ? "progressTxtPurple04"
                        : ""
                    }`}
                  >
                    {transaction.status}
                  </p>
                </div>
              </td>
              <td>
                <div className="businesTxtDiv01">
                  <h2 className="tableTitle01">{transaction.transactionFee}</h2>
                </div>
              </td>
              <td className="valueTd01">
                <div className="businesTxtDiv01">
                  <h2 className="tableTitle01">{transaction.amount}</h2>
                  <p>$3.0</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
