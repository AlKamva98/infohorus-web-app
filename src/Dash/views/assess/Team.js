import React, { useState, useRef} from 'react';
import {Button, Container} from 'react-bootstrap'
import { MDBDataTable } from 'mdbreact';
import {Link} from 'react-router-dom'
import * as mutations from '../../../graphql/mutations'
import API from 'aws-amplify';
import {
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
} from '@coreui/react'



export const Team = (props) => {
  const { deleteMember,updateMember,teamTable,handleMemberAdd} = props;
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
  
  const handleMemberUpdate = async (data)=>{
    if(checkbox1){
        var updatedUser= checkbox1;
        console.log("This the user being updated", updatedUser)
        updatedUser.first_name= data.fname;
        updatedUser.last_name= data.lname;
        console.log(updatedUser.last_name)
        console.log(data.lname)
        updatedUser.job_title= data.jobtitle;
        updatedUser.email = data.email;
        updatedUser = omit(updatedUser,"_lastChangedAt");
        updatedUser = omit(updatedUser,"createdAt");
        updatedUser = omit(updatedUser,"updatedAt");
        updatedUser = omit(updatedUser,"checked");
        updatedUser = omit(updatedUser, "_deleted");
        updatedUser = omit(updatedUser, "checkbox");
        updateMember(updatedUser)
        
      }
  }
  const handleMemberDelete = async ()=>{
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

  function omit(obj, ...props) {
    const result = { ...obj };
    props.forEach(function(prop) {
      delete result[prop];
    });
    return result;
  }

  return (<>
    <Container>
 <h4 className="text-center display-4">Meet The team</h4>
 <span>Click on the customer to assign tasks</span>
 </Container>
    <div className="py-3">
      <MDBDataTable
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
    <Link to={{pathname:"/dash/employees", addMember:handleMemberAdd}}><Button className= "mb-5 bg-green-500 hover:bg-green-300 focus:bg-green-400 active:bg-green-400"  type="button">Add new +</Button></Link>

  <Button onClick={  async ()=> {handleMemberDelete()}
} className= "ml-5 mb-5 bg-red-600 hover:bg-red-400 focus:bg-red-500 active:bg-red-500"  type="submit">Remove -</Button>
  <Link to= {{pathname: "/dash/update" ,updateMember: handleMemberUpdate}}><Button className= "ml-5 mb-5 bg-yellow-500 hover:bg-yellow-300 focus:bg-yellow-400 active:bg-yellow-400"  type="submit">Update</Button></Link>
    <Link to= {{pathname: "/dash/theme" ,state: checkbox1}}><Button className= "ml-5 mb-5"  type="submit">Assign</Button></Link>
 </div>
   {/* <div>
      {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1.first_name)}</p>}
    </div> */}

    <CToaster ref={rtoaster} push={toast} placement="top-end" />
    </>)

}


  