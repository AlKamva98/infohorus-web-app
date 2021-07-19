import React,{useState, useEffect, Suspense} from 'react'
import { Link, Redirect } from 'react-router-dom'
import {Auth} from 'aws-amplify';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormControl,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import logo from '../../../../Home/assets/fav-logo.png'

const Login = (props) => {

  const {className, signedIn}=props;
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
       // await Auth.signIn(email, password)   
        updateFormState(()=>({...formState, formType: "signedIn"}))
        console.log("Logged in", email)
        console.log("Logged in", password)
        return(
          <Suspense fallback={<CSpinner color="primary" className="mx-auto my-auto" />}>
            <Redirect to="/"/>
          </Suspense>
        )
        }catch(err){
            //signinFailMsg = err;
            toggle();
            console.log("Sign in Error: "+ JSON.stringify(err));
       }
}

    
    useEffect(()=>{
    checkUser();
    },[])

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <div className=" mb-4">
    <img className=" d-block mx-auto img-fluid" src={logo} alt="Our logo" width="40" height="40"/>
              <h4 className="w-full mr-2 text-2xl text-center font-extrabold">Sign In</h4>
</div> 
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                      <CFormControl placeholder="Email" autoComplete="email" type="email" name="email" className="placeholder-gray-400 text-lg bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 " onChange={onChange}  required autoFocus/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                      <CFormControl
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name="password" className="placeholder-gray-400 text-lg bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 "
                        onChange={onChange}  required
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" onClick={handleSignIn} >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
