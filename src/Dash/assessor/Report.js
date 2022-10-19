import React, { useState, useEffect} from 'react';
import {Button, Container} from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact';
import {Link, Redirect} from 'react-router-dom'
import {COLUMNS} from "./columns.js";
import * as queries from '../../graphql/queries'
import API from '@aws-amplify/api';

function Report(){
 const [checkbox1, setCheckbox1] = useState('');
 const [datatable, setDatatable] = useState('');
 const [hasData, setHasData] = useState(false);
 const showLogs2 = (e) => {
     console.log('SHOWLOGS:::', e);
     setCheckbox1(e);
 };
 useEffect(() => {
   
   listUsers().then(listOfUsers => {
     let users = [];
     var completed;
          
          for(let i in  listOfUsers.data.listUsers.items){
            if( listOfUsers.data.listUsers.items[i].userType === "Assessee"){
              completed =  listOfUsers.data.listUsers.items[i];
              console.log("This is the approved ",  listOfUsers.data.listUsers.items[i])
              users.push( completed);
              
            }
           }
          let data = {
                 columns: COLUMNS,
                 rows: users
             }
             setDatatable(data);
         })
       },[])

       useEffect(()=>{
          console.log("Hasdata", datatable)
          if(datatable){
            setHasData(true);
        }},[datatable])

async function listUsers() {
      try {
           var userslist = await API.graphql({query: queries.listUsers});
          return userslist;
      } catch (err) {
          console.log("Error:>> ", err);
      }
  }
  return (<>
    {hasData  ? (<><Container>
<h4 className="text-center display-4">Reports</h4>
<span></span>
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
    <Link to= {{pathname: "/dash/assess" ,state: checkbox1}}><Button className= "ml-5 mb-5"  type="submit">New Report
  </Button></Link>
   <div>
      {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1.first_name)}</p>}
    </div>
    </>):<Redirect to="/500"/>}
    </>
  );}
 
  export default Report; 