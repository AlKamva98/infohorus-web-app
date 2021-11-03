import React from 'react'
import {Label, Input, FormGroup, Button, Modal, ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import {Form} from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";
 

export function TaskPopUp (props) {
  
  const {popupType, tasks,title, body, isOpen, toggle ,btnTxtPositive, btnTxtNegative, bg, btnNegOnClick,className} = props;
  const { register, handleSubmit, errors, control } = useForm();
    const handleError = (errors) => { console.log("Form Errors: "+ errors)};
    const handleTask = async (data) =>{ 
  console.log("This is the input data from the form", data);
  try{
    tasks.push(data)
  }catch(err){
    console.log("Add Task error::", err)
  }  }

  return(
    <div>
   <Modal isOpen={isOpen} toggle={toggle} className={className}>
        <ModalHeader className="font-extrabold text-xl mx-4 text-gray-800" toggle={toggle}>{title}</ModalHeader>
    <Form className="row " onSubmit={handleSubmit(handleTask, handleError)}> 
        <ModalBody className={"mx-4 bg-cover bg-no-repeat bg-center "+`${bg}`}><div className=" w-full h-full mx-auto px-12 py-12 bg-white opacity-90"><p className="text-semibold text-lg">{body}</p>

        <FormGroup className="col-md-12">
            <Label for="taskName" className="visually-hidden" >Task Name</Label>
            <Controller  type="text" control={control} name="taskName"   {...register("taskName" )} render={({ field }) => (
          <Input className=" w-full inline-block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder="Task Name" 
          {...field} />
        )} rules={{ required: "Please fill in the Task Name"}}  />
        </FormGroup>

            
               <FormGroup className="col-md-12">
            <Label for="taskDuration" className="visually-hidden">Task duration</Label>
            <Controller control={control} render={({ field }) => (
           <Input type="text" className=" w-full inline-block py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder="Task Duration" 
          {...field} />)}  name="taskDuration"  {...register("taskDuration")} rules={{required:"Task Duration is required"}} />
               </FormGroup>

        </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn-primary" onClick={toggle}>{btnTxtPositive}</Button>
          { popupType==="two-btns" ? <Button type="submit" className="btn btn-outline-secondary text-gray-800 " >{btnTxtNegative}</Button> : null}
        </ModalFooter>
  </Form>
      </Modal>
  </div>)
 
}
