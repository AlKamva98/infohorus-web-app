import {Auth} from 'aws-amplify';
import React,{useEffect, useState} from 'react';
import {  Redirect, Route, Switch } from 'react-router-dom';

//Containers
import DefaultLayout from './Dash/layout/DefaultLayout';
import MainLayout from './Home/layout/MainLayout';


const Layouts = () => {
const [user, setUser] = useState();
  const[signedIn, setSignedIn] = useState(false);

  useEffect(()=>{
    checkUser();
    },[])

async function checkUser(){
        try{
            const userchk = await Auth.currentAuthenticatedUser();
            console.log("The user is: "+userchk)
            if((userchk!== undefined)||(userchk!==null)){
            setUser(userchk);
           setSignedIn(true);
           
           }else{
             setSignedIn(false);
           }
        
        }catch(err){
        console.log("user Error:",err); 
        }
     }

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
          <Route path="/dash" name="DashboardHome" render={(props) => <DefaultLayout getUserStatus={signedIn} signOut={signOut} {...props} />} />
          <Route path="/main" name="Main" render={(props) => <MainLayout getUserStatus={signedIn} signOut={signOut} {...props} />} />
          <Redirect from="/" to="/main"/>
        </Switch>
    
  ) 
}

export default React.memo(Layouts);
