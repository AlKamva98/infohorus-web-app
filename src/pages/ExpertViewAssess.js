import React, {useMemo} from 'react';
import {useTable} from 'react-table';
import { AnsCOLUMNS } from "./anscolumns.js";
import {Button, Container} from 'react-bootstrap'
import { MOCK_DATA } from "./MOCK_DATA.js";
import "./table.css"

export const ExpertViewAssess = (props) => {
 const columns = useMemo(()=> AnsCOLUMNS,[]);
 const data = useMemo(()=> MOCK_DATA,[]);
const tableInstance = useTable({columns: columns, data: data});
 const { getTableProps, getTableBodyProps, headerGroups,rows, prepareRow} = tableInstance;


async function getQuestionnaire(userID){

}

async function getAnswersbyQuestionnaire(){
  
}


 return (
   <>
<Container>
<h4 className="text-center display-4">Customer Answers</h4>
<span>Click on download to get .pdf/.xls file of the  </span>
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
 </tr>))}
</thead>
<tbody {...getTableBodyProps}>
 {rows.map(row => {
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
                    })}>{cell.render('Cell')}</td>)
  })}
 </tr>
   )})}
</tbody>
  </table>
  <Button>Download</Button>
  </>)}