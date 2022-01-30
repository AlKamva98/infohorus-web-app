import React,{useState} from 'react'
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {PopUp} from '../../../../Home/shared/utils/Modal'

  const Login = (props) => {

const {signedIn, checkUser} = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [msg, setMsg] = useState("")
  const initialFormState = {email:"", password:""};
  const [formState, updateFormState] = useState(initialFormState);
  //var signinFailMsg = "You have filled in an incorrect email or password. Please retry with the correct details. If you dont have an account, create a new account.";



 function onChange(e){
        e.persist()
        console.log("changing:",e.target.name);
        updateFormState(()=>({...formState, [e.target.name]: e.target.value}))
    }
 async function handleSignIn(){
    try{
        const {email, password} = formState
        await Auth.signIn(email, password)
        console.log("User is signed in", signedIn)
        checkUser()
        }catch(err){
            setMsg(err.message);
            toggle();
            console.log("Sign in Error: ",err);
       }
}

    
    

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
    {signedIn  ?
      (<Redirect to="/dash/dashboard" />):(<div>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <div className=" mb-4">
    <img className=" d-block mx-auto img-fluid" src="./images/fav-logo.png" alt="Our logo" width="40" height="40"/>
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
                        <CButton color="primary" onClick={()=>{handleSignIn()}} >
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
      <PopUp
      title="Login Error!" 
      body={`Error: ${msg}`} 
      isOpen ={modal}
      btnTxtPositive="Retry"
      />
      </div>
      )
    
    }
    </div>
  )
}

export default Login
