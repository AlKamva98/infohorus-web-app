import React from 'react';
import {  Redirect, Route, Switch } from 'react-router-dom';

//Containers
import DefaultLayout from './Dash/layout/DefaultLayout';
import MainLayout from './Home/layout/MainLayout';


const Layouts = (props) => {
const {signOutHandler, signedIn,setUser, userGroup,otpVerified, user} = props;

    const handleSignOut = async()=>{
        signOutHandler() 
      }

  return (
        <Switch>
          <Route path="/dash" name="DashboardHome" render={(props) => <DefaultLayout  userGroup={userGroup} otpVerified={otpVerified} signedIn={signedIn} setUser={setUser} user={user} signOut={handleSignOut} {...props} />} />
          <Route path="/main" name="Main" render={(props) => <MainLayout userGroup={userGroup} signedIn={signedIn}  signOut={handleSignOut} {...props} />} />
          
          <Redirect from="/" to="/main"/>
        </Switch>
    
  ) 
}

export default React.memo(Layouts);
