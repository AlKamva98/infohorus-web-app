import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {PopUp} from '../../../../Home/shared/utils/Modal';
import ReviewModal from '../../../../Home/shared/utils/ReviewModal';
import { CRow, CCard, CCardHeader, CCardBody } from '@coreui/react';
import { Button } from 'react-bootstrap';

const Colors = (props) => {
    const {approve, approved, recommendations, errModal, errToggle, revToggle, revModal, rec, setRec, addTask, tasks,teamList }= props;
    const [msg, setMsg] =useState("");
    var RecTask;

    console.log("These are recommendations", recommendations)
function review(i){
      try{ 
  
     setRec(recommendations[i]);
     revToggle();
    }catch(err){

      setMsg(err.message);
      errToggle();
      console.log("View task error: ", err);
    }
    }
    console.log("This is the approved recommendations",approved)

  return (
    <>
    { ( <CCard className="mb-4">
        <CCardHeader>
          Approved Recomendations
        </CCardHeader>
        <CCardBody>
          <CRow >
          
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4" >
     {recommendations.map((values, index)=>{
      return(<>{values.isApproved &&(
      <li key={index} >
      <div  className="hover:bg-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">   
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
            <dt className="sr-only">Duration</dt>
            <dd className="flex justify-end group-hover:text-blue-200 sm:justify-start font-medium lg:justify-end xl:justify-start -space-x-2">
            Duration: {values.recDuration}
            </dd>
          </div>
          
          <div >
            <dt className="sr-only">Users</dt>
            <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
            <Link  className="text-center  group-hover:text-blue-200 font-medium">View tasks</Link> 
            </dd>
          </div>
                    <div className="col-start-2 row-start-1 row-end-3">
            <dt className="sr-only">Tasks</dt>
            {tasks && (tasks.map((task, i)=>{
              let ts = null;
              if(task.recommendationsID===values.id){
                RecTask = task;
                i++;
                
                ts=  (<dd key={i} className="flex justify-end group-hover:text-blue-200 sm:justify-start font-medium lg:justify-end xl:justify-start -space-x-2">
                {`Task ${i}: ${RecTask.taskDesc}- Assigned to:${RecTask.assignedTo}`}
                </dd>);
                
              }
              return ts;
            }))}
          </div>
          <div className="col-start-2 row-start-1 row-end-3">
            <dt className="sr-only">Users</dt>
            <dd className="flex justify-center sm:justify-start lg:justify-center xl:justify-start -space-x-2">
            <Link className="btn bg-indigo-700 hover:bg-indigo-500 col-12 mx-auto mt-3 mb-2 text-white" to={{pathname: "/dash/schedule"  ,state: values,addTask: addTask, team: teamList}} >Schedule Task</Link>
    
            </dd>
          </div>
        </dl>
      </div>
    </li>)}
  </>)
      })}
    </ul>
          </CRow>
        </CCardBody>
      </CCard>)}
    
     { recommendations && (<CCard className="mb-4">
        <CCardHeader>
          Pending Recomendations
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-3">
           <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
    {recommendations ? (recommendations.map((values, index)=>{
return(<>{!values.isApproved &&
    <li x-for="item in items" key={index}>
      <div  className="hover:bg-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
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
            <dt className="sr-only">Users</dt>
            <dd className="flex justify-center sm:justify-start lg:justify-center xl:justify-start -space-x-2">
            <Button onClick={()=>review(index)} className="btn col-12 mx-auto mt-3 mb-2 text-white">Review</Button>
    
            </dd>
          </div>
        </dl>
      </div>
    </li>
}
    
    </>)
      })):(<p>Recommendations are unavailable</p>)
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
  
      <ReviewModal
title="Review Recommendation"
head={`Recomendation:`}
body={` ${rec.recDesc}\n`}
btnTxtPositive="Accept"
approve={()=>{
  approve(rec);
  revToggle()
} }
bg=""
toggle={revToggle}
isOpen={revModal}
/>
    </>
  )
}

export default Colors
