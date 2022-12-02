import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Layouts from './Layouts'
import {Auth} from 'aws-amplify';
import './Dash/scss/style.scss'

// Pages
import Login from './Dash/views/pages/login/Login';
import Register from './Dash/views/pages/register/Register';
import Page404 from './Dash/views/pages/page404/Page404';
import Page500 from './Dash/views/pages/page500/Page500';
import TOTP from './Dash/views/pages/login/TOTP';


function App()  {
   const [signedIn, setSignedIn] = useState(false);
   const [userGroup, setUserGroup] = useState();
   const [userEmail, setUserEmail] = useState();
   const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal);
   const [errMsg, setErrMsg] = useState("")
   const history = useHistory();
   
   useEffect(()=>{
    const checkU = async () => checkUser();
    checkU();
    },[])

    const signInHandler = async (formData) =>{
      await Auth.signIn(formData.email, formData.password)
      .then(res=>{
        checkUser()
      })
      .catch((err)=>{
        errorHandler(err)
        console.log("Sign In Error", err)
      })
      
    }
    
    const signOutHandler = async () =>{
      await Auth.signOut().catch((err)=>{
        console.log("Signout Error",err)

      });
      setSignedIn(false);
    }

    const errorHandler = (err) =>{
      setErrMsg(err.message);
      toggle();
    }

async function checkUser(){
        try{
            const userchk = await Auth.currentAuthenticatedUser();
            if((userchk!== undefined)||(userchk!==null)){
            setUserEmail(userchk.attributes.email)
            setUserGroup(userchk.signInUserSession.accessToken.payload["cognito:groups"][0]);
            setSignedIn(true);
           }
        }catch(err){
        console.log("user Error:",err); 
        }
     }
    return (
      <Router>
          <Switch>
            <Route exact path="/login" name="Login Page" render={(props) => <Login signedIn={signedIn} signInHandler={signInHandler} toggle={toggle} modal={modal} errMsg={errMsg} {...props} />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/totp" name="TOTP" render={(props) => <TOTP {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route path="/" name="Home" render={(props) => <Layouts signedIn={signedIn} signOutHandler={signOutHandler} userGroup={userGroup} user={userEmail} setUser={setUserEmail}  {...props} />} />
          </Switch>
      </Router>
    )
  }

  // Amplify.Logger.LOG_LEVEL = "DEBUG";

export default React.memo(App)
