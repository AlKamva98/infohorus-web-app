import {Auth} from 'aws-amplify';
import React from 'react';
import {  Redirect, Route, Switch } from 'react-router-dom';

//Containers
import DefaultLayout from './Dash/layout/DefaultLayout';
import MainLayout from './Home/layout/MainLayout';


const Layouts = (props) => {
const {setSignedIn, signedIn, userGroup, user} = props;
 

    const signOut = async()=>{
      try{
      console.log("Signing out");
      setSignedIn(false);
      await Auth.signOut();
    }catch(err){
      console.log("Rendering Error: ", err)
    }
      }

  return (
        <Switch>
          <Route path="/dash" name="DashboardHome" render={(props) => <DefaultLayout  userGroup={userGroup} signedIn={signedIn} user={user} signOut={signOut} {...props} />} />
          <Route path="/main" name="Main" render={(props) => <MainLayout userGroup={userGroup} getUserStatus={signedIn} signOut={signOut} {...props} />} />
          
          <Redirect from="/" to="/main"/>
        </Switch>
    
  ) 
}

export default React.memo(Layouts);
