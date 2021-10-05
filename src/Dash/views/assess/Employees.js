import React,{useState, useRef} from 'react';
import {Container, Row, Col,Card,Form} from 'react-bootstrap';
import {Label, Input, FormGroup,Button} from 'reactstrap';
import { Link} from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import {sendEmail} from '../../../Home/shared/functions/AwsFuncs'
import {  API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../../graphql/mutations'
import * as queries from '../../../graphql/queries'
import {
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
} from '@coreui/react'


function Employees(props) {
      const {
    buttonLabel,
    className
  } = props;

  var newusermut = mutations.createUser;
  const initialFormState = {
        fname:"", lname:"",email:"", jobtitle:"", company:"",employees:"",industry:"",  formType:"signUp"};  
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
    const { register, handleSubmit, errors, control } = useForm();
    const handleError = (errors) => { console.log("Form Errors: "+ errors)};
    const handleRegistration = async (data) =>{ 
      
      try{
          console.log("Data::::", data)
        getCreds().then((uCred)=>{
          console.log("Sending Email", uCred)
          sendEmail("New Team member",data, uCred, "infohorus@bahatitech.co.za");
          
        }).finally(async()=>{
          console.log("Sending to the API")
          await API.graphql(graphqlOperation(
            newusermut,{
              input:{
                
                email: data.email,
                  first_name: data.fname,
                  last_name: data.lname,
                  job_title: data.jobtitle,
                  userType: "Team member",
                  
                }
                
              }))
              console.log("This is the users data:"+JSON.stringify(data))
              console.log("Data sent to the API")
          
            
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
        console.log("changing:"+e.target.name);
        updateFormState(()=>({...formState, [e.target.name]: e.target.value}))
      }
      
     async function getCreds(){
      let cred  = await API.graphql(graphqlOperation(queries.getCred, { id: 'ak100' }));
      console.log("These are the creds", cred)
      return cred;
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
            <Input type="text" {...register("fname" )} className="form-control" onChange={onChange} name="fname" placeholder="First Name" rules={{ required: "Please fill in your First Name"}} autofocus/> 
        </FormGroup>

        <FormGroup className="col-md-6">
            <Label for="lname" className="visually-hidden" >Last name</Label>
            <Input type="text" {...register("lname" )} className="form-control" onChange={onChange} name="lname" placeholder="Last Name" rules={{ required: "Please fill in your Last Name"}} autofocus/> 
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