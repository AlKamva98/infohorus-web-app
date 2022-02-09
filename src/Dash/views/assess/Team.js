import React, { useState, useRef} from 'react';
import {Button, Container} from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact';
import {Link} from 'react-router-dom'
import * as mutations from '../../../graphql/mutations'
import API from '@aws-amplify/api';
import {
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
} from '@coreui/react'



export const Team = (props) => {
  const { deleteMember,teamTable} = props;
  const [checkbox1, setCheckbox1] = useState('');
  const rtoaster = useRef()
 const [toast, addToast] = useState(0)
 const showLogs2 = (e) => {
     setCheckbox1(e);
    };
 const removeToast = (
  <CToast autohide={false} color="danger" className="text-white align-items-center">
  <div className="d-flex">
    <CToastBody>Team member removed</CToastBody>
    <CToastClose className="me-2 m-auto" white />
  </div>
  </CToast>
  )

  const handleDelete = async ()=>{
    if(checkbox1){
    try {
      const userDetails = {
      id: checkbox1.id,
      _version: checkbox1._version
      };
      console.log(`This the id of the item I want to delete`, userDetails);
     await API.graphql({query: mutations.deleteTeam ,variables:{input: userDetails}});
     addToast(removeToast);
     deleteMember(checkbox1.id) 
    } catch (err) {
        console.log("Error:>> ", err);
    }}
  }

  // async function deleteUser(checkbox) {
  //       try {
  //       const userDetails = {
  //       id: checkbox.id,
  //       _version: checkbox._version
  //       };
  //       console.log(`This the id of the item I want to delete`, userDetails);
  //      await API.graphql({query: mutations.deleteUser ,variables:{input: userDetails}});
  //      addToast(removeToast); 
  //     } catch (err) {
  //         console.log("Error:>> ", err);
  //     }
  // }

  return (<>
    <Container>
 <h4 className="text-center display-4">Meet The team</h4>
 <span>Click on the customer to assign tasks</span>
 </Container>
    <div className="py-3">
      <MDBDataTableV5
        hover
        data={teamTable}
        autoWidth
        checkbox
        headCheckboxID='id2'
        bodyCheckboxID='checkboxes2'
        getValueCheckBox={(e) => {
          showLogs2(e);}}
          />
    </div>
 <div>
    <Link to="/dash/employees"><Button className= "mb-5 bg-green-500 hover:bg-green-300 focus:bg-green-400 active:bg-green-400"  type="button">Add new +</Button></Link>

  <Button onClick={  async ()=> {handleDelete()}
} className= "ml-5 mb-5 bg-red-600 hover:bg-red-400 focus:bg-red-500 active:bg-red-500"  type="submit">Remove -</Button>
  <Link to= {{pathname: "/dash/update" ,userData: checkbox1}}><Button className= "ml-5 mb-5 bg-yellow-500 hover:bg-yellow-300 focus:bg-yellow-400 active:bg-yellow-400"  type="submit">Update</Button></Link>
    <Link to= {{pathname: "/dash/theme" ,state: checkbox1}}><Button className= "ml-5 mb-5"  type="submit">Assign</Button></Link>
 </div>
   <div>
      {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1.first_name)}</p>}
    </div>

    <CToaster ref={rtoaster} push={toast} placement="top-end" />
    </>)

}


  