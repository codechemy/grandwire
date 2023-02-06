import React, { useState } from "react";
import uploadicon from "../../../assets/img/upload-solid.svg"
const ServicesTable = () => {
  const [selectAll, setSelectAll] = useState(false)
  const [tableData, setTableData] = useState(
    [{
    checked: false,
    code: '10200000',
    services: 'Home Car',
    documents: 'Lorem Ipsum',
    credReq: 'No',
    credFees: '$2.31',
    action: uploadicon
  },
  {
    checked: false,
    code: '10200000',
    services: 'Home Car',
    documents: 'Lorem Ipsum',
    credReq: 'No',
    credFees: '$2.31',
    action: uploadicon
  },
  {
    checked: false,
    code: '10200000',
    services: 'Home Car',
    documents: 'Lorem Ipsum',
    credReq: 'No',
    credFees: '$2.31',
    action: uploadicon
  }, {
    checked: false,
    code: '10200000',
    services: 'Home Car',
    documents: 'Lorem Ipsum',
    credReq: 'No',
    credFees: '$2.31',
    action: uploadicon
  }, {
    checked: false,
    code: '10200000',
    services: 'Home Car',
    documents: 'Lorem Ipsum',
    credReq: 'No',
    credFees: '$2.31',
    action: uploadicon
  }])

  const tableHeader = [
    "Code",
    "Services",
    "Documents",
    "Cred Reqd",
    "Cred Fees",
    "Action"
  ]
  return (
    <div className='banner-wrapper'>
       <h4>Services in Channel</h4>
      <div className="overflow-auto">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="selectall" id="selectall" checked={selectAll} onClick={(e: any) => {
                setSelectAll(e.target.checked)
                let dataValue = tableData.map(value => {
                  value.checked = e.target.checked
                  return value
                })
                setTableData([...dataValue])
              }} />
            </th>
            {tableHeader.map((value) => {
              return <th>{value}</th>
            })}

          </tr>
        </thead>
        <tbody>
          {tableData.map((value, index) => {
            return <tr>
              <th>
                <input type="checkbox" name="selectall" id="selectall" checked={value.checked} onClick={(e: any) => {
                  tableData[index].checked = e.target.checked
                  setTableData([...tableData])
                }} />
              </th>
              <td>{value.code}</td>
              <td><strong>{value.services}</strong></td>
              <td>{value.documents}</td>
              <td>{value.credReq}</td>
              <td>{value.credFees}</td>
              <td><img src={value.action} alt="uploadicon" width={16} /></td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
    
    </div>
  );
};

export default ServicesTable;
