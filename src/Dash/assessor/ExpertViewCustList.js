import React, { useState, useEffect} from 'react';
import {Button, Container} from 'react-bootstrap'
import { MDBDataTable } from 'mdbreact';
import {useHistory} from 'react-router-dom'
import {COLUMNS} from "./columns.js";
<<<<<<< HEAD:src/Dash/views/assessor/ExpertViewCustList.js
import * as queries from '../../../graphql/queries'
import {API} from 'aws-amplify';
=======
import * as queries from '../../graphql/queries'
import API from '@aws-amplify/api';
>>>>>>> parent of e235f1f (refactoring code):src/Dash/assessor/ExpertViewCustList.js

function ExpertViewCustList(props){
  // const {userId} = props;
 const [checkbox1, setCheckbox1] = useState('');
 const [datatable, setDatatable] = useState('');
 const [hasData, setHasData] = useState(false);
 const [disabled, setDisabled] = useState(true);
 const history = useHistory();
 const showLogs2 = (e) => {
  setDisabled(false);   
  setCheckbox1(e);
 };
 
 useEffect(() => {
   listUsers().then(listOfUsers => {
     let users = [];
     let completed;
          
          for(let i in  listOfUsers.data.listUsers.items){

            if( listOfUsers.data.listUsers.items[i].userType === "Assessee"){
              completed =  listOfUsers.data.listUsers.items[i];
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

       function assess(){
        console.log("This is the selected user", checkbox1);
        history.push("/dash/assess" ,{userId: checkbox1.id})
       }

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
      <MDBDataTable
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
    <Button className= "ml-5 mb-5" disabled={disabled} onClick={assess} type="submit">Assess</Button>  
    </>)}
    </>
  );}
 
  export default ExpertViewCustList; 