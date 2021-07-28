import React,{useEffect, useState} from 'react'
import { Content, Footer, Header } from '../shared/index'
import {Auth} from 'aws-amplify';

const MainLayout = () => {
  const [user, setUser] = useState();
  let signedIn;
 async function checkUser(){
        try{
            const userchk = await Auth.currentAuthenticatedUser();
            console.log("The user is: "+user.Credentials.email)
            if((userchk!== undefined)||(userchk!==null)){
            setUser(userchk);
           signedIn = true;
           }else{
             signedIn=false;
           }
        }catch(err){
        console.log("user Error:",err); 
        }
    }
  useEffect(()=>{
    checkUser();
    },[])

  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header signedIn={signedIn} show={true} signOut= {async()=>{
      console.log("Signing out");
      await Auth.signOut();}} />
        <div className="w-screen">
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
