import React, { useState } from 'react'
import {Input} from 'reactstrap';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { ErrorMessage } from "@hookform/error-message";
import {useForm, Controller } from "react-hook-form";
import {PopUp} from '../../../../Home/shared/utils/Modal';
import Select  from 'react-select';


function Schedule(props) {
  const selectOptionsIMP = [
      {value: "#fd3153", label: "High"},
      {value: "#3694DF", label: "Meduim"},
      {value: "#1ccb9e", label: "Low"}]
  const { state, addTask, team } = props.location;
  const [date, setDate] = useState(new Date());
  const [sdate, sSetDate] = useState(new Date());
  const [duration, updateDuration]= useState() 
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
  const { register, handleSubmit, formState: { errors }, control } = useForm();
  const handleRegistration = async (data) =>{ 
    toggle()
    var diff = date.getTime() - sdate.getTime();
    var diffDays = diff/(1000 * 3600 * 24);
    var sMonth = sdate.getMonth()+1;
    var eMonth = date.getMonth()+1;
    var tsStart = new Date(sdate.getFullYear()+"/"+ sMonth+"/"+ sdate.getDate()); 
    var tsEnd = new Date(date.getFullYear()+"/"+ eMonth+"/"+ date.getDate()); 
    console.log("task start date",sMonth);
    console.log("task ends",eMonth)
    var task = {
     taskDesc: data.taskDesc,
     taskStart: tsStart,
     taskEnd: tsEnd,
     color: data.importance.value,
     assignedTo: data.assignedTo.value,
     recommendationsID: state.id
    }
    updateDuration(diffDays);
    console.log("This is the duration of the task", duration);
    console.log("This is the task that has been scheduled", task);
    addTask(task);
  }

  return (
   <div>
<div className="" >
 <div className="w-full bg-white">
  <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
  <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
  <h3 className="w-full mt-4 text-3xl font-bold">Schedule task</h3>
  <h3 className="w-full text-xl font-semibold">{`Recommendation: ${state.recDesc}`}</h3>
  <h3 className="w-full text-xl ">{`Estimated Duration: ${state.recDuration}`}</h3>
  <h5 className="w-full text-lg ">Complete the form below to schedule the tasks of the Recommendation </h5>
  <form className="w-full mt-10 pb-3 space-y-8" onSubmit={handleSubmit(handleRegistration)}>
    <Controller  type="text" control={control} name="taskDesc"   {...register("taskDesc" )} render={({ field }) => (
          <Input className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder={`Task Name`} 
          {...field} />
        )} rules={{ required: "Please fill what task will be done."}}  />
    <ErrorMessage errors={errors} className="err mb-4" name="taskDesc" as="p" />
 <div className="flex flex-row">
    <div className="flex flex-col w-1/2"> 
    <label className=" text-xl font-semibold">Start date: </label>
    <DatePicker
  selected={sdate}
  onChange={(date) => {console.log("this is the start date", date); sSetDate(date);}}
  name="startDate"
  onCalendarClose={handleCalendarClose}
  onCalendarOpen={handleCalendarOpen}
  className=" w-7/8 inline-block px-4 py-4 mt-2 mr-3 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
  />
  </div>
    <div className="flex flex-col w-1/2"> 
    <label className=" text-xl font-semibold">End date: </label>
    <DatePicker
  selected={date}
  onChange={(date) => {console.log("this is the end date", date); setDate(date);}}
  name="endDate"
  onCalendarClose={handleCalendarClose}
  onCalendarOpen={handleCalendarOpen}
  className=" w-7/8 inline-block px-4 py-4 mt-2 mr-3 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
   />
  
  </div>
  </div>
  
      <Controller name="assignedTo"   control={control} render={({ field }) => (
              <Select placeholder="Assigned To" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" options={team} defaultValue="Assigned To" {...field}>
                </Select>
            )}   {...register("assignedTo")}  rules={{ required: "Please Select the importance of the task"}} />
    <ErrorMessage errors={errors} className="err mb-4" name="assignedTo" as="p" />
    
    <Controller name="importance"   control={control} render={({ field }) => (
              <Select placeholder="Importance" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" options={selectOptionsIMP} defaultValue="Importance" {...field}>
                </Select>
            )}   {...register("importance")}  rules={{ required: "Please Select the importance of the task"}} />
  <ErrorMessage errors={errors} className="err mb-4" name="importance" as="p" />

    {/* <Controller  type="text" control={control} name="email"   {...register("email" )} render={({ field }) => (<Input className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder="Email" 
          {...field} />
        )} rules={{ required: "Please fill in his/her email address"}}  />
    <ErrorMessage errors={errors} className="err mb-4" name="email" as="p" /> */}
    
    
 
  <div className="relative">
  
  </div>
  <div className="relative">
  <button type="submit" className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Schedule Task</button>
  </div>
  </form> 
</div>
              </div>
            </div>
          </div>

    <PopUp
title="Task Scheduled"
body={"Your task has been scheduled, check the Calendar to view it."}
btnTxtPositive="Return"
bg=""
prev="/dash/theme"
toggle={toggle}
isOpen={modal}
/>
  </div>
 )
}

export default Schedule
