import React, {useMemo, useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import {Link} from 'react-router-dom'
import {useTable} from 'react-table';
import { COLUMNS } from "./columns.js";
import {Container} from 'react-bootstrap'
import { MOCK_DATA } from "./MOCK_DATA.js";
import "./table.css"

export const ExpertViewCustList = () => {

 const [tableState, setTableState] = useState(MOCK_DATA);
 const columns = useMemo(()=> COLUMNS,[]);
 const data = useMemo(()=> MOCK_DATA,[]);
const tableInstance = useTable({columns: columns, data: data});
 const {getTableProps, getTableBodyProps, headerGroups,rows, prepareRow} = tableInstance;

function getClicked(cell){
  var celldata = String(cell);
  console.log("The clicked username is: "+ celldata)
}

function isEmail(cell){
  var celldata= String(cell);
  //console.log("This is the cell data: "+celldata);
  console.log(typeof celldata);
  if(celldata.includes("@")){
    return true;
  }else{
  return false;
  }
}

 return (
   <>
<Container>
<h4 className="text-center display-4">Customer list</h4>
<span>Click on the customer to view answers</span>
</Container>
  <table {...getTableProps()}>
<thead >
 {headerGroups.map((headerGroup)=>(
 <tr {...headerGroup.getHeaderGroupProps()}>
  {
   headerGroup.headers.map(column => (
    <th {...column.getHeaderProps({
                  style: { minWidth: column.minWidth, width: column.width },
                })}>
{column.render('Header')}
    </th>
  
   ))
  }
 </tr>

 ))}
</thead>
<tbody {...getTableBodyProps}>
 {
   rows.map(row => {
   prepareRow(row)
   return (
 <tr {...row.getRowProps()}>
  {row.cells.map((cell) => {
   return(
    <td {...cell.getCellProps({
                      style: {
                        minWidth: cell.column.minWidth,
                        width: cell.column.width,
                      },
                    })}>{
    isEmail(cell.value) ? <Link  onClick={getClicked(cell.value)}>{cell.render('Cell')}</Link>:cell.render('Cell')}</td>)})}
 </tr>)})}
</tbody>
  </table>
  </>)
  }
/*
renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, name, age, email } = student //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{age}</td>
               <td>{email}</td>
            </tr>
         )
      })
   }
*/