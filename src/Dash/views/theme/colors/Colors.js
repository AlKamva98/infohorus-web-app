import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {PopUp} from '../../../../Home/shared/utils/Modal';
import ReviewModal from '../../../../Home/shared/utils/ReviewModal';
import { CRow, CCard, CCardHeader, CCardBody } from '@coreui/react';
import {DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button } from 'react-bootstrap';
import API from '@aws-amplify/api';
import * as queries from '../../../../graphql/queries';
import { updateRecommendations } from 'src/graphql/mutations';
const RecomendationsList = [
  {
    id:"001",
    recNum: "Recomendation 1",
    recDesc:"Train employees on how to deal with ransomware",
    recDuration:"4 days",
    isApproved: true,
    tasks:{
      taskNum:"Task 1",
      taskDesc: "Book venue",
      assignedTo:"Josh Rodgers"
    }
  }
  ,
  {
    id:"002",
    recNum: "Recomendation 2",
    recDesc:"Train employees on how to deal with phishing emails",
    recDuration:"3 days",
    isApproved: false,
    tasks:{
      taskNum:"Task 1",
      taskDesc: "Hire a training company",
      assignedTo:"Jamie O'Connel"
  }}
  ,
  {
    id:"003",
    recNum: "Recomendation 3",
    recDesc:"Improve security protocols",
    recDuration:"2 days",
    isApproved: false,
    tasks:{
      taskNum:"Task 1",
      taskDesc: "Draw up new protocols",
      assignedTo:"Liezelle Sheppard"
  }}
  ,
  {
    id:"004",
    recNum: "Recomendation 4",
    recDesc:"Example",
    recDuration:"3 days",
    isApproved: false,
    tasks:{
      taskNum:"Task 1",
      taskDesc: "Book venue",
      assignedTo:"Jeremie Taylor"
  }
}
  
]

const Colors = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [errModal, setErrModal] = useState(false);
    const errToggle = () => setErrModal(!errModal);
    const [revModal, setRevModal] = useState(false);
    const revToggle = () => setRevModal(!revModal);
    const [tasks, setTasks] =useState([]);
    const [rec, setRec] =useState("");
    const [msg, setMsg] =useState("");
    const [recommendations, updateRecommendations] =useState(RecomendationsList);
    let approvedRecs =[];
    const [approved, updateApproved]=useState([]);
    let upRec = [];
     const [hasData, setHasData] = useState(false);
     //const [recData, setRecData] = useState();
 
    useEffect(() => {
         listRecs().then(listOfRecs => {
           console.log(listOfRecs)  
           ///let data = listOfRecs.data;
           
             getApproved()
         }).finally(()=>{
             setHasData(true);
         });
       },[])

       function getApproved(){//scans through the a recommendations array, gets approved recs, and moves those recs to a new array
         try{
          approvedRecs = recommendations.filter(checkRec);//filters 
          console.log("these are the approved recommendations", approvedRecs);
          upRec = recommendations;
        if(approvedRecs!==undefined||approvedRecs!==null){//checks if approvedRecs is not null
          for(let i in recommendations){//loops through the array 
            if(recommendations[i].isApproved){//checks if the array 
            upRec.splice(i,1)}// removes the approved rec from the main array
          }
          approved.push(approvedRecs[0])//adds the approved rev to the approved array
          updateApproved(approved);//
          updateRecommendations(upRec)
        }
       console.log("these are the approved recommendations", approved);
       console.log("these are the Pending recommendations", recommendations);
}catch(err){

      setMsg(err.message);
      errToggle();
      console.log("View task error: ", err);
    }
      }
       function checkRec(recommendation){
         return recommendation.isApproved === true;
       }
      function approve(rec){
        rec.isApproved = true;
        for(let i in recommendations){
          if(rec.id === recommendations[i].id){
            recommendations.splice(i, 1, rec)
          }
        }
        getApproved()
        revToggle()
        console.log("This Recommendation has been approved!!")
       }
  async function listRecs() {
      try {
           var recslist = await API.graphql({query: queries.listRecommendationss});
          console.log(recslist.data);
          return recslist;
      } catch (err) {
          console.log("Error:>> ", err);
      }
  }
