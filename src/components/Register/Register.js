import React,{useState, useEffect} from 'react';
import {Container, Row, Image, Col,Card,Form} from 'react-bootstrap';
import {Label, Input, FormGroup,Button} from 'reactstrap';
import Select  from 'react-select';
import {Redirect} from 'react-router-dom';
import {selectOptionsCountry, selectEmpOptions, selectOptionsIndustry} from '../../testData/selectOptions.js'
import { useForm, Controller } from "react-hook-form";
import { Amplify, API, Auth, Storage,graphqlOperation } from 'aws-amplify';
import {registerOptions} from './registerOptions';
import nextId from 'react-id-generator';
import * as mutations from '../../graphql/mutations'
import { PopUp } from '../Modal.js';
const awsConfig = require('../../aws-exports').default;

Amplify.register(API)
Amplify.register(Storage)
Amplify.register(Auth)
Amplify.configure(awsConfig)


function Register(props) {
      const {
    buttonLabel,
    className
  } = props;

  var newusermut = mutations.createUser;
  
  const signupFailMsg = "Passwords are different!! Pasword and Confirm Password must be the same";
  const [modalPass, setModalPass] = useState(false);
  const togglePass = () => setModalPass(!modalPass);
  const initialFormState = {
        fname:"", lname:"",email:"", password:"", confPassword:"", jobtitle:"", company:"",employees:"",industry:"", authCode:"",chkAgreement:"", formType:"signUp"};
    const [formState, updateFormState] = useState(initialFormState);
    const [user, setUser] = useState(null);
    useEffect(()=>{
    checkUser();
    },[])

    const { register, handleSubmit, errors, control } = useForm();
    const handleError = (errors) => { console.log("Form Errors: "+ errors)};
    const {formType} = formState;
    const handleRegistration = async (data) =>{ 
      try{
        console.log("Sending to the API")
        await API.graphql(graphqlOperation(
          newusermut,{
            input:{
              
              email: data.email,
              first_name: data.fname,
              last_name: data.lname,
              job_title: data.jobtitle,
              company: data.company,
              employees: data.employees.value,
              industry: data.industry.value,
              country: data.country.value,
            }

        }))
      console.log("This is the users data:"+JSON.stringify(data))
      console.log("Data sent to the API")
      }
      catch(err){
        console.log("API err:", err )
      }
    };
    
      async function checkUser(){
        try{
            const user = await Auth.currentAuthenticatedUser();
            console.log("The user is: "+user.Credentials.email)
            setUser(user);
            const a = await Auth.currentUserInfo();
            console.log("User Info is:"+ a);     
            updateFormState(()=>({...formState, formType: "signedIn"}));
        }catch(err){
            console.log(err);
        }
    }


    let username;
   
    function onChange(e){
        e.persist()
        console.log("changing:"+e.target.name);
        updateFormState(()=>({...formState, [e.target.name]: e.target.value}))
    }

/**SignUp Function */
    async function SignUp(){
         console.log("Signing up")
         try{
             const {email, password, confPassword} = formState;
             username = email;
            if(password === confPassword){
                await Auth.signUp({username, password,attributes: {email}})
                updateFormState(()=>({...formState, formType: "verifyMail"}))
                console.log("SignUp complete")
            }else{
              togglePass();
            }    
        }
        catch(err){
            console.log("Error:"+JSON.stringify(err));  
            alert(err.message);  
        }
/**End of SignUp Function */}



async function verifyEmail(){/**Verify email Function */
updateFormState(()=>({...formState, formType: "signIn"}))
}/**Verify email Function */


 return (<div>
     {formType === "signUp" && (
   <Container className="container-fluid">
    <Row>
        <Col className="text-secondary order-md-1 mt-5 text-center">
            <h4 
            className="text-dark display-4">Register today</h4>
            <p>All seed for cattle good which. Stars us saying grass morning spirit seed one fourth very said you sixth spirit. Created days.</p>
            <img className="img-fluid text-center"  src="./images/featurette.png" width="500" height="400" alt="vector"/>
            <p>Brought first let lesser appear that give two called forth fill. Firmament. Saying deep, abundantly blessed so. Itself said seed evening and air seed beast of fruitful, open.</p>
        </Col>
        
        
        <Col id="subDiv2" className="order-md-2">
            <Card className="mb-4 mt-4 bg-light shadow" >
                <Card.Body>
        <div className="m-auto">
        <Image className="d-block mx-auto mb-4 img-fluid" src="./images/fav-logo.png" alt="Our logo" width="85" height="85"/>
        </div>
        <h4 className="mb-3 fw-normal text-center">Please Fill in your details to sign up</h4>

      <Form className="row g-3 m-4 p-4" onSubmit={handleSubmit(handleRegistration, handleError)}> 
        <FormGroup className="col-md-6">
            <Label for="fname" className="visually-hidden" >First name</Label>
            <Input type="text" innerRef={register(registerOptions.fname)} className="form-control" onChange={onChange} name="fname" placeholder="First Name" required autofocus/> 
            <div className="valid-feedback">
            </div>
        </FormGroup>
        <FormGroup className="col-md-6">
            <Label for="lname" className="visually-hidden">Last name</Label>
            <Input type="text" innerRef={register(registerOptions.lname)} className="form-control" onChange={onChange} name="lname" placeholder="Last Name" required/>
            <div className="valid-feedback">
            </div>
        </FormGroup>
       <FormGroup className="col-12">
        <Label for="jobtitle" className="visually-hidden">Job Title</Label>
        <Input type="text" innerRef={register(registerOptions.jobtitle)} name="jobtitle" className="form-control"  onChange={onChange}  placeholder="Job Title" required/>
       </FormGroup>
          <FormGroup className="col-md-12">
              <Label for="email" className="visually-hidden">Email address</Label>
              <Input type="email" name="email" innerRef={register(registerOptions.email)} className="form-control"  onChange={onChange}  placeholder="Email" required />
          </FormGroup>
        <FormGroup className="col-12">
            <Label for="password" className="visually-hidden">Password</Label>
            <Input type="password" name="password" innerRef={register(registerOptions.password)} className="form-control" onChange={onChange}  placeholder="Password" required/>
        </FormGroup>

        <FormGroup className="col-12">
            <Label for="confPassword" className="visually-hidden">Confirm Password</Label>
            <Input type="password" name="confPassword" innerRef={register(registerOptions.password)} className="form-control" onChange={onChange} placeholder="Confirm Password" required/>
        </FormGroup>
          <PopUp isOpen={modalPass} 
          btnTxtPositive="Retry" 
          title="Sign up Failed" 
          body={signupFailMsg} 
          toggle={togglePass} 
          className={className}/>
        
      
         <FormGroup className="col-12">
         <Label for="company" className="visually-hidden">Company</Label>
         <Input type="text" name="company" innerRef={register(registerOptions.company)} className="form-control" onChange={onChange} placeholder="Company" required/>
         </FormGroup>
          <FormGroup className="col-12">
                  <Label for="employees" className="visually-hidden">Number of employees</Label>  
                  <Controller name="employees" control={control} as={Select} onChange={onChange} options={selectEmpOptions} defaultValue="Employees" rules={registerOptions.employees}/>
                    <small className="text-danger">{errors.employees && errors.employees.message}</small>
              
          </FormGroup>
          <FormGroup className="col-12">
              <Label for="industry" className="visually-hidden">Industry</Label>
               <Controller name="industry" control={control} as={Select} onChange={onChange} options={selectOptionsIndustry} defaultValue="industry" rules={registerOptions.industry}/>
                    <small className="text-danger">{errors.industry && errors.industry.message}</small>
          </FormGroup>
          <FormGroup className="col-12">
              <Label for="country" className="visually-hidden">Country</Label>
               <Controller name="country" control={control} as={Select} onChange={onChange} options={selectOptionsCountry} defaultValue="Country" rules={registerOptions.country}/>
                    <small className="text-danger">{errors.country && errors.country.message}</small>
          </FormGroup>
            <FormGroup className="checkbox mb-3">
            <span>
                <input type="checkbox" name="chkAgreement" onChange={onChange} value="i-agree"/>I agree to the <p className="btn-link d-none d-md-inline-block pointer">Master Subscription Agreement.</p>
            </span>
             </FormGroup>
        <div className="checkbox mb-3 ">
        <span  >By registering, you agree to the processing of your personal data by Bahati Tech as described in the </span><p className="btn-link d-none d-md-inline-block pointer">Privacy policy</p>
    </div>
        
        <FormGroup className="checkbox mb-3">
        <span>
            <input type="checkbox" value="newsletter"/>   Yes, I would like to receive marketing communications regarding Bahati Tech products, services, and events. I can unsubscribe at a later time.</span>
        <Button type="submit" className="w-100 mt-5 btn btn-lg btn-success" onClick={SignUp} disabled={formState.chkAgreement ===""||formState.fname===""||formState.password===""}  >REGISTER</Button>
        </FormGroup>
        </Form>
        </Card.Body>
            </Card>
    </Col>
    </Row>
    
    </Container>
    )
}
{ formType === 'signIn' && (

<Redirect to="/signIn" />

)}
{ formType === 'verifyMail' && (
<Container className="mt-3 pt3 "><h1>Verify email address</h1>
<span>Check your email and click the link to verify your email.</span><br/>
<span>Once your email is verified click continue to proceed to login.</span>
<Button  className="btn btn-primary pointer" onClick={verifyEmail}>Continue</Button>
</Container>
)}
{ formType === 'signedIn' && (
   <Redirect to="/" />
)

}

</div>
 )
}
 // newxhr.responseType = 'json';
      // newxhr.open("POST", "https://hz42cxnj3bglxg7jzixqltzw3q.appsync-api.eu-west-1.amazonaws.com/graphql", true);
      // newxhr.setRequestHeader("Content-Type", "application/json");
      // newxhr.setRequestHeader('ApiKey',"da2-uby2k7c4vjcuzpf76guyudkjau");
      // newxhr.setRequestHeader("Accept", "application/json");
      // newxhr.onload = function () {
      //   console.log('data returned:', newxhr.response);
      // }
      // newxhr.send(JSON.stringify(data)); 
export default Register;