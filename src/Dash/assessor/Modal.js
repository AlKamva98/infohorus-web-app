import React from 'react'
import {Button, Modal, ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import {Input} from 'reactstrap';
import {Formik, Form, FieldArray, Field} from 'formik'

export function RecPopUp (props) {
  const onSubmit=()=>{

  }
  const {popupType, title, body, isOpen, toggle ,btnTxtPositive, btnTxtNegative, bg, btnNegOnClick,className} = props;
  return(
  <div>
   <Modal isOpen={isOpen} toggle={toggle} className={className}>
        <ModalHeader className="font-extrabold text-xl mx-4 text-gray-800" toggle={toggle}>{title}</ModalHeader>
        <ModalBody className={"mx-4 bg-cover bg-no-repeat bg-center "+`${bg}`}><div className=" w-full h-full mx-auto px-12 py-12 bg-white opacity-90"><p className="text-semibold text-lg">{body}</p>
        <Formik
 initialValues={{tasks:[{taskName:"",taskDuration:"", taskId:""+ Math.random()}]}}
 onSubmit={onSubmit}>

{({ values, handleChange, handleBlur, handleSubmit})=>(
  <Form onSubmit={handleSubmit} className="py-3">
          <div className="relative">
          <Field name="RecName" onChange={handleChange} placeholder="Recommendation" className="block w-60  mt-2 text-xl placeholder-gray-400  rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"  type="input" as={Input}> 
          </Field>
          </div>
          <div className="relative">
          <Field name="recSeverity" type="input" onChange={handleChange} className="block w-60  mt-2 text-xl placeholder-gray-400  rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
          placeholder="Severity" as={Input} /> 
          </div>
  <FieldArray name="tasks">

    {arrayHelpers =>(
    <div>
      <Button
        className="mx-4 my-4 text-indigo-700"
        onClick={() =>
        arrayHelpers.push({
        taskName:"",taskDuration:"", taskId:""+ Math.random()})
      }>add task</Button>
        {values.tasks.map((val, index) => {
        return(
            <div key={index}>
          <div className="flex flex-col mb-4">
            <h3 className="text-2xl font-bold text-gray-900">Tasks</h3>
            </div>
            <div className="relative mb-4">
              <Field name={`task.${index}.taskName`} onChange={handleChange} placeholder="Enter task name" className="block w-60  mt-2 text-xl placeholxder-gray-400  rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"  type="input" as={Input}> 
            </Field>
              <Field name={`task.${index}.taskDuration`} onChange={handleChange} placeholder="Enter Duration" className="block w-60  mt-2 text-xl placeholxder-gray-400  rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"  type="input" as={Input}> 
            </Field>
            <pre>{JSON.stringify(values.tasks[index],null,2)}</pre>
            </div>
           
            </div>
           
           )
          })}
         
    </div>
    )

}
</FieldArray>
  </Form>
)
}
</Formik>
        </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn-primary" onClick={toggle}>{btnTxtPositive}</Button>
          { popupType==="two-btns" ? <Button onClick={btnNegOnClick} className="btn btn-outline-secondary text-gray-800 " >{btnTxtNegative}</Button> : null}
        </ModalFooter>
      </Modal>
  </div>)
 
}
