import {Auth,API} from 'aws-amplify';
import React,{useEffect,useState} from 'react';
import {  Redirect, Route, Switch } from 'react-router-dom';
import * as queries from './graphql/queries';
//Containers
import DefaultLayout from './Dash/layout/DefaultLayout';
import MainLayout from './Home/layout/MainLayout';


const Layouts = (props) => {
const {setSignedIn, signedIn, userGroup, user} = props;
 const [userObj, setUserObj]= useState({})

    const signOut = async()=>{
      try{
      console.log("Signing out");
      setSignedIn(false);
      await Auth.signOut();
    }catch(err){
      console.log("Rendering Error: ", err)
    }
      }
      useEffect(()=>{
        getUser().then(User => {
          setUserObj(User);
          console.log("This ",userObj)
          
            })
      },[])
async function getUser() {
      try {
        var userslist = await API.graphql({query: queries.listUsers, variables:{filter: {email: {contains: user}}}});
        console.log("This is the user",userslist)
        return userslist.data.listUsers.items[0];
      } catch (err) {
          console.log("Error:>> ", err);
      }
  }
  return (
        <Switch>
          <Route path="/dash" name="DashboardHome" render={(props) => <DefaultLayout  userGroup={userGroup} signedIn={signedIn} user={user} signOut={signOut} userObj={userObj} {...props} />} />
          <Route path="/main" name="Main" render={(props) => <MainLayout userGroup={userGroup} getUserStatus={signedIn} signOut={signOut} {...props} />} />
          
          <Redirect from="/" to="/main"/>
        </Switch>
    
  ) 
}

export default React.memo(Layouts);
