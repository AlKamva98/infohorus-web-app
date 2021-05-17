import React, { useState, useEffect, useMemo} from 'react';
//import {useTable} from 'react-table';
import {Button, Container} from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact';
import {Link} from 'react-router-dom'
import {COLUMNS} from "./columns.js";
import * as queries from '../graphql/queries'
import {MOCK_DATA as DATA } from "./MOCK_DATA.js";
///import "./table.css"
import API, { graphqlOperation } from '@aws-amplify/api';

export const ExpertViewCustList = () => {
 const [checkbox1, setCheckbox1] = useState('');
 const [datatable, setDatatable] = useState('');
 const [cust, setCust] = useState();
 const [userQuestionaireId, setUserQuestionaireId] = useState("");
 const [userAnsbyQnaire, setUserAnsbyQnaire] = useState("");
 const [hasData, setHasData] = useState(false);
 const showLogs2 = (e) => {
     console.log('SHOWLOGS:::', e);
     setCheckbox1(e);
 };
 
    useEffect(() => {
         listUsers().then(listOfUsers => {
            let data = {
                 columns: COLUMNS,
                 rows: listOfUsers.data.listUsers.items
             }
             setDatatable(data);
         }).finally(()=>{
             setHasData(true);
         });
       },[])

  async function listUsers() {
      try {
          var userslist = await API.graphql({query: queries.listUsers});
          console.log(userslist.data.listUsers.items);
          return userslist;
      } catch (err) {
          console.log("Error:>> ", err);
      }
  }

  return (<>
    {hasData  && (<><Container>
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
    <Link to= {{pathname: "/expertview/assess" ,state: checkbox1}}><Button className= "ml-5 mb-5"  type="submit">View Answers</Button></Link>
   <div>
      {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}
    </div>
    </>)}
    </>
  );}
  //  async function getAnswers(userID){
  //    try{
  //    var  questionnaires = await API.graphql(graphqlOperation(queries.listQuestionnaires));
  //    questionnaires.data.listQuestionnaires.items.map(function(qnaire){
  //      if (qnaire.userId === userID) {
  //        setUserQuestionaireId(qnaire.questionnareId);
  //      }
  //    })    
  //    var answers = await API.graphql(graphqlOperation(queries.listAnswers))
  //  answers.data.listAnswers.items.map( function (ans){
  //   if(ans.questionnareId === userQuestionaireId){
  //     setUserAnsbyQnaire(answers) 
  //    }
  //   })
  //   }catch(err){
   
  //  }}
   
 