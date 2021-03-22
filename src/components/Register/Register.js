import React,{useState, useEffect} from 'react';
import {Container, Row, Col,Card,Form} from 'react-bootstrap';
import {Label, Input, FormGroup,Button, Modal, ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import Select from 'react-select';
import {Redirect} from 'react-router-dom';
import {selectOptionsCountry, selectEmpOptions, selectOptionsIndustry} from '../../testData/selectOptions.js'
import { useForm, Controller } from "react-hook-form";
import { Amplify, API, Auth, Storage } from 'aws-amplify';
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

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [modalPass, setModalPass] = useState(false);
  const togglePass = () => setModalPass(!modalPass);

    const initialFormState = {
        fname:"", lname:"",email:"", password:"", confPassword:"", jobtitle:"", company:"",employees:"",industry:"", authCode:"", formType:"signIn"
    };
    const [formState, updateFormState] = useState(initialFormState);
    const [user, updateUser] = useState(null);
    useEffect(()=>{
    checkUser();
    },[])

    const { register, handleSubmit, errors, control } = useForm();
    const handleRegistration = (data) => console.log("This is the users data:"+data);
    const handleError = (errors) => {};
    const registerOptions = {
        fname: { required: "First name is required" },
        lname: { required: "Last name is required" },
        email: { required: "Email is required" },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters containing atleast 1 uppercase, 1 lowercase, 1 number and 1 special character"
      }

    },
    jobtitle:{ required: "Job Title is required"},
    company:{ required: "Company name is required"},
    employees: {required: "Number of employees is required"},
    country: {required: "Country is required"},
    industry:{required: "Industry is required"}
    };
    
   
    async function checkUser(){
        try{
            const user = await Auth.currentAuthenticatedUser();
            console.log("The user is: "+user)
            updateUser(user);
            const a = await Auth.currentUserInfo();
            console.log("User Info is:"+ a);     
            updateFormState(()=>({...formState, formState: "signedIn"}));
        }catch(err){
            console.log(err);
        }
    }


    let username;
    let prefered_username;
    function onChange(e){
        e.persist()
        console.log("changing:"+e.target.name);
        updateFormState(()=>({...formState, [e.target.name]: e.target.value}))
    }

    const {formType} = formState;


/**SignUp Function */
    async function SignUp(){
         console.log("Signing up")
         try{
        
             const {fname,lname, email, password, confPassword} = formState;
            prefered_username = fname+lname.charAt(0)+Math.round(Math.random()*1000);
            username = email;
            // console.log("The username is: "+username);
            if(password === confPassword){
                await Auth.signUp({username, password,attributes: {
                email
                
                }})
                updateFormState(()=>({...formState, formType: "verifyMail"}))
                console.log("SignUp complete")
            }else{
                
              togglePass();
            }    
        }
        catch(err){
            console.log("Error:"+err);    
        }
/**End of SignUp Function */}

const signupScreen = ()=>{/**SignUp redirect */
     updateFormState(()=>({...formState, formType: "signUp"}))
}/**End ofSignUp redirect */


async function verifyEmail(){/**Verify email Function */
  const {email, authCode} = formState;
  username = email;
await Auth.confirmSignUp(username,authCode);
console.log("The username is: "+username+" and the authcode is "+authCode)
updateFormState(()=>({...formState, formType: "signIn"}))
}/**Verify email Function */

async function SignIn(){/**SignIn Function */
    try{
        const {email, password} = formState
        await Auth.signIn(email, password)   
        const exists =  await Auth.Credentials.get();
        updateFormState(()=>({...formState, formType: "signedIn"}))
        console.log("Logged in")
        }catch(err){
            toggle();
            console.log(err);
            
        }

}/**End of SignIn Function */

 return (<div>
     {formType === "signUp" && (
   <Container className="container-fluid">
    <Row>
        <Col className="text-secondary my-auto text-center">
            <h4 
            className="text-dark">Register today</h4>
            <p>All seed for cattle good which. Stars us saying grass morning spirit seed one fourth very said you sixth spirit. Created days.</p>
            <img className="img-fluid text-center"  src="./images/featurette.png" width="500" height="400" alt="vector"/>
            <p>Brought first let lesser appear that give two called forth fill. Firmament. Saying deep, abundantly blessed so. Itself said seed evening and air seed beast of fruitful, open.</p>
        </Col>
        
        
        <Col id="subDiv2">
            <Card className="mb-4 mt-4 bg-light shadow" >
                <Card.Body>
        <div className="mx-auto">
        <img className="mb-4" src="./images/fav-logo.png" alt="Our logo" width="85" height="85"/>
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
          <Modal isOpen={modalPass} toggle={togglePass} className={className}>
        <ModalHeader toggle={togglePass}>Sign up Failed</ModalHeader>
        <ModalBody>Passwords are different!! Pasword and Confirm Password must be the same
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={togglePass}>Retry</Button>{' '}
        </ModalFooter>
      </Modal>
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
        <Button type="submit" className="w-100 mt-5 btn btn-lg btn-success" onClick={SignUp}  >REGISTER</Button>
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
<Container className="container my-auto mx-auto ">
    <Row>
      <Col className="col-md-5 mx-auto">
         <Card className="mt-3 mb-4 bg-light shadow" >
                <Card.Body>
        <img className=" mx-auto" src="./images/fav-logo.png" alt="Our logo" width="85" height="85"/>
              <h1 className="text-center lead h3 mb-3 mt-5 fw-normal">Please sign in</h1>
              <label for="email" className="visually-hidden">Email address</label>
              <input type="email" name="email" className="form-control" onChange={onChange} placeholder="Email address" required autoFocus/>
              <label for="password" className="visually-hidden">Password</label>
              <input type="password" name="password" className="form-control" onChange={onChange} placeholder="Password" required/>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" onChange={onChange} value="remember-me"/> Remember me
                </label>
              </div>
              <Button className="w-100 btn btn-lg btn-success" onClick={SignIn} type="submit">Sign in</Button>
              <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Sign in Failed</ModalHeader>
        <ModalBody>
          You have filled in an incorrect email or password. Please retry with the correct details. If you dont have an account, create a new account.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Retry</Button>{' '}
          <Button color="secondary" onClick={signupScreen}>Sign up</Button>
        </ModalFooter>
      </Modal>
              <p className="mt-5 mb-3 text-muted">Don't have account? Click <p className="btn-link d-none d-md-inline-block pointer" onClick={signupScreen}>here</p> to register.</p>
              <p className="mt-5 mb-3 text-muted text-center">&copy;2021</p>
</Card.Body>
            </Card>
      </Col>
    </Row>
  </Container>

)}
{ formType === 'verifyMail' && (
<Container className="mt-3 pt3 "><h1>Verify email address</h1>
<span>Check your email and click the link to verify your email.</span><br/>
<span>Once your email is verified click continue to proceed to login.</span>
<FormGroup className="col-12">
         <Label for="authCode" className="visually-hidden">Company</Label>
         <Input type="text" name="authCode" innerRef={register(registerOptions.authCode)} className="form-control" onChange={onChange} placeholder="Enter Code" required/>
         </FormGroup>
<Button  className="btn btn-primary pointer" onClick={verifyEmail}>Verify</Button>
</Container>
)}
{ formType === 'signedIn' && (
   <Redirect to="/" />
)

}

</div>
 )
}

export default Register;