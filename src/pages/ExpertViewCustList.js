import React, {useMemo} from 'react';
import {useTable} from 'react-table';
import { COLUMNS } from "./columns.js";
import {Container} from 'react-bootstrap'
import { MOCK_DATA } from "./MOCK_DATA.js";
import "./table.css"

export const ExpertViewCustList = () => {

 const columns = useMemo(()=> COLUMNS,[]);
 const data = useMemo(()=> MOCK_DATA,[]);
const tableInstance = useTable({columns: columns, data: data});
 const { getTableProps, getTableBodyProps, headerGroups,rows, prepareRow} = tableInstance;

 return (
   <>
<Container>
<h4 className="text-center display-4">Customer list</h4>
<span>Click on the customer to view his answers</span>
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
                    })}>{cell.render('Cell')}</td>
    
   )
  })}
 </tr>

   )
  })
 }
</tbody>
  </table>
  </>
 )
}
