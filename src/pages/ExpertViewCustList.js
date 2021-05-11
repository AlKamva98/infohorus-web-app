import React, { useState, useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import {Link} from 'react-router-dom'
import {COLUMNS} from "./columns.js";
import {Button, Container} from 'react-bootstrap'
import * as queries from '../graphql/queries'
import {MOCK_DATA as DATA } from "./MOCK_DATA.js";
///import "./table.css"
import API from '@aws-amplify/api';

export const ExpertViewCustList = () => {
  var data = {
      columns: COLUMNS,
      rows: DATA   };
 const [checkbox1, setCheckbox1] = useState('');
 const [datatable, setDatatable] = useState(data);       
        const showLogs2 = (e) => {
          setCheckbox1(e);
        };
       useEffect(() => {
         listUsers()
       },[])

  async function listUsers(){
    try{
      var userslist = await API.graphql({query: queries.listUsers});
      console.log(userslist.data.listUsers.items);
      data={columns: COLUMNS,
            rows: userslist.data.listUsers.items  
      }
      //setDatatable(data);
    }catch(err){
        console.log("Error:>> ",err);
      }
    }
    
    
      
  return (<>
    <Container>
<h4 className="text-center display-4">Customer list</h4>
<span>Click on the customer to view answers</span>
</Container>
    <MDBDataTableV5
        hover
        data={datatable}
        checkbox
        headCheckboxID='id2'
        bodyCheckboxID='checkboxes2'
        getValueCheckBox={(e) => {
          showLogs2(e);}}
    />
    <Link><Button className= "ml-5 mb-5" type="submit">View Answers</Button></Link>
    <div>
      {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}
    </div>
    </>
  );
 }
 