import React,{useState} from 'react';
import {Container, Row, Col,Card,Form} from 'react-bootstrap';
import {Label, Input, FormGroup,Button} from 'reactstrap';
import { useForm, Controller } from "react-hook-form";
import {  API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../../graphql/mutations'

  function Update(props) {
    const {userData} = props.location;
    var updatedUser ={...userData};
    const initialFormState = {
    fname:"", lname:"",email:"", jobtitle:"", company:"",employees:"",industry:"", authCode:"",chkAgreement:"", formType:"signUp"};  
    const [formState, updateFormState] = useState(initialFormState);
    
    const { register, handleSubmit, errors, control } = useForm();
    const handleError = (errors) => { console.log("Form Errors: "+ errors)};
    const handleRegistration = async (data) =>{ 
      
      try{
         updatedUser.first_name= data.fname;
         updatedUser.last_name= data.lname;
         updatedUser.job_title= data.jobtitle;
         updatedUser.email = data.email;
         updatedUser = omit(updatedUser,"_lastChangedAt");
         updatedUser = omit(updatedUser,"createdAt");
         updatedUser = omit(updatedUser,"updatedAt");
         updatedUser = omit(updatedUser,"checked");

         await API.graphql({ query: mutations.updateTeam, variables: {input: omit(updatedUser, "_deleted")}});
      }
      catch(err){
        console.log("API err:", err )
        }
    };
    let {formType}= formState;
    function onChange(e){
        e.persist()
        updateFormState(()=>({...formState, [e.target.name]: e.target.value}))
      }
      function omit(obj, ...props) {
  const result = { ...obj };
  props.forEach(function(prop) {
    delete result[prop];
  });
  return result;
}
 return (
 <div>
{formType==="signUp" && ( <Container className="container-fluid">
    <Row>
       
        
        <Col id="subDiv2" className="mx-auto w-1/2">
            <Card className="mx-auto mb-4 mt-4 bg-light w-1/2 shadow" >
                <Card.Body>
        <h2 className="mb-3 fw-normal text-center text-2xl fw-bold">Updating team member</h2>
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
            <Button type="submit" className="w-100 my-3 text-lg text-white fw-semibold py-3 bg-blue-700  hover:bg-blue-500 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"  >Update Team member</Button>
            </FormGroup>
        </Form>
        </Card.Body>
            </Card>
    </Col>
    </Row>
    </Container> )}


</div>
 )
}
  
export default Update;