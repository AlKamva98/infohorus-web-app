import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {PopUp} from '../../../../Home/shared/utils/Modal';
import ReviewModal from '../../../../Home/shared/utils/ReviewModal';
import { CRow, CCard, CCardHeader, CCardBody } from '@coreui/react';
import {DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button } from 'react-bootstrap';

const Colors = (props) => {
    const {approve, approved, RecomendationsList, errModal, errToggle, revToggle, revModal,viewTasks, tasks, rec,toggle,modal, setRec, hasData, addTask }= props;
    const [msg, setMsg] =useState("");
    let RecTask;
    console.log("This is recommendations on app content page",RecomendationsList)

function review(i){
      try{ 
  
     console.log("The recommendation's approval status is: ",RecomendationsList[i].isApproved ); 
     setRec(RecomendationsList[i]);
     revToggle();
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
    {approved && approved.map((values, index)=>{
      return(<>
      <li >
      <a  className="hover:bg-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">   
        <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
          <div>
            <dt className="sr-only">Title</dt>
            <dd className="group-hover:text-white leading-4 font-medium text-black">
              {values.recName}
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
            {tasks && (tasks.map((task, i)=>{
              if(task.recId===values.id){
                RecTask = task
              }
              console.log("These are the tasks in this recommendation", RecTask)
              return(
                <dd className="flex justify-end group-hover:text-blue-200 sm:justify-start font-medium lg:justify-end xl:justify-start -space-x-2">
                {`Task ${index+1}: ${RecTask.taskDesc}- Assigned to:${RecTask.assignedTo}`}
                </dd>
                )
            }))}
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
            <Link to={{pathname: "/dash/schedule"  ,state: values, addTask: addTask}}className="text-center  group-hover:text-blue-200 font-medium">Schedule</Link>
    
            </dd>
          </div>
        </dl>
      </a>
    </li>
  </>)
      })}
    </ul>
          </CRow>
        </CCardBody>
      </CCard>
    
     { hasData && (<CCard className="mb-4">
        <CCardHeader>
          Pending Recomendations
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-3">
           <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
    {RecomendationsList && (RecomendationsList.map((values, index)=>{
return(<>
    <li x-for="item in items">
      <a  className="hover:bg-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
        <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
          <div>
            <dt className="sr-only">Title</dt>
            <dd className="group-hover:text-white leading-4 text-lg font-medium text-black">
              {values.recName}
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
            {tasks && (tasks.map((task, i)=>{
              if(task.recId===values.id){
                RecTask = task
              }
              console.log("These are the tasks in this recommendation", RecTask)
              return(
                <dd className="flex justify-end group-hover:text-blue-200 sm:justify-start font-medium lg:justify-end xl:justify-start -space-x-2">
                {`Task ${index+1}: ${RecTask.taskDesc}- Assigned to:${RecTask.assignedTo}`}
                </dd>
                )
            }))}
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
      }))
    }
    </ul>
          </CRow>
        </CCardBody>
      </CCard>)
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
