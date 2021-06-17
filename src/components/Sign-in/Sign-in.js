import React,{useState, useEffect} from 'react';
import {Container, Row, Image, Col,Card,Form} from 'react-bootstrap';
import {Label, Input, FormGroup,Button} from 'reactstrap';
import Footer from '../index/Footer'
import {Link, Redirect} from 'react-router-dom';
import {Auth} from 'aws-amplify';
import { PopUp } from '../Modal';

export function SignIn (props) {
  const {className}=props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [user, setUser] = useState(null);
  const initialFormState = {email:"", password:"",  formType:"signIn"};
  const [formState, updateFormState] = useState(initialFormState);
  var signinFailMsg = "You have filled in an incorrect email or password. Please retry with the correct details. If you dont have an account, create a new account.";
  const {formType} = formState;

 async function checkUser(){
        try{
            const user = await Auth.currentAuthenticatedUser();
            console.log("The user is: "+user.Credentials.email)
            setUser(user);
            const a = await Auth.currentUserInfo();
            console.log("User Info is:"+ a);     
            updateFormState(()=>({...formState, formType: "signedIn"}));
        }catch(err){
         console.log("user Error:" +err);
         //signinFailMsg = err;
        }
    }

 function onChange(e){
        e.persist()
        console.log("changing:"+e.target.name);
        updateFormState(()=>({...formState, [e.target.name]: e.target.value}))
    }
 async function handleSignIn(){
    try{
        const {email, password} = formState
        await Auth.signIn(email, password)   
        const exists =  await Auth.Credentials.get();
        updateFormState(()=>({...formState, formType: "signedIn"}))
        console.log("Logged in")
        }catch(err){
            //signinFailMsg = err;
            toggle();
            console.log("Sign in Error: "+ JSON.stringify(err));
       }
}

    
    useEffect(()=>{
    checkUser();
    },[])

 return (<div>
  {formType === 'signIn' && (
 <div>
 <Container className="container my-auto mx-auto ">
    <Row>
      <Col className="col-md-5 mx-auto">
         <Card className="mt-3 mb-4 bg-light shadow" >
                <Card.Body className="">
        <Image className=" d-block mx-auto img-fluid" src="./images/fav-logo.png" alt="Our logo" width="85" height="85"/>
              <h4 className="w-full text-3xl text-center font-bold">Please Sign In</h4>
              <div className="relative w-full mt-10 space-y-8">

              <Label for="email" className="text-lg font-medium text-gray-900 mx-8 ">Email address</Label>
              <Input type="email" name="email" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 " onChange={onChange} placeholder="Email address" required autoFocus/>
              <Label for="password" className="text-lg  font-medium mx-8 text-gray-900">Password</Label>
              <Input type="password" name="password" className=" block w-full px-4 pb-5 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 " onChange={onChange} placeholder="Password" required/>
              </div>
              <div className="relative">

              <Button className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease" onClick={handleSignIn} type="submit">Sign in</Button>
              </div>
              <PopUp isOpen={modal} btnTxtPositive="Retry" btnTxtNegative="Sign up" popupType="two-btns" 
               title="Sign up Failed" 
               btnNegativeLink="/register"
               body={signinFailMsg} 
               toggle={toggle} className={className}/>
              <p className="mt-5 mb-3 text-muted">Don't have account? Click <Link to="/register">here</Link> to register.</p>
              <p className="mt-5 mb-3 text-muted text-center">&copy;2021</p>
</Card.Body>
            </Card>
      </Col>
    </Row>
  </Container>
  <Footer/>
  </div>
  )}
{ formType === 'signedIn' && (<Redirect to="/" />)}
 </div>
 )
}
