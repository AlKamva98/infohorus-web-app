import React,{useState, useEffect} from 'react';
import {Container, Row, Image, Col,Card,Form} from 'react-bootstrap';
import {Label, Input, FormGroup,Button} from 'reactstrap';
import Select  from 'react-select';
import { Link} from 'react-router-dom';
import {selectOptionsCountry, selectEmpOptions, selectOptionsIndustry} from '../../../../Home/testData/selectOptions.js'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { ErrorMessage } from "@hookform/error-message";
import { useForm, Controller } from "react-hook-form";
import ReactTooltip from 'react-tooltip'
import { Amplify, API, Auth, Storage,graphqlOperation } from 'aws-amplify';
import * as mutations from '../../../../graphql/mutations'
import { PopUp } from '../../../../Home/shared/utils/Modal';
const awsConfig = require('../../../../aws-exports').default;

Amplify.register(API)
Amplify.register(Storage)
Amplify.register(Auth)
Amplify.configure(awsConfig)


function Register(props) {
      const {
    className
  } = props;

  var newusermut = mutations.createUser;
  let signupFailMsg;
  const initialFormState = {
        fname:"", lname:"",email:"", password:"", confPassword:"", jobtitle:"", company:"",employees:"",industry:"", authCode:"",chkAgreement:"", formType:"signUp"};  
  const [modalPass, setModalPass] = useState(false);
  const [modalErrPop, setModalErrPop] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const toggleErrPop = () => setModalErrPop(!modalErrPop);
  const [formState, updateFormState] = useState(initialFormState);
  const [errTitle, setErrTitle] = useState("");
  const [errMess, setErrMess] = useState("");
  const [user, setUser] = useState(null);
  const togglePass = (valid) =>{
    signupFailMsg = "Invalid email!! Please enter your company email, not a free email(gmail, yahoo, hotmail, etc)";
    if(valid===true){
    signupFailMsg = "Passwords are different!! Pasword and Confirm Password must be the same";
  }
  setErrMess(signupFailMsg)
    setModalPass(!modalPass)
  };
    useEffect(()=>{
    checkUser();
    },[])

    const { register, handleSubmit, getValues,formState: { errors }, control } = useForm();
    const handleError = (errors) => { console.log("Form Errors: "+ errors)};
    const handleRegistration = async (data) =>{ 
      
      try{
        
        let username = data.email;
        let email = data.email;
        let password = data.password;
        let emailValid = checkEmail(email);
        if(password === data.confPassword && emailValid===true){
          await Auth.signUp({username, password,attributes: {email}})
          console.log("SignUp complete")
          updateFormState(()=>({...formState, formType: "verifyMail"}))

          console.log("Sending to the API")
          await API.graphql(graphqlOperation(
            newusermut,{
              input:{
              
                email: data.email,
                first_name: data.fname,
                last_name: data.lname,
                job_title: data.jobtitle,
                phone: data.phone,
                company: data.company,
                employees: data.employees.value,
                industry: data.industry.value,
                country: data.country.value,
                userType: "Assessee"
              }
  
          }))
        console.log("This is the users data:"+JSON.stringify(data))
        console.log("Data sent to the API")
      }else{
        togglePass(emailValid);
      }    
    }
      catch(err){
        console.log("API err:", err )
        setErrTitle(err.code);
        setErrMess(err.message);
        toggleErrPop();
      }
    };
    async function checkEmail(email){
const axios = require('axios');
let valid = false;
await axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=463d1f07dbb54cf08221d8310c1dbdd0&email=${email}`)
    .then(response => {
        console.log(response.data);
        console.log("This is a free email:", response.data.is_free_email.value);
        if(response.data.is_free_email.value===false){
          valid = true;
        }
    })
    .catch(error => {
        console.log(error);
    });
    console.log("The email is valid:", valid)
  return valid;
  }
    
    
    let {formType}= formState;
    function onChange(e){
        e.persist()
        console.log("changing:"+e.target.name);
        updateFormState(()=>({...formState, [e.target.name]: e.target.value}))
        if(e.target.name==="chkAgreement" ){
          setEnabled(e.target.checked)
          console.log("Checkbox aggreement has been checked, button enabled is:", enabled)
        }
      }
      
      async function checkUser(){
        try{
          const u = await Auth.currentAuthenticatedUser();
          console.log(u)
            setUser(u);
            console.log("This is the user", user)
            const a = await Auth.currentUserInfo();
            console.log("User Info is:"+ a);     
        }catch(err){
            console.log(err);
        }
    }
   

 return (
 <div>
{formType==="signUp" && ( <Container className="container-fluid">
    <Row>
       
        
        <Col id="subDiv2" className="mx-auto w-1/2">
            <Card className="mx-auto mb-4 mt-4 bg-light w-1/2 shadow" >
                <Card.Body>
        <div className="m-auto">
        <Image className="d-block mx-auto mb-4 img-fluid" src="./images/fav-logo.png" alt="Our logo" width="85" height="85"/>
        </div>
        <h4 className="mb-3 fw-normal text-center">Please Fill in your details to sign up</h4>

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
                   <Input  type="text" onChange={onChange} name="email"  {...register("email" )}   className=" form-control focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
               placeholder="Email Address"
             rules={{ required: "Please fill in your Email Address", validate: () => {
          if(getValues("email").includes("@gmail")|| getValues("email").includes("@yahoo")){
              return "Please enter your company email, not your personal email.";
            }
            }}}  />
            <ErrorMessage errors={errors} className="err mb-4" name="email" as="p" />
               </FormGroup>
        <FormGroup className="col-md-12">
        <Controller  type="text" control={control} name="phone"   {...register("phone" )} render={({ field }) => (<PhoneInput className="form-control focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" onChange={onChange}
          placeholder="Phone number" 
          {...field} />
        )} rules={{ required: "Please fill in your phone number"}}  />
    <ErrorMessage errors={errors} className="err mb-4" name="phone" as="p" />
    </FormGroup>
             <FormGroup className="col-12">
                 <Label for="password" className="visually-hidden">Password</Label>
                 <Controller   control={control} name="password"    {...register("password")} render={({ field }) => (
                   <Input onChange={onChange} className=" form-control focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" data-tip data-for="passPolicyTip" placeholder="Password" type="password" {...field} />
             )} rules={{ required: "Please Enter a password with atleast 8 characters. The password should also have atleast one capital letter, one special character and one number."}}  />
             <ErrorMessage errors={errors} className="err mb-4" name="password" as="p" />
         <ReactTooltip id="passPolicyTip" place="top" effect="solid">
        Enter a password with at least 8 characters. The password should also have at least one capital letter, one special character(!@#) and one number
      </ReactTooltip>
             </FormGroup>
             <FormGroup className="col-12">
                 <Label for="confPassword" className="visually-hidden">Confirm Password</Label>
                 <Controller   control={control} name="confPassword"  {...register("confPassword")} render={({ field }) => (
                   <Input className=" form-control focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Confirm Password" type="password" {...field} />
               )} rules={{ required: "Please Enter a password that matches the above password"}}  />
             </FormGroup>
               <PopUp isOpen={modalPass} 
               btnTxtPositive="Retry" 
               title="Sign up Failed" 
               body={errMess} 
               toggle={togglePass} 
               className={className}/>
             
             <FormGroup className="col-12">
             <Label for="company" className="visually-hidden">Company</Label>
             <Controller  type="text" onChange={onChange} control={control} name="company"  {...register("company")} render={({ field }) => (
              <Input className=" form-control focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" 
              placeholder="Company" 
              {...field} />
            )} rules={{ required: "Please fill in your Company"}}  />    
             </FormGroup>

              <FormGroup className="col-12">
                      <Label for="employees" className="visually-hidden">Number of employees</Label>  
         <Controller name="employees"  control={control} render={({ field }) => (
                  <Select placeholder="Employees" className=" focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" onChange={onChange} options={selectEmpOptions} defaultValue="Country" {...field}>
                    </Select>
              )}   {...register("employees")}  rules={{ required: "Please Select your employees"}} />                  
              </FormGroup>
               
              <FormGroup className="col-12">
                  <Label for="industry" className="visually-hidden">Industry</Label>
                   <Controller name="industry"    control={control} render={({ field }) => (
                  <Select placeholder="Industry" className=" focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" onChange={onChange} options={selectOptionsIndustry} defaultValue="Country" {...field}>
                    </Select>
                )}   {...register("industry")}  rules={{ required: "Please Select your industry"}} />
              </FormGroup>
              <FormGroup className="col-12">
                  <Label for="country" className="visually-hidden">Country</Label>
                   <Controller name="country"  control={control} render={({ field }) => (
                  <Select placeholder="Country" className=" focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" options={selectOptionsCountry} defaultValue="Country" {...field}>
                    </Select>
                )}   {...register("country")}  rules={{ required: "Please Select your country"}} />
              </FormGroup>
                <FormGroup className="checkbox mb-2">
                <span>
                    <input type="checkbox" onChange={onChange} name="chkAgreement"  value={enabled}/><p className="ml-2" data-tip data-for="agreeTip">I agree to the <p className="btn-link d-none d-md-inline-block pointer"  >Master Subscription Agreement.</p></p>
                </span>
                 </FormGroup>
            <div className="checkbox mb-3 ">
            <span  >By registering, you agree to the processing of your personal data by Bahati Tech as described in the </span><p className="btn-link d-none d-md-inline-block pointer">Privacy policy</p>
         </div>
            
            <FormGroup className="checkbox mb-3">
            <span>
                <input type="checkbox" onChange={onChange} name="newsletter" value="newsletter"/>   Yes, I would like to receive marketing communications regarding Bahati Tech products, services, and events. I can unsubscribe at a later time.</span>
            <Button type="submit" disabled={!enabled} className="w-100 my-3 text-lg text-white fw-semibold py-3 bg-blue-700  hover:bg-blue-500 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"  >REGISTER</Button>
             <ReactTooltip id="agreeTip" place="top" effect="solid">
              Click on the Master Subscription Agreement checkbox to register.
      </ReactTooltip>
            </FormGroup>
            <PopUp isOpen={modalErrPop} 
               btnTxtPositive="Retry" 
               title={errTitle} 
               body={errMess} 
               toggle={toggleErrPop} 
               className={className}/>

        </Form>
        </Card.Body>
            </Card>
    </Col>
    </Row>
    </Container> )}

{formType === 'verifyMail' && (
<section className="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
  <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
    <div className="flex flex-col w-full md:flex-row">
      {/* Top Text */}
      <div className="flex justify-between">
        <h1 className="relative flex flex-col text-6xl font-extrabold text-left text-black">
        Thank you  
          <span>for</span>
          <span>Signing up</span>
        </h1>
      </div>
      {/* Right Image */}
      <div className="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
        <img alt='Sign up complete' src="https://cdn.devdojo.com/images/december2020/designs3d.png" className="object-cover mt-3 mr-5 h-80 lg:h-96" />
      </div>
    </div>
    {/* Separator */}
    <div className="my-16 border-b border-gray-300 lg:my-24" />
    {/* Bottom Text */}
    <h2 className="text-left text-gray-500 xl:text-xl">
      Thank you for signing up. You've been sent an email to the email you signed up with. Please verify your email and sign in to begin your journey.
    </h2>
<Link to="/login" className="btn mt-6 mr-4 justify-end bg-indigo-500 rounded-md text-white shadow-sm hover:bg-indigo-700" >Continue</Link>
  </div>
</section>
)}

</div>
 )
}
  
export default Register;