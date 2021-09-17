import React, { useState, useEffect} from 'react';
import {Button, Container} from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact';
import {Link} from 'react-router-dom'
import {COLUMNS} from "../../assessor/columns";
import * as queries from '../../../graphql/queries'
import * as mutations from '../../../graphql/mutations'
import API from '@aws-amplify/api';

export const Team = () => {
  let d;
  const [checkbox1, setCheckbox1] = useState('');
 const [datatable, setDatatable] = useState('');
 const [hasData, setHasData] = useState(false);
 const showLogs2 = (e) => {
     console.log('SHOWLOGS:::', e);
     setCheckbox1(e);
 };
  var completed;
    useEffect(() => {
         listUsers().then(listOfUsers => {
             let users = [];
          
          for(let i in  listOfUsers.data.listUsers.items){
            if( listOfUsers.data.listUsers.items[i].userType === "Team member"){
              completed =  listOfUsers.data.listUsers.items[i];
              console.log("This is the approved ",  listOfUsers.data.listUsers.items[i])
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
        async function deleteUser(data){
          try{
            if(data){
            d = {id: data.id}
          await API.graphql({query: mutations.deleteUser, variables: {input: d}});}
          }catch(err){
            console.log("Delete error", err )
          }
       }

  async function listUsers() {
      try {
        var userslist = await API.graphql({query: queries.listUsers});
        console.log(userslist.data.listUsers.items);
        return userslist;
      } catch (err) {
          console.log("Error:>> ", err);
      }
  }
  async function deleteUser(checkbox) {
      try {
       await API.graphql({query: mutations.deleteUser ,variables:{input: checkbox.id}});
        
      } catch (err) {
          console.log("Error:>> ", err);
      }
  }

  return (<>
    {hasData  && (<><Container>
 <h4 className="text-center display-4">Meet The team</h4>
 <span>Click on the customer to assign tasks</span>
 <div>
    <Link to="/dash/employees"><Button className= "mb-5 bg-green-500 hover:bg-green-300 focus:bg-green-400 active:bg-green-400"  type="submit">Add new +</Button></Link>

  <Button onClick={deleteUser(checkbox1)} className= "ml-5 mb-5 bg-red-600 hover:bg-red-400 focus:bg-red-500 active:bg-red-500"  type="submit">Remove -</Button>
  <Link to= {{pathname: "/dash/update" ,userData: checkbox1}}><Button className= "ml-5 mb-5 bg-yellow-500 hover:bg-yellow-300 focus:bg-yellow-400 active:bg-yellow-400"  type="submit">Update</Button></Link>
 </div>
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
    <Link to= {{pathname: "/dash/schedule" ,state: checkbox1}}><Button className= "ml-5 mb-5"  type="submit">Assign</Button></Link>
   <div>
      {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1.first_name)}</p>}
    </div>
    </>)}
    </>)

}


  