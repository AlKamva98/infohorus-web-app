import React,{useState} from 'react'
import { Link } from 'react-router-dom'
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
import TOTP from './TOTP'

  const Login = (props) => {

const {signedIn, signInHandler,handleVerified, toggle,modal, errMsg} = props;
  const initialFormState = {email:"", password:""};
  const [formState, updateFormState] = useState(initialFormState);

 function onChange(e){
        e.persist()
        updateFormState(()=>({...formState, [e.target.name]: e.target.value}))
    }
 async function handleSignIn(e){
        e.preventDefault()
        signInHandler(formState);
        e.target[0].value = "";
        e.target[1].value = ""
        updateFormState(initialFormState);
}

  return (
    <div className="bg-light min-vh-100 ">
    {signedIn  ?
      (<TOTP handleVerified={handleVerified}/>):(<div className='d-flex flex-row pt-5 align-items-center'>
      <CContainer >
        <CRow className=" pt-5 justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4 shadow">
                <CCardBody className='pt-5'>
                  <CForm onSubmit={handleSignIn}>
                    <div className=" mb-4">
    <img className=" d-block mx-auto img-fluid" src="./images/logonew.png" alt="Our logo" width="150" height="100"/>
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
                        <button className="flex items-center w-full btn text-lg text-white bg-cyan-600 focus:bg-cyan-600 focus:ring-4 focus:ring-cyan-400  sm:mb-0 hover:bg-cyan-800 sm:w-auto" type="submit" >
                          Login
                        </button>
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
              <CCard className="text-white bg-cyan-900 py-5 shadow" style={{ width: '44%' }}>
                <CCardBody className="text-center ">
                  <div>
                    <h1 classsName="w-full mr-2 text-2xl text-center font-extrabold" >Request Demo</h1>
                    <p>
                     Request a demo and see for yourself how Infohorus can help you improve, assess and improve your cybersecurity posture, build a collaborative cybersecurity culture across your organization and prepare to respond and recover from any attacks you may encounter.
                    </p>
                    <Link to="/main/demo">
                      <button className="flex  items-center w-full btn text-lg text-white mx-auto my-4 bg-cyan-900 border-cyan-600 sm:mb-0 hover:bg-cyan-600 sm:w-auto" >
                      Request Demo
                      </button>
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
      body={`Error: ${errMsg}`}
      isOpen ={modal}
      toggle={toggle}
      prev={"/login"}
      btnTxtPositive="Retry"
      />
      
      </div>
      )
    
    }
    </div>
  )
}

export default Login
