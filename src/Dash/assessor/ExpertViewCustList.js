import React, { useState, useEffect} from 'react';
import {Button, Container} from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact';
import {Link} from 'react-router-dom'
import {COLUMNS} from "./columns.js";
import * as queries from '../../graphql/queries'
import API from '@aws-amplify/api';

function ExpertViewCustList(props){
  // const {userId} = props;
 const [checkbox1, setCheckbox1] = useState('');
 const [datatable, setDatatable] = useState('');
 const [hasData, setHasData] = useState(false);
 const [disabled, setDisabled] = useState(true);

 const showLogs2 = (e) => {
  setDisabled(false);   
  setCheckbox1(e);
 };
 var completed;

    useEffect(() => {
         listUsers().then(listOfUsers => {
          let users = [];
          
          for(let i in  listOfUsers.data.listUsers.items){

            if( listOfUsers.data.listUsers.items[i].userType === "Assessee"){
              completed =  listOfUsers.data.listUsers.items[i];
              console.log("This is the approved ",  listOfUsers.data.listUsers.items[i])
              console.log("This is the approved completed ",  completed)
              users.push(completed)
              
            }
           }
          let data = {
                 columns: COLUMNS,
                 rows: users
             }
             setDatatable(data);
         }).finally(()=>{
             setHasData(true);
         });
       },[])

  async function listUsers() {
      try {
           var userslist = await API.graphql({query: queries.listUsers});
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
          showLogs2(e)
          ;}}
          />
    </div>
    <Link to= {{pathname: "/dash/assess" ,state: checkbox1}}><Button disabled={disabled} className= "ml-5 mb-5"  type="submit">Assess</Button></Link>
   
    </>)}
    </>
  );}
 
  export default ExpertViewCustList; 