function review(i){
      try{ 
  
     console.log("View task error: ",RecomendationsList[i].isApproved ); 
     setRec(RecomendationsList[i]);
     revToggle();
    }catch(err){

      setMsg(err.message);
      errToggle();
      console.log("View task error: ", err);
    }
    }
    function viewTasks(i){
      try{
     let task = RecomendationsList[i].tasks;
     console.log("View task error: ", task);
     setTasks(task);
     setRec(RecomendationsList[i].recDesc);
     toggle();
    }catch(err){

      setMsg(err.message);
      errToggle();
      console.log("View task error: ", err);
    }
    }

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Approved Recomendations
        </CCardHeader>
        <CCardBody>
          <CRow >
          
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4" >
    {approved ? approved.map((values, index)=>{
      return(<>
      <li >
      <a  className="hover:bg-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">   
        <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
          <div>
            <dt className="sr-only">Title</dt>
            <dd className="group-hover:text-white leading-4 font-medium text-black">
              {values.recNum}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Category</dt>
            <dd className="group-hover:text-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
              {values.recDesc}
            </dd>
          </div>
          <div className="col-start-2 row-start-1 row-end-3">
            <dt className="sr-only">Durarion</dt>
            <dd className="flex justify-end group-hover:text-blue-200 sm:justify-start font-medium lg:justify-end xl:justify-start -space-x-2">
            Duration: {values.recDuration}
            </dd>
          </div>
          <div className="col-start-2 row-start-1 row-end-3">
            <dt className="sr-only">Tasks</dt>
            <dd className="flex justify-end group-hover:text-blue-200 sm:justify-start font-medium lg:justify-end xl:justify-start -space-x-2">
            {`${values.tasks.taskNum}: ${values.tasks.taskDesc}`}
            </dd>
          </div>
          <div >
            <dt className="sr-only">Users</dt>
            <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
            <Button onClick={()=> viewTasks(index)} className="btn col-12 mx-auto mt-3 mb-2 text-white">View tasks</Button> 
            </dd>
          </div>
          <div className="col-start-2 row-start-1 row-end-3">
            <dt className="sr-only">Users</dt>
            <dd className="flex justify-center sm:justify-start lg:justify-center xl:justify-start -space-x-2">
            <Link to={{pathname: "/dash/schedule"  ,state: values}}className="text-center  group-hover:text-blue-200 font-medium">Schedule</Link>
    
            </dd>
          </div>
        </dl>
      </a>
    </li>
  </>)
      }):null
    }
    </ul>
          </CRow>
        </CCardBody>
      </CCard>
    
     { RecomendationsList!==null ? (<CCard className="mb-4">
        <CCardHeader>
          Pending Recomendations
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-3">
           <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
    {RecomendationsList.map((values, index)=>{
return(<>
    <li x-for="item in items">
      <a  className="hover:bg-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
        <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
          <div>
            <dt className="sr-only">Title</dt>
            <dd className="group-hover:text-white leading-4 text-lg font-medium text-black">
              {values.recNum}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Category</dt>
            <dd className="group-hover:text-blue-200 text-base font-medium sm:mb-4 lg:mb-0 xl:mb-4">
              {values.recDesc}
            </dd>
          </div>
          <div className="col-start-2 row-start-1 row-end-3">
            <dt className="sr-only">Durarion</dt>
            <dd className="flex justify-end group-hover:text-blue-200 sm:justify-start font-medium lg:justify-end xl:justify-start -space-x-2">
            Duration: {values.recDuration}
            </dd>
          </div>
          <div className="col-start-2 row-start-1 row-end-3">
            <dt className="sr-only">Tasks</dt>
            <dd className="flex justify-end group-hover:text-blue-200 sm:justify-start font-medium lg:justify-end xl:justify-start -space-x-2">
            {`${values.tasks.taskNum}: ${values.tasks.taskDesc}`}
            </dd>
          </div>
          <div >
            <dt className="sr-only">Users</dt>
            <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
            <Button onClick={toggle} className="btn col-12 mx-auto mt-3 mb-2 text-white">View tasks</Button> 
            </dd>
          </div>
          <div className="col-start-2 row-start-1 row-end-3">
            <dt className="sr-only">Users</dt>
            <dd className="flex justify-center sm:justify-start lg:justify-center xl:justify-start -space-x-2">
            <Link onClick={()=>review(index)} className="text-center group-hover:text-blue-200 font-medium">Review</Link>
    
            </dd>
          </div>
        </dl>
      </a>
    </li>
    
    </>)
      })
    }
    </ul>
          </CRow>
        </CCardBody>
      </CCard>):null
}
      <PopUp
title="Error"
body={`Error Message: ${msg}`}
btnTxtPositive="Retry"
bg=""
toggle={errToggle}
isOpen={errModal}
/>
      <PopUp
title="Tasks"
head={`Recomendation: ${rec}\n`}
body={`Tasks\n\n`}
tasks= {
`${tasks.taskNum}\n`+
`${tasks.taskDesc}\n`+
`Assigned to: ${tasks.assignedTo}\n`
}
btnTxtPositive="Okay"
bg=""
toggle={toggle}
isOpen={modal}
/>
      <ReviewModal
title="Review Recommendation"
head={`Recomendation:`}
body={` ${rec.recDesc}\n`}
btnTxtPositive="Accept"
approve={()=>approve(rec)}
bg=""
toggle={revToggle}
isOpen={revModal}
/>
    </>
  )
}

export default Colors
