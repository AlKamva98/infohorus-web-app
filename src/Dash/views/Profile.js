import React,{useState, useRef} from 'react';
import {Container, Row, Col,Card,Form} from 'react-bootstrap';
import {Label, Input, FormGroup,Button} from 'reactstrap';
import Select  from 'react-select';
import {selectOptionsCountry, selectEmpOptions, selectOptionsIndustry} from '../../Home/testData/selectOptions.js'
import { useForm, Controller } from "react-hook-form";
import {sendEmail} from '../../Home/shared/functions/AwsFuncs'
import {  API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'
import {
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
} from '@coreui/react'


function Profile(props) {
  const {userId}=props;
  var updateusermut = mutations.updateUser;
  const initialFormState = {fname:"", lname:"",email:"", jobtitle:"", company:"",employees:"",industry:"",  formType:"signUp"};  
  const signupFailMsg = "Passwords are different!! Pasword and Confirm Password must be the same";
  const [modalPass, setModalPass] = useState(false);
  const togglePass = () => setModalPass(!modalPass);
  const [modalErrPop, setModalErrPop] = useState(false);
  const toggleErrPop = () => setModalErrPop(!modalErrPop);
  const [formState, updateFormState] = useState(initialFormState);
  const [errTitle, setErrTitle] = useState("");
  const [errMess, setErrMess] = useState("");
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
  console.log("this is the users deats", userId);
    const { register, handleSubmit, errors, control } = useForm();
    const handleError = (errors) => { console.log("Form Errors: "+ errors)};
    const handleRegistration = async (data) =>{ 
      try{
        getCreds().then((uCred)=>{
          sendEmail("New Team member",data, uCred, "infohorus@bahatitech.co.za");
          
        }).finally(async()=>{
          let a= await API.graphql(graphqlOperation(
            updateusermut,{
              input:{
                
                email: data.email,
                  first_name: data.fname,
                  last_name: data.lname,
                  job_title: data.jobtitle,
                  employees: data.employees,
                  company: data.company,
                  industry: data.industry,
                  _version: userId._version
                }
                
              }))
              console.log("You've add team member::",a)
          }).catch(e=>{
            console.log("adding new team member error", e)
          })
          addToast(newUsToast)
          }
      catch(err){
        console.log("API err:", err )
        setErrTitle(err.code);
        setErrMess(err.message);
        toggleErrPop();
      }
    };
    let {formType}= formState;
    function onChange(e){
        e.persist()
        updateFormState(()=>({...formState, [e.target.name]: e.target.value})); 
        console.log("changed the::",e.target.value);
      }
      
     async function getCreds(){
      let cred  = await API.graphql(graphqlOperation(queries.getCred, { id: 'ak100' }));
      return cred;
    }
   
 return (
 <div>
{formType==="signUp" && ( <Container className="container-fluid">
    <Row>
       
        
        <Col id="subDiv2" className="mx-auto w-1/2">
            <Card className="mx-auto mb-4 mt-4 bg-light w-1/2 shadow" >
                <Card.Body>
        <h2 className="mb-3 fw-normal text-center text-2xl fw-bold">Update Profile</h2>
        <h4 className="mb-3 fw-normal text-center">Please change the details you want to update</h4>

      <Form className="row g-3 m-4 p-4" onSubmit={handleSubmit(handleRegistration, handleError)}> 
        <FormGroup className="col-md-6">
            <Label for="fname" className="visually-hidden" >First name</Label>
            <Input type="text" {...register("fname")} className="form-control" onChange={onChange} name="fname" placeholder="First Name"  value={userId.first_name} rules={{ required: "Please fill in your First Name"}} autofocus/> 
        </FormGroup>

        <FormGroup className="col-md-6">
            <Label for="lname" className="visually-hidden" >Last name</Label>
            <Input type="text" {...register("lname")} className="form-control" onChange={onChange} name="lname" placeholder="Last Name" value={userId.last_name} rules={{ required: "Please fill in your Last Name"}} autofocus/> 
</FormGroup>
            
            <FormGroup className="col-12">
             <Label for="jobtitle" className="visually-hidden">Job Title</Label>
             <Input  type="text" name="jobtitle"  {...register("jobtitle" )} 
              className=" form-control focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
              placeholder="Job Title" value={userId.job_title} rules={{ required: "Please fill in your Job title"}}  />
            </FormGroup>
               <FormGroup className="col-md-12">
                   <Label for="email" className="visually-hidden">Email address</Label>
                   <Input  type="text" name="email"  {...register("email" )}   className=" form-control focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
               placeholder="Email Address" value={userId.email}
             rules={{ required: "Please fill in your Email Address"}}  />
               </FormGroup>
                 <FormGroup className="col-12">
                      <Label for="employees" className="visually-hidden">Number of employees</Label>  
         <Controller name="employees"  control={control} render={({ field }) => (
                  <Select placeholder="Employees" className=" focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" onChange={onChange} options={selectEmpOptions} inputValue={userId.employees} value={userId.employees} {...field}>
                    </Select>
              )}   {...register("employees")}  rules={{ required: "Please Select your employees"}} />                  
              </FormGroup>
               
              <FormGroup className="col-12">
                  <Label for="industry" className="visually-hidden">Industry</Label>
                   <Controller name="industry"    control={control} render={({ field }) => (
                  <Select placeholder="Industry" className=" focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" onChange={onChange} options={selectOptionsIndustry} inputValue={userId.industry} value={userId.industry} {...field}>
                    </Select>
                )}   {...register("industry")}  rules={{ required: "Please Select your industry"}} />
              </FormGroup>
              <FormGroup className="col-12">
                  <Label for="country" className="visually-hidden">Country</Label>
                   <Controller name="country"  control={control} render={({ field }) => (
                  <Select placeholder="Country" className=" focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" options={selectOptionsCountry} inputValue={userId.country} value={userId.country} {...field}>
                    </Select>
                )}   {...register("country")}  rules={{ required: "Please Select your country"}} />
              </FormGroup>
            
            <FormGroup className="checkbox mb-3">
            <Button type="submit" className="w-100 my-3 text-lg text-white fw-semibold py-3 bg-blue-700  hover:bg-blue-500 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"  >Update Profile</Button>
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
  
export default Profile;