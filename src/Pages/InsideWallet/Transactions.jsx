import React from 'react'
import SelectComponent from "../../Components/TableTopSelector/SelectComponent";
import TransactionsTable from "../../Components/Tables/TransactionsTable";


export default function Transactions() {
  return (
    <>
      {/* Transaction Details Section  */}
      <div className="transactionSection mt-3">
        <div className="transactionTxtMainDiv d-flex justify-content-end">
          <div>
            <SelectComponent />
          </div>
        </div>
        <div className="portFolioTableDiv01">
          <TransactionsTable/>
        </div>
      </div>
    </>
  )
}
