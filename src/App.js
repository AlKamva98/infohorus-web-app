import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layouts from './Layouts'
import Amplify,{Auth} from 'aws-amplify';
import './Dash/scss/style.scss'

// Pages
import Login from './Dash/views/pages/login/Login';
import Register from './Dash/views/pages/register/Register';
import Page404 from './Dash/views/pages/page404/Page404';
import Page500 from './Dash/views/pages/page500/Page500';


function App()  {
   const [signedIn, setSignedIn] = useState(false);
   const [userGroup, setUserGroup] = useState();
   const [user, setUser] = useState();
   const checkUser = async () =>{
       try{
           const userchk = await Auth.currentAuthenticatedUser();
           console.log("The user is: ",userchk.attributes.email)
           if((userchk!== undefined)||(userchk!==null)){
           setUser(userchk.attributes.email)
           setUserGroup(userchk.signInUserSession.accessToken.payload["cognito:groups"][0]);
           setSignedIn(true);
          }
       }catch(err){
       console.log("user Error:",err); 
       }
    }
  useEffect(()=>{

    checkUser();
    },[])

    return (
      <Router>
          <Switch>
            <Route exact path="/login" name="Login Page" render={(props) => <Login signedIn={signedIn} checkUser={checkUser} userGroup={userGroup} {...props} />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route path="/" name="Home" render={(props) => <Layouts signedIn={signedIn} setSignedIn={setSignedIn} userGroup={userGroup} user={user} setUser={setUser} {...props} />} />
          </Switch>
      </Router>
    )
  }

  Amplify.Logger.LOG_LEVEL = "DEBUG";

export default React.memo(App)
