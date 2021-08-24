import React, { useState } from 'react'
import {Input} from 'reactstrap';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { ErrorMessage } from "@hookform/error-message";
import {useForm, Controller } from "react-hook-form";
import {PopUp} from '../../../../Home/shared/utils/Modal';

function Schedule(props) {
 const { state } = props.location;
  const [date, setDate] = useState(new Date());
  const [sdate, sSetDate] = useState(new Date());
  const [duration, updateDuration]= useState() 
const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
  const { register, handleSubmit, reset, formState: { errors }, control } = useForm();
    const handleRegistration = async (data) =>{ 
      toggle()
      console.log("This is the form data:",data)
      console.log("This is the start date:",sdate)
      console.log("This is the end date:",date)

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
    <Controller  type="text" control={control} name="fname"   {...register("fname" )} render={({ field }) => (
          <Input className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder={`${state.tasks.taskDesc}`} 
          {...field} />
        )} rules={{ required: "Please fill What the task is"}}  />
    <ErrorMessage errors={errors} className="err mb-4" name="fname" as="p" />
 
 
 <div className="flex flex-row">
    <div className="flex flex-col w-1/2"> 
    <label className=" text-xl font-semibold">Start date: </label>
    <DatePicker
  selected={sdate}
  onChange={(date) => sSetDate(date)}
  name="startDate"
  onCalendarClose={handleCalendarClose}
  onCalendarOpen={handleCalendarOpen}
  className=" w-7/8 inline-block px-4 py-4 mt-2 mr-3 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
  />
    <ErrorMessage errors={errors} className="err mb-4" name="startDate" as="p" />
  </div>
    <div className="flex flex-col w-1/2"> 
    <label className=" text-xl font-semibold">End date: </label>
    <DatePicker
  selected={date}
  onChange={(date) => setDate(date)}
  name="endDate"
  onCalendarClose={handleCalendarClose}
  onCalendarOpen={handleCalendarOpen}
  className=" w-7/8 inline-block px-4 py-4 mt-2 mr-3 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
   />
  
  </div>
  </div>
    
    <Controller  type="text" control={control} name="assignedTo"   {...register("assignedTo" )} render={({ field }) => (<Input className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder="Assign To" 
          {...field} />
        )} rules={{ required: "Please fill in who you assigned this task to"}}  />
    <ErrorMessage errors={errors} className="err mb-4" name="assignedTo" as="p" />
    
    <Controller  type="text" control={control} name="email"   {...register("email" )} render={({ field }) => (<Input className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder="Email" 
          {...field} />
        )} rules={{ required: "Please fill in hi/her email address"}}  />
    <ErrorMessage errors={errors} className="err mb-4" name="email" as="p" />
    
    
 
  <div className="relative">
  
  </div>
  <div className="relative">
  <button type="submit" className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Schedule</button>
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
toggle={toggle}
isOpen={modal}
/>
  </div>
 )
}

export default Schedule
