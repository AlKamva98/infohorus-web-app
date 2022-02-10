import React,{useState, useRef} from 'react';
import {Container, Row, Col,Card,Form} from 'react-bootstrap';
import {Label, Input, FormGroup,Button} from 'reactstrap';
import { useForm} from "react-hook-form";
import {
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
} from '@coreui/react'


function Employees(props) {

  const {addMember}=props.location;
  
  const initialFormState = {fname:"", lname:"",email:"", jobtitle:"", company:"",employees:"",industry:"",  formType:"signUp"};  
  // const signupFailMsg = "Passwords are different!! Pasword and Confirm Password must be the same";
  const [formState, updateFormState] = useState(initialFormState);
  const [toast, addToast] = useState(0)
  const atoaster = useRef()
 const newUsToast = (
  <CToast autohide={false} color="success" className="text-white align-items-center">
  <div className="d-flex">
    <CToastBody>New team member added</CToastBody>
    <CToastClose className="me-2 m-auto" white />
  </div>
  </CToast>
  )
    const { register, handleSubmit} = useForm();
    const handleError = (errors) => { console.log("Form Errors: "+ errors)};
    const handleRegistration = async (data) =>{ 
      try{
          addMember(data)
          addToast(newUsToast)
          }
      catch(err){
        console.log("API err:", err )
      
      }
    };
    let {formType}= formState;
    function onChange(e){
        e.persist()
        updateFormState(()=>({...formState, [e.target.name]: e.target.value})); 
        console.log("changed the::",e.target.value);
      }
      
     
   
 return (
 <div>
{formType==="signUp" && ( <Container className="container-fluid">
    <Row>
       
        
        <Col id="subDiv2" className="mx-auto w-1/2">
            <Card className="mx-auto mb-4 mt-4 bg-light w-1/2 shadow" >
                <Card.Body>
        <h2 className="mb-3 fw-normal text-center text-2xl fw-bold">Adding new team member</h2>
        <h4 className="mb-3 fw-normal text-center">Please Fill in the team member's details </h4>

      <Form className="row g-3 m-4 p-4" onSubmit={handleSubmit(handleRegistration, handleError)}> 
        <FormGroup className="col-md-6">
            <Label for="fname" className="visually-hidden" >First name</Label>
            <Input type="text" {...register("fname")} className="form-control" onChange={onChange} name="fname" placeholder="First Name" rules={{ required: "Please fill in your First Name"}} autofocus/> 
        </FormGroup>

        <FormGroup className="col-md-6">
            <Label for="lname" className="visually-hidden" >Last name</Label>
            <Input type="text" {...register("lname")} className="form-control" onChange={onChange} name="lname" placeholder="Last Name" rules={{ required: "Please fill in your Last Name"}} autofocus/> 
</FormGroup>
            
            <FormGroup className="col-12">
             <Label for="jobtitle" className="visually-hidden">Job Title</Label>
             <Input  type="text" name="jobtitle"  {...register("jobtitle" )} 
              className=" form-control focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
              placeholder="Job Title" rules={{ required: "Please fill in your Job title"}}  />
            </FormGroup>
               <FormGroup className="col-md-12">
                   <Label for="email" className="visually-hidden">Email address</Label>
                   <Input  type="text" name="email"  {...register("email" )}   className=" form-control focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
               placeholder="Email Address"
             rules={{ required: "Please fill in your Email Address"}}  />
               </FormGroup>
            
            <FormGroup className="checkbox mb-3">
            <Button type="submit" className="w-100 my-3 text-lg text-white fw-semibold py-3 bg-blue-700  hover:bg-blue-500 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"  >Add user</Button>
            </FormGroup>
        </Form>
        </Card.Body>
            </Card>
    </Col>
    </Row>
    </Container> )}

<CToaster ref={atoaster} push={toast} placement="top-end" />
</div>
 )
}
  
export default Employees;