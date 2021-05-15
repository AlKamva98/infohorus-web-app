import React, { useState, useEffect, useMemo} from 'react';
//import {useTable} from 'react-table';
import {Button, Container} from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact';
import {Link} from 'react-router-dom'
import {COLUMNS} from "./columns.js";
import * as queries from '../graphql/queries'
import {MOCK_DATA as DATA } from "./MOCK_DATA.js";
import { AnsCOLUMNS } from "./anscolumns.js";
///import "./table.css"
import API, { graphqlOperation } from '@aws-amplify/api';
import { graphql } from '@apollo/react-hoc';

export const ExpertViewCustList = () => {
  const initialFormState = { userId:"", pageType:"custList"};
  const [formState, updateFormState] = useState(initialFormState);
  var data = {
      columns: COLUMNS,
      rows: DATA   };
 const [checkbox1, setCheckbox1] = useState('');
 const [datatable, setDatatable] = useState(data);       
        const showLogs2 = (e) => {
          setCheckbox1(e);
        };
const {pageType} = formState;
const [cust, setCust] = useState();
const [userQuestionaireId, setUserQuestionaireId] = useState("");
const [userAnsbyQnaire, setUserAnsbyQnaire] = useState("");
// const columns = useMemo(()=> AnsCOLUMNS,[]);
// const ansdata = useMemo(()=> userAnsbyQnaire,[]);
// const tableInstance = useTable({columns: columns, data: ansdata});
// const { getTableProps, getTableBodyProps, headerGroups,rows, prepareRow} = tableInstance;


async function getAnswers(userID){
  try{
  var  questionnaires = await API.graphql(graphqlOperation(queries.listQuestionnaires));
  questionnaires.data.listQuestionnaires.items.map(function(qnaire){
    if (qnaire.userId === userID) {
      setUserQuestionaireId(qnaire.questionnareId);
    }
  })    
  var answers = await API.graphql(graphqlOperation(queries.listAnswers))
answers.data.listAnswers.items.map( function (ans){
 if(ans.questionnareId === userQuestionaireId){
   setUserAnsbyQnaire(answers) 
  }
 })
 }catch(err){

}}
 function viewAnswers(){
  const {userId} = formState;
   getAnswers(userId)
   updateFormState(()=>({...formState, pageType: "assess"}))

 }
       useEffect(() => {
         listUsers()
         //setDatatable(data)
       },[])

  async function listUsers(){
    try{
      var userslist = await API.graphql({query: queries.listUsers});
      console.log(userslist.data.listUsers.items);
      data={columns: COLUMNS,
            rows: userslist.data.listUsers.items  }
     //setDatatable(data);
    }catch(err){
        console.log("Error:>> ",err);
      }
    }
    
    
      
  return (<>
    {pageType === "custList" && (<><Container>
<h4 className="text-center display-4">Customer list</h4>
<span>Click on the customer to view answers</span>
</Container>
    <div className="py-3">
      <MDBDataTableV5
        hover
        data={datatable}
        autoWidth
        checkbox
        headCheckboxID='id2'
        bodyCheckboxID='checkboxes2'
        getValueCheckBox={(e) => {
          showLogs2(e);}}
          />
    </div>
    <Link to= {{pathname: "/expertview/assess" ,state: checkbox1}}><Button className= "ml-5 mb-5" onSubmit={viewAnswers} type="submit">View Answers</Button></Link>
    <div>
      {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}
    </div>
    </>)}
    {/* {pageType === "assess" && (
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
  </>)} */}
    </>
  );
 }
 