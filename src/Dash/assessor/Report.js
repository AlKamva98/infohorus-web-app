import React, { useState, useEffect} from 'react';
import {Button, Container} from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact';
import {Link} from 'react-router-dom'
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
         listReports().then(listOfReports => {
           console.log(listOfReports)  
          let data = {
                 columns: COLUMNS,
                 rows: listOfReports.data.listUsers.items
             }
             setDatatable(data);
         }).finally(()=>{
             setHasData(true);
         });
       },[])

  async function listReport() {
      try {
           var reports = await API.graphql({query: queries.listUsers});
          console.log(reports.data.listUsers.items);
          return reports;
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
    <Link to= {{pathname: "/dash/assess" ,state: checkbox1}}><Button className= "ml-5 mb-5"  type="submit">Assess</Button></Link>
   <div>
      {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1.first_name)}</p>}
    </div>
    </>)}
    </>
  );}
 
  export default Report; 